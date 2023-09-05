import { checkToken } from '../../utilities/users-service';
import axios from 'axios';

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    console.log(expDate);
  }

    const backToIndex = async () =>{
      const smoothies = await axios.get('/')
      console.log(smoothies)
  };
  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      <button onClick={backToIndex} >Return to Index</button>
      <a href="/"></a>
    </>
  );
}
