// This is the server-side code 

const express  = require('express');
const socketio = require('socket.io');
const path     = require('path');

const PORT     = process.env.PORT || 4000;


// App setup 

const app  = express();

const server = app.listen(PORT, () => { 
    console.log(`App listening to requests on port ${PORT}`);
});

// static files 
app.use(express.static(path.join(__dirname, 'public')));


// Socket setup

const io = socketio(server);

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