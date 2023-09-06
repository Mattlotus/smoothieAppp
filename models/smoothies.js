require('dotenv').config()
require('../config/database')
const SmoothieSchema = require('./SmoothieSchema')
const smoothies = [
    {name: "sweet tooth", 
    img: "https://w7.pngwing.com/pngs/102/28/png-transparent-strawberry-juice-fruit-smoothie-strawberry-fruit-natural-foods-frutti-di-bosco-food-thumbnail.png"},

    {name: "khaleesy dragon", 
    img: "https://littlesunnykitchen.com/wp-content/uploads/2022/07/Berry-Smoothie-1.jpg",
    description:"strawberry,banana,mango,dragonfruit,honey,seamoss,protein powder"},

    {name: "miami beach", 
    img: "https://www.blessthismessplease.com/wp-content/uploads/2022/06/tropical-smoothie-recipe-5.jpg"
    },

    {name: "sunlight", 
    img: "https://cookingformysoul.com/wp-content/uploads/2022/05/triple-berry-smoothie-feat-min.jpg"},

    {name: "green machine", 
    img: "https://www.budgetbytes.com/wp-content/uploads/2023/02/GreenSmoothieside.jpg"},

    {name: "peanut butter ", 
    img: "https://www.wellplated.com/wp-content/uploads/2020/12/Peanut-Butter-Banana-Smoothie-recipe.jpg"},

    {name: "tropic thunder", 
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/frozen-fruit-smoothie-3.jpg"}
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