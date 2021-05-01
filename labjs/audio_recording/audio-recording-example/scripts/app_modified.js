if (!navigator.mediaDevices.getUserMedia) {
  // abort experiment ...
  // better do this on a separate slide
  
  console.log('getUserMedia not supported on your browser!');
} else {

  let chunks = []; // audio buffer before uploading

  let onSuccess = function (stream) {
    
    // TODO: add event listeners: 
    // on screen load -> start recording
    // keyboard press space bar -> stop recording

    const mediaRecorder = new MediaRecorder(stream);

    let startRecording = function () {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
    }

    let stopRecording = function () {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      // mediaRecorder.requestData();
    }

    // automatically push data to buffer 
    mediaRecorder.ondataavailable = function (e) {
      chunks.push(e.data);
    }

    // automatically uplad data when the recording stops
    mediaRecorder.onstop = function (e) {
      console.log("Recorder stopped");

      const filename = "trial_x-item_y.ogg"; // TODO: customize
      const blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
      
      // only in JATOS
      jatos.uploadResultFile(blob, filename).done(() => { 
        console.info(filename + " uploaded");
      });
      
      chunks = []; // clear the buffer

    }
  }

  let onError = function (err) {
    console.log('The following error occured: ' + err);
  }

  navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess, onError);

}