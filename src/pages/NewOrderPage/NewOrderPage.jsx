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




import React from 'react'

function New() {
  return (
    <div>
        <a href='/'>Return to Index</a>
        <h1>Create a NEW Smoothie</h1>
      <form action='/newsubmit' method='POST' >
        Ingredients: <input type='text' name='name'/>
        <br />
        Profile Picture: <input type='src' name='img' />
        <p />
        <input type='submit' name='' value='submit' />
      </form>
    </div>
  )
}

export default New
