const Room = require('../models/room');

const room_index = (req, res) => {
    Room.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}

const room_details = (req, res) => {
    Room.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
}

const room_create_get = (req, res) => {
    res.send("not implemented: room creation form");
}

const room_create_post = (req, res) => {
    const room = new Room({
        name: 'My first room'
    });

    room.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

const room_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.send(send);
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    room_index,
    room_details,
    room_create_get,
    room_create_post,
    room_delete
}

