const express = require('express');
const Smoothies = require('../../models/SmoothieSchema');
const router = express.Router();

router.get('/', async (req,res)=>{
    const allSmoothies = await Smoothies.find({})
    // res.render('Smoothie', {smoothie: allSmoothies})
    res.send(allSmoothies)
})
router.post('/', async (req,res)=>{
    console.log(req.body)
  const  addedSmoothie = await Smoothies.create(req.body) 
//   res.send(addedSmoothie)
console.log(addedSmoothie)
})


module.exports = router