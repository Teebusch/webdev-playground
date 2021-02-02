// make websocket connection

var socket = io.connect('http://localhost:4000');

var output   = document.getElementById('output'),
    handle   = document.getElementById('handle'),
    message  = document.getElementById('message'),
    btn      = document.getElementById('btn-send'),
    feedback = document.getElementById('feedback')

// emit events

btn.addEventListener('click', function() {
    if (message.value && handle.value) {
        socket.emit('chat', {
            handle: handle.value,
            message: message.value
        });
        message.value = '';
    }
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
})

// listen for events

socket.on('chat', function(data) {
    output.innerHTML += `<div><p class="ml-6 mt-4 mb-2"><strong>${data.handle}</strong></p><p class="inline-block rounded-full bg-white px-6 py-3 mb-4">${data.message}</p></div>`
    feedback.innerHTML = '';
})

socket.on('typing', function(data) {
    feedback.innerHTML = `<p><em>${data} is typing...</em></p>`;
})