import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
export default function NavBar({ user, setUser }) {
 
 
  function handleLogOut() {
    userService.logOut();

    setUser(null);
    
  }

  return (
    <nav className='nav'>
      <div>
      
      <Link to='/orders' className="OH">Order History</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new' className='NO'>New Order</Link>
      &nbsp;&nbsp; <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      </div>


      <div>
      
      <Link to='' onClick={handleLogOut} className='LO'>
        Log Out
      </Link>
      </div>
    </nav>
  );
};
