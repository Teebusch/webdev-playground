// This is the server-side code 

const express = require('express');
const socket = require('socket.io');

// App setup 

const app = express();

const PORT = 4000 || process.env.PORT;

var server = app.listen(PORT, () => { 
    console.log(`App listening to requests on port ${PORT}`);
});

// Static files

app.use(express.static('public'))

// Socket setup

var io = socket(server);

io.on('connection', (socket) => {
    console.log(`Socket connection established with id ${socket.id}`);

    socket.on('chat', (data) => {
        console.log(`message: ${data}`);
        io.sockets.emit('chat', data);
    })
    
    socket.on('typing', (data) => {
        console.log(`typing: ${data}`);
        socket.broadcast.emit('typing', data);
    })
});