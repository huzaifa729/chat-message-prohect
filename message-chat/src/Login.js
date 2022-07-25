import React from 'react'
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';

function Login() {
  return (
     <Container>
          <LogoIcon>
            <ChatIcon fontSize='medium'/>
            <LogoName>Messenger App</LogoName>
          </LogoIcon>

          <LognCentr>Find us at messages.google.com/web and bookmark it for next time</LognCentr>
     </Container>
  )
}

export default Login;

const Container = styled.div`
    margin-top: 20px;
    // margin-left: 23px;
`

const LogoIcon = styled.div`
      display: flex;
      margin-left: 55px;
     
      .MuiSvgIcon-root{
          background-color: rgb(24, 90, 188);
           color: white; 
          border-radius: 10%;
          /* padding: 20px;
          font-size: 40px; */
      }
`

const LogoName = styled.div`
   margin-left: 5px;
   margin-top: 5px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   letter-spacing: 1px;
font: 400 21.5px Product Sans,Google Sans,Roboto,sans-serif;
`

const LognCentr = styled.div`
  margin-top: 25px;
  text-align: center;
  background-color: #1a73e8;
  color: #fff;
  font-size: 24px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 0.2px;
`
