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

router.delete('/:id', async (req,res)=>{
 
  try {
    await Smoothies.findByIdAndDelete(req.params.id)
    res.send('item deleted')
    
  } catch (error) {
    res.status(400).json({msg: error.message})
    
  }

})

router.put('/update/:id',async (req,res)=>{
  
  

  try {
    const updateSmoothie = await Smoothies.findByIdAndUpdate(req.params.id,req.body)
    res.json(updateSmoothie)
    
    
  } catch (error) {
    res.status(400).json({msg: error.message})
    
  }
  
})



module.exports = router