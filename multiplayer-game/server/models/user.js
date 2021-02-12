const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        handle: { 
            type: String, 
            maxlength: 30,
            required: true, 
            trim: true 
        },
        color: { 
            type: String, 
            default: '#000' 
        }
    }
);

module.exports = mongoose.model('User', UserSchema);