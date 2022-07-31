import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SidebarChat from './SidebarChat';
import db from './firebase';

function Slider() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe =  db.collection('rooms').onSnapshot(snapshot => (
         setRooms(snapshot.docs.map(doc=>
          ({
              id: doc.id,
              data: doc.data(), 
          })
          ))
       ))   
            return () => {
              unsubscribe();
            }
  },[])



    
  return  (
     <Container>
        <Slide>
          <SliderAvtrIcns>
            <Avatar/>
           <SlideRight>
            <IconButton>
           <svg version="1.1" id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
           </IconButton>

           <IconButton>
            <MessageOutlinedIcon/>
           </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon/>
          </IconButton>

           </SlideRight>
          </SliderAvtrIcns>

       <Sch>
          <SearchInput>
            <SearchIcon fontSize='medium'/> 
              <Search type="text"  placeholder="Search or start new chat"/>
              </SearchInput>

              <IconButton>
              <FilterListIcon/>
              </IconButton>
              </Sch>
        </Slide>

        <SideChat>
          <SidebarChat addNewChat/>
          {rooms.map(room => (
                <SidebarChat 
                key={room.id} 
                id={room.id}
                name={room.data.name}
                />
              ))}
        </SideChat>

     </Container>
  )
}

export default Slider;

const Container = styled.div`
  flex: 0.35;
  border-right: 3px solid floralwhite;
  
`

const Slide = styled.div`
   margin-top: 40px;
   margin-left: 40px;
   /* border-right: 3px solid floralwhite; */
   display: flex;
   flex-direction: column;

`

const SliderAvtrIcns = styled.div`
  display: flex;
 text-align: center;
 justify-content: space-between;
 margin-bottom: 15px;
`

const SlideRight = styled.div`
   min-width: 5vw;
`

const Sch = styled.div`
  display: flex;
  align-items: center;
justify-content: space-around;
margin-left: -10px;
margin-top: 10px;
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
 /* overflow-y: scroll;  */
`
