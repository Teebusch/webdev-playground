// In the lab.js builder interface, add this script to the 
// 'after:prepare' stage.

// --- Configuration ---------------------------------------------------

// Automatically start / stop the recording on lab.js events?
// event name or 'false' to deactivate.
// Note that the browser might block auto-recording if the user has not 
// interacted with the website at all. Adding a slide that requires user 
// interaction (e.g., a "test recording" slide) should solve this issue.

const start_event = false; //'run';   
const stop_event = false; // 'end';  

// Use recording interface on the page?
// HTML element ids or `false` to deactivate

const rec_button = 'recBtn'; 
const clip_list = 'clips'; 

// Store recording in lab.js data store (options.data) as base64 string? 
// See https://labjs.readthedocs.io/en/latest/reference/data.html

const save_to_labjs_data = false;  

// Upload recording to JATOS? 
// Note: jatos.js library is only available in JATOS and must probably be 
// loaded first.  If this is `true` outside of jatos it will throw an error

const save_to_jatos = false;    
const filename = 'audio.ogg';   // name for audio file on JATOS

// The audio codec to use for the recording. There are other codecs,
// and their support varies between browsers. Hopefully this one works
// across all modern browsers.
// ToDo: Check which codecs are supported and adapt.

const audio_codec = 'audio/ogg; codecs=opus'

// ---------------------------------------------------------------------


const c = this;
let mediaRecorder;


let setupRecorder = function(stream) {

  console.log('recorder active');

  mediaRecorder = new MediaRecorder(stream);
  let chunks = [];  // buffer for recording
  let audioURL;     

  // set up event listeners
  // html elements are not available before the 'run' event!
  if (start_event) c.on(start_event, mediaRecorder.start);
  if (stop_event) c.on(stop_event, mediaRecorder.stop);
  if (rec_button) c.on('run', activateRecButton);
      

  // called automatically when recording stops, 
  // piece together sound snippets from the buffer and store result
  mediaRecorder.onstop = function(e) {

    const blob = new Blob(chunks, { 'type' : audio_codec });

    let info = `Chunk length: ${ chunks.length }, blob size: ${ blob.size }.`
    info = info.concat(blob.size > 0 ? ' Looks good!' : ' Looks like no sound was recorded!');

    if (save_to_labjs_data) {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        component.options.datastore.set('filename', filename);
        component.options.datastore.set('audio', this.result);
      }
      info = info.concat(' Audio stored in lab.js data store.');
    }

    if (save_to_jatos) {
      jatos.uploadResultFile(blob, filename).done(() => { 
        info = info.concat(` Audio uploaded to JATOS as ${ filename }.`);
      });
    }

    if (clip_list) { 
      if (audioURL) {
        // TODO: remove old audio url to free memory
        // ...
      }
      audioURL = window.URL.createObjectURL(blob);
      showClip(audioURL);
    }

    console.info(info);
    chunks = [];
  }

  // called automatically during recording, 
  // fill buffer with sound snippets
  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }
}



// add event handler to button
const activateRecButton = function() {
  const recBtn = document.getElementById(rec_button);
  recBtn.disabled = false;

  console.log('button active');

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
const showClip = function(audioURL) {
  const clip = document.createElement('article');
  const audio = document.createElement('audio');
  audio.src = audioURL;
  audio.controls = true;
  clip.appendChild(audio);
  
  // only show one clip at a time
  const clipList = document.getElementById(clip_list);
  clipList.removeChild(clipList.firstChild);
  clipList.appendChild(clip);
}


// c.on('after:prepare', async function() {
//window.onload = async function() {

  if (navigator.mediaDevices.getUserMedia) {

    await navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(setupRecorder, (err) => {
      console.warn('The following error occured: ' + err);
    });

  } else {
    // TODO: use lab.js to abort experiment 
    alert.log('Audio recording not supported by your browser.');
  }
//}
//});