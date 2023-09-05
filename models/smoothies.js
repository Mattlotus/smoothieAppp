require('dotenv').config()
require('../config/database')
const SmoothieSchema = require('./SmoothieSchema')
const smoothies = [
    {name: "sweet tooth", 
    img: "https://w7.pngwing.com/pngs/102/28/png-transparent-strawberry-juice-fruit-smoothie-strawberry-fruit-natural-foods-frutti-di-bosco-food-thumbnail.png"},

    {name: "khaleesy dragon", 
    img: "http://img.pokemondb.net/artwork/ivysaur",
    description:"strawberry,banana,mango,dragonfruit,honey,seamoss,protein powder"},

    {name: "miami beach", 
    img: "http://img.pokemondb.net/artwork/venusaur"
    },

    {name: "kid special", 
    img: "http://img.pokemondb.net/artwork/charmander"},

    {name: "green machine", 
    img: "http://img.pokemondb.net/artwork/charizard"},

    {name: "peanutbutter ", 
    img: "http://img.pokemondb.net/artwork/squirtle"},

    {name: "random", 
    img: "http://img.pokemondb.net/artwork/wartortle"}
];
(
    async function(){
        await SmoothieSchema.deleteMany({})
        const createdSmoothies = await SmoothieSchema.create(smoothies)
        console.log(createdSmoothies)
        process.exit()
    }

)()
module.exports = smoothies