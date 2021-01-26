// This is the server-side code 

var express = require('express');
var socket = require('socket.io');

// App setup 

var app = express();
var server = app.listen(4000, function() { 
    console.log('App listening to requests on port 4000');
});

// Static files

app.use(express.static('public'))

// Socket setup

var io = socket(server);

io.on('connection', function(socket) {
    console.log(`Socket connection established with id ${socket.id}`);

    socket.on('chat', function(data) {
        console.log(`message: ${data}`);
        io.sockets.emit('chat', data);
    })
    
    socket.on('typing', function(data) {
        console.log(`typing: ${data}`);
        socket.broadcast.emit('typing', data);
    })
});