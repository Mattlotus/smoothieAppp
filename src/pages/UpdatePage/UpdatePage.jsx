// import React from 'react'

// function Update(props) {
//   return (
//     <div>
//       <div>
//         <a href='/'>Return to Index</a>
//         <h1>Update Smoothie</h1>
//         <form action={`/editsubmit/${props.updated.id}?_method=PUT`} method='POST' >
//           Smoothie: <input type='text' name='name' defaultValue={props.updated.title}/>
//           <br />
//           Smoothie Pic: <input type='src' name='img' defaultValue={props.updated.img} />
//           <p />
//           <input type='submit' name='' value='submit' />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Update


import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as smoothieApi from '../../utilities/smoothieApi'


const Update = ({active , setActive}) =>{
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

    setActive(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put(`/smoothies/update/${active._id}` , active); 
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

      
  return (
    <div className='forms'>
      <h1 className='indexTitle'>Update  Smoothie</h1>
      <form>
      <input type="text" value={active.title} placeholder='title' onChange={handleChange} name='title' />
      {/* <input type="text" value={active.desc}   placeholder='desc' onChange={handleChange}name='description' /> */}
      <input type="number" value={active.number}  placeholder='price' onChange={handleChange}name="price"/>
      <input type="text" value={active.img}  placeholder='img' onChange={handleChange} name='img' />
      </form>

      <button onClick={handleClick}>update</button>
      {smoothies ?
      smoothies.map((s,i)=>{
        return (
          <div>
              <h3>{s.title} </h3>
              <img src={s.img} alt="" />
              <button onClick={(e)=>{vanish(e , s._id)}}>delete</button>
              <button className='update'><Link to={`/update/${s._id}`}>update</Link></button>
          </div>
       )
        
      }):
      'no smoothies available'}
    </div>
  )
}

export default Update