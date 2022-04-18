import './App.css';
import styled from 'styled-components';

import instagram_header from "../src/images/instagram_header.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import appstore from "../src/images/appstore.png"
import playstore from "../src/images/playstore.png"

import insta_main from "../src/images/insta_main.png"
import insta_1 from "../src/images/insta_1.png"
import insta_2 from "../src/images/insta_2.png"
import insta_3 from "../src/images/insta_3.png"
import insta_4 from "../src/images/insta_4.png"
import React from 'react';



const Container = styled.div`
  position: relative;
  min-height: 109.8vh;

`

const Section = styled.div`
  height: 95vh;
  margin: 0 auto;
  display: flex;
`
const CarouselContainer = styled.div`
width: 50%;

@media (max-width: 1028px) {
  display: none;
}
`

const Body = styled.div`
width: 50%;

  @media only screen and (min-device-width: 768px) and (max-device-width: 1028px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 1028px) {
    width: 100%;
    margin-top: 2.5rem;
  }

`

const Carousel = styled.div`
width: 390.31px;
height: 590.15px
border: 3px solid red;
margin-left: auto;
margin-top: 2.5rem;

  img {
    width: 100%;
  }
`

const CarouselBoard = styled.div`
position: relative;
top: 0;
left: 0;
`


const LoginForm = styled.div`
  width: 348px;
  height: 374px;
  border: 1px solid rgb(219, 219, 219);
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 24em) {
    border: 0;
    height: 310px;
  }

  @media (max-width: 1028px) {
    margin: 0 auto;
  }
`

const Header = styled.div`
  width: 175px;
  height: 51px;
  margin: 0 auto;
  margin-top: 36px;
  margin-bottom: 12px;

  img {
    width: 100%;
  }
`

const FormBox = styled.div`
  height: 265px;
`

const Input = styled.div`
  margin: 0 auto 6px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;
  height: 38px;
  width: 278px;
  background: rgba(var(--b3f,250,250,250),1);
  vertical-align: center;

  input {
    width: 258px;
    margin: 0 auto;


    background: rgba(var(--b3f,250,250,250),1);
    
    border: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    margin: 0;
    outline: 0;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
  }
`

const Button = styled.div`
  width: 278px;
  margin: 12px auto 6px;

    button {
      width: 278px;
      padding: 9px 0 7px 8px;
      background-color: rgba(var(--d69,0,149,246),.3);
      border: 0;
      border-radius: 4px;
      color: #fff;
    }
`

const Seperator = styled.div`

`

const Divider = styled.hr`
border: 0;
border-top: 1px solid #CCC;
height: 1px;
overflow: visible;
height: 1px;
padding: 0;
color: #CCC;
margin-top: 1.5rem;
font-size: 0.7rem;
font-weight: bold;
width: 266px;


&::after {
  content: "OR";
  display: inline-block;
  position: relative;
  top: -0.7em;
  font-size: 1.4em;
  padding: 0 0.9em;
  background: white;
}
`

const FacebookLogin = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.3rem;
  height: 38px;
`

const FacebookButton = styled.button`
  border: 0;
  height: 40px;
  background: #fff;
  font-weight: 600;
  padding: 0;
  color: #385185;
  font-size: 14px;
  cursor: pointer;

  span {

  }

`

const ForgotPassword = styled.a`
 text-decoration: none;
 font-size: 12px;
 cursor: pointer;
 color: rgba(var(--fe0,0,55,107),1);
 height: 38px;
  
 &:hover {

 }
`

const PlainText = styled.div`
padding: 0.8rem 0;
max-width: 348px;
max-height: 63px;
font-size: 14px;

span {
  margin: -3px 5px -4px;
}

@media (max-width: 1028px) {
  margin: 0 auto;
}
`

const Signup = styled.div`
  padding: 1.3rem 0;
  max-width: 348px;
  max-height: 63px;
  border: 1px solid rgb(219, 219, 219);
  margin-top: 0.8rem;
  font-size: 14px;
  
  span {
    margin: -3px 5px -4px;
  }
  
  a {
    color: rgba(var(--d69,0,149,246),1);
    font-weight: 600;
  }

  @media (max-width: 30em) {
    border: 0;
  }

  @media (max-width: 1028px) {
    margin: 0 auto;
    margin-top: 0.8rem;
  }
