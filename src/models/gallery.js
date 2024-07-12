const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }

});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
