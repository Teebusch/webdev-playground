// make websocket connection

var socket = io.connect('http://localhost:4000');

var output   = document.getElementById('output'),
    handle   = document.getElementById('handle'),
    message  = document.getElementById('message'),
    btn      = document.getElementById('btn-send'),
    feedback = document.getElementById('feedback')

// emit events

btn.addEventListener('click', function() {
    socket.emit('chat', {
        handle: handle.value,
        message: message.value
    });
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
})

// listen for events

socket.on('chat', function(data) {
    output.innerHTML += `<p><strong>${data.handle}</strong> ${data.message}</p>`
    feedback.innerHTML = '';
})

socket.on('typing', function(data) {
    feedback.innerHTML = `<p><em>${data} is typing...</em></p>`;
})