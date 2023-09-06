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



// import axios from 'axios'
// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// function New() {
//  const [formData,setFormData]= useState({})
//   const handleClick = async () =>{
//     const smoothies = await axios.get('/')
//     console.log(smoothies)
//   }
//   const handleSubmit = async (e) =>{
//     e.preventDefault()
    
//     try {
//       const addSmoothie = await axios.post('/smoothies',formData)
//     console.log(addSmoothie)
//     } catch (error) {
//       console.error(error)
//     }
//   } 

//   const handleChange = (e)=>{
//       setFormData({
//         ...formData,
//         [e.target.name]:e.target.value
//       })
//        console.log(formData)

//   }
//   return (
//     <div>
      
//         <a href='/' onClick={handleClick}>Return to Index</a>
//         <Link to='/' onClick={handleClick}>Return to Index</Link>
//         <h1 className='indexTitle'>Create a NEW Smoothie</h1>
//       <form onSubmit={handleSubmit} className='form'>
//         New Smoothie: <input type='text' name='name' value={formData.name || ''} onChange={handleChange}/>

//         <br />
//         Picture: <input type='src' name='img' value={formData.img || ''} onChange={handleChange} />
//         <p />
//         <input type='submit'  value='submit'  />
//       </form>
//     </div>
//   )
// }

// export default New


import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as smoothieApi from '../../utilities/smoothieApi'




const New = ({setActive}) =>{
  const [smoothie,setSmoothie] = useState({
    title:"",
    desc:"",
    price:null,
    img:"",
  })
   const navigate = useNavigate()
   const [smoothies,setSmoothies]=useState([])
   const [count,setCount]=useState(0)
 
  const handleChange = (e)=>{

    setSmoothie(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("/smoothies" , smoothie); 
      navigate('/')
    } catch (error) {
      console.error(error)
      
    }
  }

  console.log(smoothie)

  
  useEffect(()=>{
    const getSmoothies = async ()=>{
      const allSmoothies = await smoothieApi.getSmoothies()
      setSmoothies(allSmoothies)
    }
    getSmoothies()
  },[count])
      const vanish = async (e, id) =>{
        e.preventDefault() 
        try {
          await axios.delete(`/smoothies/${id}`)
          setCount(prev=>prev+1)
        } catch (error) {
          console.error(error)
          
        }
      

      }
      const toEdit = (smoothie)=>{
        setActive(smoothie)
        navigate(`/update/${smoothie._id}`)
        

      }
      
  return (
    <div className='forms'>
      <h1 className='indexTitle'>Add New Smoothie</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='desc' onChange={handleChange}name='description' />
      <input type="number" placeholder='price' onChange={handleChange}name="price"/>
      <input type="text" placeholder='img' onChange={handleChange} name='img' />

      <button onClick={handleClick}>Add</button>
      {smoothies ?
      smoothies.map((s,i)=>{
        return (
          <div>
              <h3>{s.title} </h3>
              <img src={s.img} alt="" />
              <button onClick={(e)=>{vanish(e , s._id)}}>delete</button>
              <button className='update' onClick={()=>{toEdit(s)}}>edit</button>
          </div>
       )
        
      }):
      'no smoothies available'}
    </div>
  )
}

export default New