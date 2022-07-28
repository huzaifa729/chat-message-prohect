import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('');

    useEffect(()=>{
       setSeed(Math.floor(Math.random() * 5000))  //Means every time you enter Avatar icon wil changed.
    },[]);

  return !addNewChat ? (
    <Container>
      <SideChats>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <SidebarInfo>
             <Name>Name</Name>
             <Message>Message</Message>
          </SidebarInfo>
     </SideChats>         
    </Container>
  ):(
    <h2></h2>
  )
}

export default SidebarChat;

const Container = styled.div`
    margin-left: 37px;
`

const SideChats = styled.div`
    display: inline-flex;
    /* text-align: center; */
  align-items: center;
  margin-bottom: 20px;
 
`

const SidebarInfo = styled.div`
 margin-left: 5px;

`

const Name = styled.div`
  font-size: 18px;
  font-style: oblique;
`

const Message = styled.div`
  font-size: 18px;
  font-style: oblique;
`