import React from 'react'
import styled from 'styled-components';
import Footer from './Footer';
function Info() {
  return (
    <Container>
        <Flex>
          <Infos>
            <Head1>Messenger  App</Head1>
            <Para1>Messenger  App is a free to download app that was built with the small business owner in mind. Create a catalog to showcase your products and services. Connect with your customers easily by using tools to automate, sort and quickly respond to messages.</Para1>
            <Para2>Messenger can also help medium and large businesses provide customer support and deliver important notifications to customers. Learn more about WhatsApp Business API.</Para2>
            <Image>
                <img src="https://scontent.whatsapp.net/v/t39.8562-34/191731900_491358315413361_6968938602217354245_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=TofSerFNuWoAX82iD50&_nc_ht=scontent.whatsapp.net&oh=01_AVxrYrN4MykXrOPUOb2clxIsf7QlsdV1tbnfCmCiv0bkgw&oe=62E54FF0"/>
            </Image>
          </Infos>

          <Info2>
              
          </Info2>
          </Flex>

    <Footer/>
    </Container>
  )
}

export default Info;

const Container = styled.div`
  
`

const Flex = styled.div`
display:flex;
margin-left: 3%;
margin-top: 3%;
`

const Infos = styled.div`
    background-color: #D8E8EA;
     width: 500px;
     height: fit-content;
     border-radius: 5px;

`

const Head1 = styled.div`
  font-size: 32px;
  text-align: center;
  justify-content: center;
  margin-top: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  letter-spacing: 0.5px;
`

const Para1 = styled.div`
   text-align: center;
   justify-content: center;
   /* margin-top: 10px; */
   max-width: 450px;
   margin: auto;
   padding-top: 40px;
   font-size: 20px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   word-wrap: break-word;
`

const Para2 = styled.div`
   padding-top: 30px;
   margin: auto;
   max-width: 450px;
   font-size: 18px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Image = styled.div`
  margin-top: 25px;
  text-align: center;
  justify-content: center;
  display: block;
  img{
   max-width: 50%;
   object-fit: contain;
  }
`

const Info2 = styled.div`
    background-color: #E7F0E4;
    width: 500px;
    height: 400px;
    margin-left: 5%;
`