import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({id,name,addNewChat}) {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(()=>{
      if(id){
            db.collection('collection')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot=>
                setMessages(snapshot.docs.map((doc)=>
                doc.data()))
            )
      }
    },[id]);

    const createChat = () => {
      const DataName = prompt("Please enter name for chat")

          if(DataName){
            // do some clever database stuff...

            db.collection('collection').add({
              name: DataName,
            })

          }
    };

    useEffect(()=>{
       setSeed(Math.floor(Math.random() * 5000))  //Means every time you enter Avatar icon wil changed.
    },[]);





  return !addNewChat ? (
  
    <Container>
        <Link to={`/collection/${id}`}>
      <SideChats>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
          <SidebarInfo>
             <Name>{name}</Name>
             <Message>{messages[0]?.message}</Message>
          </SidebarInfo>
     </SideChats> 
     </Link>
  </Container>
  
  ):(
    // <SearchInput>
    // <SearchIcon fontSize='medium'/> 
    //   <Search type="text" onClick={createChat} placeholder="Search or start new chat"/>
    //   </SearchInput>
    <Sch>
    <SearchInput>
     <SearchIcon fontSize='medium'/> 
   <Search type="text" onClick={createChat} placeholder="Search or start new chat"/>
   </SearchInput>

           <IconButton>
           <FilterListIcon/>
           </IconButton>
           </Sch>
  )
}

export default SidebarChat;




const Container = styled.div`
    margin-left: 37px;

   a{
      text-decoration: none !important;
      color: black;
   }
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
 font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Message = styled.div`
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

const Sch = styled.div`
  display: flex;
  align-items: center;
justify-content: space-around;
margin-left: -10px;
margin-top: 10px;
margin-bottom: 30px;
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
