import axios from "axios"
export const getSmoothies = async ()=>{
    
    try {
        const allSmoothies = await axios.get('/smoothies')
    console.log(allSmoothies.data)
    return(allSmoothies.data)
        
    } catch (error) {
        console.error(error)
        
    }
}