
import React from 'react'
import styled from 'styled-components';

function Footer() {
  return (
     <Container>
        <Footerr>
           <Row>
              <Take>
                <H1>Messenger</H1>
                  <List>
                     <L1>Features</L1>
                     <L1>Security</L1>
                     <L1>Download</L1>
                     <L1>Messenger Web</L1>
                     <L1>Business</L1>
                     <L1>Privacy</L1>
                  </List>
              </Take>

              <Take>
                <H1>Company</H1>
                  <List>
                     <L1>About</L1>
                     <L1>Careers</L1>
                     <L1>Brand Center</L1>
                     <L1>Get in Touch </L1>
                     <L1>Blog</L1>
                     <L1>Messenger Stories</L1>
                  </List>
              </Take>

              <Take>
                <H1>Download</H1>
                  <List>
                     <L1>Mac/Pc</L1>
                     <L1>Android</L1>
                     <L1>iPhone</L1>
                  </List>
              </Take>

              <Take>
                <H1>Help</H1>
                  <List>
                     <L1>Help Center</L1>
                     <L1>Twitter</L1>
                     <L1>Facebook</L1>
                     <L1>Instagram</L1>
                  </List>
              </Take>
           </Row>
        </Footerr>
        <EndFooter>
            <Black>
               <Copyright>2022 © WhatsApp LLC</Copyright>
               <Privacy>Privacy & Terms</Privacy>
            </Black>
        </EndFooter>
     </Container>
  )
}

export default Footer;

const Container = styled.div`
   margin-top: 5%;
`

const Footerr = styled.div`
    background-color: #273443;
    width: 100%;
    height: 330px;
`

const Row = styled.div`
  display: flex;
  margin-left: 45px;

`

const Take = styled.div`
  color: white;
  margin-top: 3%;
  padding: 3px 21px;
  margin-left: 7%;
`

const H1 = styled.div`
font-size: 23px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
margin-bottom: 9px;
text-transform: uppercase;

`

const List = styled.div`
 cursor: pointer;
`

const L1 = styled.div`
  font-size: 19px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 4px;
  letter-spacing: 0.5px;
`

const EndFooter = styled.div`
`

const Black = styled.div`
    background-color: #1c1e21;
    width: 100%;
    height: fit-content;
    color: whitesmoke;
    display: flex;
    /* margin-bottom: 5px; */
`

const Copyright = styled.div`
    margin-left: 7%;
    margin-top: 8px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 4px;
`

const Privacy = styled.div`
 margin-bottom: 4px;
  margin-left: 44%;
  margin-top: 8px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

