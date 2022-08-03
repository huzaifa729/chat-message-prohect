import { Avatar, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import { useParams } from 'react-router';
import db from './firebase';

function Chat() {
  const [input, setInput] = useState('');
  const { storeId } = useParams();
  const [dataName,setDataName] = useState('');


  useEffect(()=>{
    if(storeId){
        db.collection('collection').doc(storeId).onSnapshot(snapshot=>(
             setDataName(snapshot.data().name)
        ))
      }
  },[storeId])
  

  const sendMessage = (e) =>{
      e.preventDefault();
      console.log("You typed >>>", input);

      setInput("");
  }

  return (
      <Container>
          <Chats>
             <Avatar/>
             <ChatIn>
              <Name>{dataName}</Name>
              <LastSeen>Last seen at...</LastSeen>
             </ChatIn>
             <ChatIcon>
                <IconButton>
                      <SearchIcon/>
                </IconButton>
                <IconButton>
                   <MoreVertIcon/>
                </IconButton>
             </ChatIcon>
          </Chats>


          <Chatbody> 
           <p className={`chat-message ${true && 'chat-reciever'}`}>   
             <ChatName>Huzaifa Dabir</ChatName>
              <ChatEn>Hey Guys</ChatEn>
               <Chattimestamp>3:52pm</Chattimestamp>     
            </p>

            <p className={`chat-message ${true && 'chat-reciever'}`}>  
             <ChatName>Huzaifa Dabir</ChatName>
              <ChatEn>Hey Guys</ChatEn>
              <Chattimestamp>3:52pm</Chattimestamp>
            </p>
        </Chatbody>

          <ChatFooter>
                <ChatTk>
                  <IconButton>
                    <MoodIcon/>
                 </IconButton>

                 <IconButton>
                    {/* <AttachFileIcon/> */}
                    <svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
                 </IconButton>
            </ChatTk> 

            <Form>
            
            <ChatSearch>
          <CSeadrch value={input} onChange={(e) => setInput(e.target.value)}   type="text"   placeholder="Type a message"  />
          </ChatSearch> 
           <button  type='submit' onClick={sendMessage}>Send a message</button>
         
         </Form>    
        


             <AgnIcn>
                <IconButton>
                  <MicNoneOutlinedIcon/>
                </IconButton>
             </AgnIcn>

          </ChatFooter>

      </Container>
  )
}

export default Chat;


const Container = styled.div`
    /* margin-top: 30px; */
    /* margin-left: 40px; */
    /* flex: 1; */
    display: flex;
    flex-direction:column;
    flex: 0.62;
`

const Chats = styled.div`
   /* background-color: aqua; */
   margin-top: 25px;
   margin-left: 25px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   /* border-bottom: 2px solid black; */
   margin-bottom: 2px;
`

const ChatIn = styled.div`
  flex: 1;
  margin-left: 10px;
`

const Name = styled.div`
font-size: 18px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const LastSeen = styled.div`
font-size: 18px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const ChatIcon = styled.div`
    margin-top: -7px;
   .MuiSvgIcon-root{
    color: grey;
    font-size: 30px;
   }
`


const Chatbody = styled.div`
  /* background-image: url("https://png.pngtree.com/background/20210715/original/pngtree-green-yellow-white-memphis-gradient-background-picture-image_1263475.jpg"); */
   flex: 1;
   background-repeat: repeat;
   background-position: center;
   padding: 30px;
    /* overflow: scroll;  */
   margin-top: 0px;
   object-fit: contain;
   margin-left: 10px;
   /* background-color: orangered; */

   .chat-message{
  background-color: ghostwhite;
    width: fit-content;
   border-radius: 8px;
   position: relative;
   margin-bottom: 30px;
   display: flex;
   padding: 2px 5px;
}

  .chat-reciever{
      margin-left: auto;
     margin-right: 23px;
     background-color: dodgerblue;
     color: whitesmoke;
     font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
` 


// const ChatMessage = styled.div`
//    background-color: ghostwhite;
//    width: fit-content;
//    border-radius: 6px;
//    position: relative;
//    margin-bottom: 20px;
//    display: flex;
// `






const ChatName = styled.div`
   /* margin-top: -16px;
   margin-left: -80px; */
   font-size: xx-small;
   font-weight: bold;
   position: absolute;
   top: -15px;
   margin-left: 6px;
   color: black;
`


const Chattimestamp = styled.div`
 font-size: xx-small;
 margin-left: 10px;
 margin-top: 15px;
 margin-bottom: 5px;
`

const ChatEn = styled.div`
  margin-left: 6px;
  margin-top: 3px;
  font-size: 17px;
`


const ChatFooter = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`

const ChatTk = styled.div`

`

const ChatSearch  = styled.div`
   margin-left: -50px;
   /* border: 5px solid bisque; */
  /* width: 250px; */
    /* display:none; */
 
`

const CSeadrch = styled.input`
  outline: none;
  /* flex: 1; */
   /* width: 100%;  */
   width: 400px;
  margin-left: 10px;
  padding: 5px 5px;
  border: 6px solid whitesmoke;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: none;
  border-radius: 3px;
 
`

const Form = styled.div`
  /* display: none; */
   display: flex; 

 
    button{
    margin-left: 25px;
   /* display: none;  */
   background: none;
   border-radius: 5px;
   height: 40px;
   margin-top: 5px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   font-size: 18px;
  }
   
  
`

const AgnIcn = styled.div`
 color: gray;
`





