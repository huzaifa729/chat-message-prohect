import React, { useState } from 'react'
import './App.css'
import Chat from './Chat'
import Login from './Login'
import Slider from './Slider'

function App() {
  const [user, setUser] = useState("huz")
  return (
      <div className='app'>
        {!user ?(
            <Login/>
        ):(

        

     <div className='app-bdy'>
          <Slider/>
          <Chat/>
      </div>
        )}
    </div>
  )
}

export default App
