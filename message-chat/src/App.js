import React, { useState } from 'react'
import './App.css'
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
      </div>
        )}
    </div>
  )
}

export default App
