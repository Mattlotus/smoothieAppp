const mongoose = require("mongoose")

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

const ingredient = mongoose.model( 'ingredient', ingredientSchema )

module.exports = ingredient