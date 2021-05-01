// In the lab.js builder interface, add this script to the 
// 'after:prepare' stage.

// --- Configuration ---------------------------------------------------

// Begin recording without waiting for user interaction?
// Note: The browser might block auto recording if the user has not 
// interacted with the website. Adding a slide that requires user 
// interaction (e.g., a "test recording" slie" will probably solve 
// this issue.
const auto_record = false;
const start_event = 'run';   // lab.js event that will trigger start
const stop_event = 'end';   // lab.js event that will trigger start

// Use recording interface on the page?
const rec_button = 'recBtn'; // HTML elemnt id or false to deactivate
const clip_list = 'clips';   // HTML elemnt id or false to deactivate

// Store recording in lab.js data store (options.data) as base64 encoded
//  string? See https://labjs.readthedocs.io/en/latest/reference/data.html
const save_to_labjs_data = false;  

// Upload recording to JATOS? 
// note: jatos js library is only available in JATOS and must probably be 
// loaded first.  If this is `true` outside of jatos it will throw an error
const save_to_jatos = false;    
const filename = 'audio.ogg';   // name for audio file on JATOS

// The audio codec to use for the recording. There are other codecs,
// and their support varies between browsers. Hopefully this one works
// across all modern browsers.
const audio_codec = 'audio/ogg; codecs=opus'

// ---------------------------------------------------------------------


const c = this;
let mediaRecorder;


c.on('after:prepare', async function() {
  if (navigator.mediaDevices.getUserMedia) {

    await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(setupRecorder, throwError);

  } else {
    // TODO: use lab.js to abort experiment instead of asking user
    alert.log('Audio recording not supported by your browser!');
  }
});




let setupRecorder = function(stream) {

  mediaRecorder = new MediaRecorder(stream);
  let chunks = [];  // buffer for recording

  // called automatically during recording, 
  // fill buffer with sound snippets
  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  // called automatically when recording stops, 
  // piece together sound snippets from the buffer and store result
  mediaRecorder.onstop = function(e) {

    const blob = new Blob(chunks, { 'type' : audio_codec });
    const audioURL = window.URL.createObjectURL(blob);

    let info = `Chunk length: ${ chunks.length }, blob size: ${ blob.size }. `
    info = info.concat( 
      blob.size > 0 ? `Looks good! ` : `Looks like no sound was recorded! ` 
    );


    if (save_to_labjs_data) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        component.options.datastore.set('filename', filename);
        component.options.datastore.set('audio', this.result);
      }
      info = info.concat(`Audio stored in lab.js data store.`);
    }


    if (save_to_jatos) {
      jatos.uploadResultFile(blob, filename).done(() => { 
        info = info.concat(`Audio uploaded to JATOS as ${ filename }`);
      });
    }


    if (clip_list) {
      showNewClip(audioURL);
    }

    console.info(info);
    chunks = [];
  }

  c.on(start_event, function() { 
    if (auto_record) { mediaRecorder.start(); }
    if (rec_button) { activateRecButton(); }
   });
  
  c.on(stop_event, function() { 
    if (auto_record) { mediaRecorder.stop(); }
  });
}



// add event handler to button
const activateRecButton = function() {
  console.log("button active")
  const recBtn = document.getElementById(rec_button);
  recBtn.disabled = false;

  // is it already recording? (auto_record option)
  if (mediaRecorder.state == "recording") {
    recBtn.classList.add("recording")
  }
  
  recBtn.onclick = function(e) {
    e.preventDefault()
    
    if (mediaRecorder.state == "recording") {
      mediaRecorder.stop();
      recBtn.classList.remove("recording")
    } else {
      mediaRecorder.start();
      recBtn.classList.add("recording")
    }
  }
}


// add clip to the recorder interface
const showNewClip = function(audioURL) {
  const clipList = document.getElementById(clip_list);
  const clip = document.createElement('article');
  const audio = document.createElement('audio');
  audio.src = audioURL;
  audio.controls = true;
  clip.appendChild(audio);
  clipList.appendChild(clip);
}



let throwError = function(err) {
  console.warn('The following error occured: ' + err);
}

