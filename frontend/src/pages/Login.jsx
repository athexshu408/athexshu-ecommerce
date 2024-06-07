import React from 'react'
// import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background:linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5)), url("https://i.ibb.co/YhVQjNK/fashion-girl-posing.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  /* object-fit:cover; */
`;

const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: #ffffffab`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const FORM = styled.form`
display: flex;
/* flex-wrap: wrap; */
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px ;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
padding: 10px;
border:none;
cursor: pointer;
background-color: teal;
color: white;
margin-bottom: 5px;

`;

const Link = styled.a`
  margin: 5px 0 ;
  font-size: 12px;
  text-decoration  :underline ;
  cursor: pointer;
`
const Login = () => {
  return (
    <Container>
         <Wrapper>
        <Title> SIGN IN </Title>
        <FORM>
          
          <Input type="text" placeholder="username" />

          
          <Input type="password" placeholder="Password" />
          
          <Button type="submit">Login</Button>
         
          <Link>DO NOT YOU REMEMBER PASSWORD?</Link>
        
          <Link>CREATE A NEW ACCOUNT</Link>
        
          </FORM>
      </Wrapper>
    </Container>
  )
}

export default Login