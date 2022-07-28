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

/* <p className={`chat-message ${true && 'chat-reciever'}`}>    //true means When you signin then will show blue one
<ChatName>Huzaifa Dabir</ChatName>
 <ChatEn>Hey Guys</ChatEn>
  <Chattimestamp>3:52pm</Chattimestamp>     
</p> */

  )
}

export default Practice