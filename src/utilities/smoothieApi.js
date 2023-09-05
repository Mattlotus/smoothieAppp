import axios from "axios"
export const getSmoothies = async ()=>{
    
    try {
        const allSmoothies = await axios.get('/smoothies')
    console.log(allSmoothies)
        
    } catch (error) {
        console.error(error)
        
    }
}