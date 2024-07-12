// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    regno:{
        type:String,
        unique: true,
        required:true,

    },
    dob: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    performance: {
        type: Array,
        default: []
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
