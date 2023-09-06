import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import Index from './pages/IndexPage/IndexPage';
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import UpdatePage from './pages/UpdatePage/UpdatePage'

// components
import NavBar from './components/NavBar/NavBar';
// css
import './App.css';


function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  const[active,setActive]=useState({})

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Index smoothies={[1]} />} />
            <Route path='/orders/new' element={<NewOrderPage setActive={setActive}/>} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            <Route path='/update/:_id' element={<UpdatePage active={active} setActive={setActive} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
