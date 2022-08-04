import React, { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './App.css'
import Chat from './Chat'
import Login from './Login'
import Slider from './Slider'
import { useStateValue } from './StateProvider'

function App() {
  // const [user, setUser] = useState("huz")
  const [{user}, dispatch] = useStateValue();

  return (
      <div className='app'>
        {!user ? (
            <Login/>
        ):(
          <>
 <div className='app-bdy'>
  <BrowserRouter>
         <Slider/>

         <Routes>
          <Route path="/collection/:storeId" element={<Chat/>}/>
          <Route path="/" element={<Chat/>}/>
         </Routes>
        
  </BrowserRouter>

      </div>
      </>
        )}    
    </div>
  )
}

export default App
