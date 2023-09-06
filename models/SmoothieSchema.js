const mongoose = require("mongoose")

const SmoothieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    
})

const Smoothie = mongoose.model( 'Smoothie', SmoothieSchema )

module.exports = Smoothie