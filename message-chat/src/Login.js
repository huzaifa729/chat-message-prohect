import React from 'react'
import styled from 'styled-components';
import ChatIcon from '@mui/icons-material/Chat';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Info from './Info';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

   const [state,dispatch] = useStateValue();
 
   const signIn = e => {
      auth.signInWithPopup(provider)
      .then((result) =>{
    
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
       
           
        console.log(result)
      })
      .catch(error => alert(error.message))
   }

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
                    <Icons>
                    <AndroidIcon fontSize='large'/>
                    <AndrdName>Android</AndrdName>
                    </Icons>

                    <Icons>
                    <AppleIcon fontSize='large'/>
                    <AndrdName>iPhone</AndrdName>
                    </Icons>

                    <Icons>
                     <LaptopMacIcon fontSize='large'/>
                    <AndrdName>Mac or Windows PC</AndrdName>
                    </Icons>
                 </Lognimg>

             </LognLeft>

             <LoginRght>
                <Img>
                <ChatIcon fontSize='medium'/>
                <LogoNamens>Messenger App</LogoNamens>
                </Img>
                <Button type="submit" onClick={signIn}> Login with Google 
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVUh2KFBlPv3Lnflm9u5a1rjLRDKw63RMAW8_bZntDpkWnPc1kKANT4sElr6zJieIv64&usqp=CAU"/>
                </Button>
             </LoginRght>
        </LognFlx>

        <Info/>
             
     </Container>
  )
}

export default Login;

const Container = styled.div`
    margin-top: 1px;
  // margin-left: 23px;
  background-color: white;
`

const LogoIcon = styled.div`
      display: flex;
      margin-left: 65px;
      padding-top: 20px;
     
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

const Icons = styled.div`
     display: flex;
     margin-bottom:6px;
      .MuiSvgIcon-root{
         color: #1a73e8;
      }
`;

const AndrdName = styled.div`
    margin-left: 10px;
    margin-top: 5px;
    font-size: 18px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`



const Img = styled.div`
     margin-left: -57%;
   margin-top: 35%;

   .MuiSvgIcon-root{
          background-color: rgb(24, 90, 188);
           color: white; 
          border-radius: 10%;
          font-size: 40px;
          margin-bottom: 10px;
          /* padding: 20px;
          font-size: 40px; */
      }
     
`
const LogoNamens = styled.div`
 font-size: 35px;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 margin-left: 5px;
`

const Button = styled.button`
   margin-top: 20px;
   margin-left: -145px;
   padding: 5px;
   font-size: 20px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   background: none;
   border: 5px solid black;

    img{
      width: 60px;
      margin-top: -7px;
      background: none;
      object-fit: contain;
 
    }
`

