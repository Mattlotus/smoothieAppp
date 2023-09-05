// import React from 'react'

// function Index(props) {
//     return (
//         <div>
//             <h1>Smoothies</h1>
//             <a href='/new'>Create a NEW Smoothie</a>
//             <p />
//             <a href='/addall'>Add All Smoothie</a>
//             <p />
//             <form action={`/poof?_method=DELETE`} method="POST">
//                 <input className='deletePoke' type="submit" value="Delete ALL" />
//             </form>
//             <p />
//             {props.ingredient.map((ingredient, i) => {
//                 const capitalIngredients = ingredient.name.toUpperCase()
//                 return (
//                     <div id='index' key={i}>
//                         <a href={`/show/${ingredient.id}`}>
//                             {capitalIngredients}
//                         </a>
//                         {/* "?_method_DELETE" is calling our method override to delete our pokemon.id */}
//                         {/* HTML doesn't support a direct method=DELETE request. It only accepts GET and POST  */}
//                         <form action={`/delete/${ingredient.id}?_method=DELETE`} method="POST">
//                             <input className='deletePoke' type="submit" value="DELETE" />
//                         </form>

//                         <form action={`/edit/${ingredient.id}`} method="POST">
//                             <input className='editPoke' type="submit" value="Update" />
//                         </form>
//                         <p />
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Index







import React, { useEffect } from 'react'
import { useState } from 'react'
import * as smoothieApi from '../../utilities/smoothieApi'
function IndexPage(props) {
  // const smoothies = props.smoothies|| [];
  // console.log(props.smoothies)
  const [smoothies,setSmoothies]=useState([])
  useEffect(()=>{
    const getSmoothies = async ()=>{
      const allSmoothies = await smoothieApi.getSmoothies()
    }
    getSmoothies()
  },[])
  return (
    <div>
      <h1>Welcome INDEX</h1>
      {props.smoothies ?
      props.smoothies.map((smoothie, i )=>{
        return(
            <div key={i}>
                {smoothie.name}
                <img src="https://static.wixstatic.com/media/c5b5b3_b34ddc0e65944c80be9b9fde56210050~mv2.jpg/v1/fill/w_980,h_469,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c5b5b3_b34ddc0e65944c80be9b9fde56210050~mv2.jpg" alt="" className='smoothiePic' />
            </div>
        )
      }):
      <h1>wwwww</h1>
      }

    </div>
  )
}

export default IndexPage
