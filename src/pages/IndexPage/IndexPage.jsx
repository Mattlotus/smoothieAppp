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
      setSmoothies(allSmoothies)
    }
    getSmoothies()
  },[])
  return (
    <div>
      <h1 className='indexTitle'>Welcome to TNT Smooothies index</h1>
      {props.smoothies ?
      props.smoothies.map((smoothie, i )=>{
        return(
            <div key={i}>
                {smoothie.name}
                <img src="https://static.wixstatic.com/media/c5b5b3_b34ddc0e65944c80be9b9fde56210050~mv2.jpg/v1/fill/w_980,h_469,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c5b5b3_b34ddc0e65944c80be9b9fde56210050~mv2.jpg" alt="" className='smoothiePic' />
              


                <div clasName='explosive'>
                <h1 className='indexTitle'>Explosive Flavor In Every Smoothie</h1>
                </div>

                <div className='drinkContainer'>
                 <div className='price'>
                  <img src="https://www.acouplecooks.com/wp-content/uploads/2020/05/Berry-Smoothie-011.jpg" alt="" className='drinks'/>
                  <button>BerryBlast</button>
                  </div>


                  <div className='price'>
                  <img src="https://choosingchia.com/jessh-jessh/uploads/2021/05/Simple-green-smoothie-1-2.jpg" alt="" className='drinks' />
                  <button>Green Fuel</button>
                  </div>

                  <div className='price'>
                  <img src="https://media.bluediamond.com/uploads/2023/01/24174515/Mango_Date_Smoothies_Photo.jpg" alt="" className='drinks' />
                  <button>Mango Tango</button>
                  </div>

                  <div className='price'>
                  <img src="https://www.eatingbirdfood.com/wp-content/uploads/2023/02/dragon-fruit-smoothie-hero-cropped.jpg" alt="" className='drinks' />
                  <button>Dragon</button>
                  </div>
                </div>
            </div>
        )
      }):
      <h1>wwwww</h1>
      }

    </div>
  )
}

export default IndexPage
