import React, { useEffect, useState } from 'react'

function Practice() {
    const [seed, setSeed] = useState('')

    useEffect (()=>{
       setSeed(Math.floor(Math.random() * 5000))
    },[])


  return (
    <div>Practice

        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
    </div>



  )
}

// export default Practice;



import React from 'react'

function Practice({addNewChat}) {

    const CreateChat = ()=>{
        const Name = prompt ("Please");

        if(Name){
            
        }
    }

  return  !addNewChar ?(
    <div>Practice</div>
  ):(
     <div onClick={createChat}>
        <h2>jnj</h2>
     </div>
  )
}

export default Practice