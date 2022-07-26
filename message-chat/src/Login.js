import React from 'react'
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import AndroidIcon from '@mui/icons-material/Android';

function Login() {
  return (
     <Container>
          <LogoIcon>
            <ChatIcon fontSize='medium'/>
            <LogoName>Messenger App</LogoName>
          </LogoIcon>

    <LognCentr>Find us at messages.google.com/web and bookmark it for next time</LognCentr>
   
        <LognFlx>
             <LognLeft>
                 <LoginInfo>
                 Simple.Secure.Reliable messaging.
                 </LoginInfo>

                 <Lognpara>
                 With MessengerApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all over the world.
                 </Lognpara>

                 <Span>*Data charges may apply. Contact your provider for details.</Span>

                 <Lognimg>
                 <AndroidIcon/> Android
                 <AndroidIcon/> Android
                 <AndroidIcon/> Android
                 </Lognimg>
             </LognLeft>

             <LoginRght>
                <Img>
                   <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1"/>
                </Img>
             </LoginRght>
        </LognFlx>
             
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


const LognFlx = styled.div`
    display: flex;
    margin-left: 35px;
    margin-top: 55px;

`

const LognLeft = styled.div`
   margin-left: 15%;
`

const LoginInfo = styled.div`
  margin-top: 10px;
  font-size: 30px;
  max-width: 300px;
  margin-left: 10%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Lognpara = styled.div`
   margin-top: 23px;
   max-width: 400px;
   margin-left: 43px;
   font-size: 18px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Span = styled.div`
   margin-top: 25px;
   margin-left: 40px;
   max-width: 400px;
   font-size: 18px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
`


const Lognimg = styled.div`
    margin-top: 20px;
    margin-left: 50px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
`

const LoginRght = styled.div`
    margin-left: 22%;
    margin-top: -2%;
`



const Img = styled.div`
     margin-left: -57%;
     
     img{
      width: 275px;
      background: none;
      height: 300px;
     }
`



