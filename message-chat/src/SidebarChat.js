import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import db from './firebase';
import SearchIcon from '@mui/icons-material/Search';

function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState('');

    useEffect(()=>{
       setSeed(Math.floor(Math.random() * 5000))  //Means every time you enter Avatar icon wil changed.
    },[]);

    const createChat = () =>{
      const DataName =  "Please";

      if(DataName){
        // do some clever database stuff
          db.collection('rooms').add({
              name: DataName,
          })
      }
}

  return !addNewChat ? (
    <Container>
      <SideChats>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <SidebarInfo>
             <Name>{name}</Name>
             <Message>Message</Message>
          </SidebarInfo>
     </SideChats>         
    </Container>
  ):(
    <SearchInput>
    <SearchIcon fontSize='medium'/> 
      <Search type="text" onClick={createChat} placeholder="Search or start new chat"/>
      </SearchInput>
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

const SearchInput = styled.div`
  display: flex;
/* align-items: center;
justify-content: space-around; */
align-items: center;

   .MuiSvgIcon-root{
    color: grey;
   }
`

const Search = styled.input`
  border: none;
  outline: none;
  background: none;
  font-size: 19px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-bottom: 3px solid ghostwhite;
  margin-left: 50px;
`
const SideChat = styled.div`
margin-top: 20px; 
flex: 1;
/* overflow-y: scroll; */
`