import { useDispatch } from 'react-redux';
import './App.css'
import { useEffect, useState } from 'react';
import authServices from './appwrite/auth.js';
import {login, logout} from './store/authSlice.js'
import {Header, Footer} from './components'
// import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser()
    .then((userData) => {
      console.log('userData', userData);
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading(false);
    })

  }, [])
  

  return !loading ? 
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
     <div className='w-full block '>
        <Header/>
        Todo
          <main>
             {/* <Outlet/> */}
          </main>
        <Footer/>
     </div>
  </div> : <div>Loading...</div>
    
}

export default App