`

const Stores = styled.div`
  max-width: 348px;
  height: 44px;
  margin-bottom: 4rem;

  img {
    cursor: pointer;
    width: 136px;
    height: 40px;
    margin-right: 5px;
  }

  @media (max-width: 1028px) {
    margin: 0 auto;
  }
`

const Footer = styled.div`
width: 100%;
margin: 0 auto;
color: rgb(142, 142, 142);
position: absolute;
bottom: 0;


@media (max-width: 48em) {
  width: 95%;
}
`

const Nav = styled.ul`
font-size: 12px;
display: flex;
flex-wrap: wrap;

justify-content: center;
align-items: stretch;
margin-top: 2rem;
`

const Nav2 = styled.ul`
font-size: 12px;
display: flex;
justify-content: center;
flex-wrap: wrap;

li {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
`

const NavItems = styled.li`
text-decoration: none;
list-style-type: none;
margin-right: 15px;
margin-top: 10px;
cursor: pointer;
`

const Slides = styled.img`
  position: relative;
  width: 219px !important;
  height: 504px !important;
  position: absolute;
  top: 24.5px;
  right: 45px;

`

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [insta_1, insta_2, insta_3, insta_4],
      activeImageIndex: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      let newActiveIndex = this.state.activeImageIndex === 3 ? 0 : this.state.activeImageIndex + 1
      this.setState({
        activeImageIndex: newActiveIndex
      })
    }, 3000);
  }

  render() {
    return (
      <div className="App" >
        <Container>
          <Section>
            <CarouselContainer>
              <Carousel>
                <CarouselBoard>
                  <img src={insta_main} style={{ position: 'relative', top: '0', left: '0', height: '590px'}}></img>
                  <Slides src={this.state.images[this.state.activeImageIndex]} style={{}}></Slides>
                </CarouselBoard>
              </Carousel>
            </CarouselContainer>
            <Body>
              <LoginForm>
                <Header>
                  <img src={instagram_header} alt='instagram_header'></img>
                </Header>
                <FormBox>
                  <Input>
                    <label for="username"></label>
                    <input name="username" placeholder='Phone number, username or email address'></input>
                  </Input>
                  <Input>
                    <label for="password"></label>
                    <input name="password" placeholder='Password'></input>
                  </Input>
                  <Button>
                    <button>Log In</button>
                  </Button>
                  <Seperator>
                    <Divider></Divider>
                  </Seperator>
                  <FacebookLogin>
                    <FacebookButton>
                      <FontAwesomeIcon icon={faFacebookSquare} style={{ marginRight: '4px' }} />
                      Log in with Facebook
                    </FacebookButton>
                  </FacebookLogin>
                  <ForgotPassword>
                    Forgotten your password?
                  </ForgotPassword>
                </FormBox>
              </LoginForm>
              <Signup>
                <span>Don't have an account?</span>
                <a>Sign up</a>
              </Signup>
              <PlainText><span>Get the app.</span></PlainText>
              <Stores>
                <img src={appstore}></img>
                <img src={playstore}></img>
              </Stores>
            </Body>
          </Section>
          <Footer>
            <Nav>
              <NavItems>Meta</NavItems>
              <NavItems>About</NavItems>
              <NavItems>Blog</NavItems>
              <NavItems>Jobs</NavItems>
              <NavItems>Help</NavItems>
              <NavItems>API</NavItems>
              <NavItems>Privacy</NavItems>
              <NavItems>Terms</NavItems>
              <NavItems>Top accounts</NavItems>
              <NavItems>Hashtags</NavItems>
              <NavItems>Locations</NavItems>
              <NavItems>Instagram Lite</NavItems>
            </Nav>
            <Nav2>
              <NavItems>Dance</NavItems>
              <NavItems>Food &amp; drink</NavItems>
              <NavItems>Home &amp; garden</NavItems>
              <NavItems>Music</NavItems>
              <NavItems>Visual arts</NavItems>
            </Nav2>
            <Nav style={{ marginTop: '0' }}>
              <NavItems>English (UK)</NavItems>
              <NavItems style={{ cursor: 'default' }}>© 2022 Instagram from Meta</NavItems>
            </Nav>
          </Footer>
        </Container>
      </div>
    );
  }

}

export default App;
