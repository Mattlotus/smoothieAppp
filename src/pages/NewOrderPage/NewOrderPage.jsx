// export default function NewOrderPage() {
//     return (
//         <>
//         <h1>New Order Page</h1>
//         <div className='mainContainer'>
//             <div className='subContainer'>
//                 <img src="" alt="" />
//                 <img src="" alt="" />

//             </div>

//         </div>
//         </>
    
//     )
// }



import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function New() {
 const [formData,setFormData]= useState({})
  const handleClick = async () =>{
    const smoothies = await axios.get('/')
    console.log(smoothies)
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    try {
      const addSmoothie = await axios.post('/smoothies',formData)
    console.log(addSmoothie)
    } catch (error) {
      console.error(error)
    }
  } 

  const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })
       console.log(formData)

  }
  return (
    <div>
      
        <a href='/' onClick={handleClick}>Return to Index</a>
        <Link to='/' onClick={handleClick}>Return to Index</Link>
        <h1>Create a NEW Smoothie</h1>
      <form onSubmit={handleSubmit} className='form'>
        New Smoothie: <input type='text' name='name' value={formData.name || ''} onChange={handleChange}/>

        <br />
        Picture: <input type='src' name='img' value={formData.img || ''} onChange={handleChange} />
        <p />
        <input type='submit'  value='submit'  />
      </form>
    </div>
  )
}

export default New
