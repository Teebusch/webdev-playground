const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
    {
        users: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }],
        game: {
            type: String,
            required: false
        } 
    }
);

module.exports = mongoose.model('Room', RoomSchema);