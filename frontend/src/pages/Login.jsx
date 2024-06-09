import React from 'react'
// import { Link } from 'react-router-dom';
import styled from "styled-components";
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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
&:disabled {
    color: green;
    cursor: not-allowed;
  }

`;

const Link = styled.a`
  margin: 5px 0 ;
  font-size: 12px;
  text-decoration  :underline ;
  cursor: pointer;
`
const Error = styled.span`
  color: red;
`;
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
         <Wrapper>
        <Title> SIGN IN </Title>
        <FORM>
          
          <Input type="text" placeholder="username"onChange={(e) => setUsername(e.target.value)} />

          
          <Input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
          
          <Button type="submit" onClick={handleClick} disabled={isFetching}>Login</Button>
          {error && <Error>Something went wrong...</Error>}
         
          <Link>DO NOT YOU REMEMBER PASSWORD?</Link>
        
          <Link>CREATE A NEW ACCOUNT</Link>
        
          </FORM>
      </Wrapper>
    </Container>
  )
}

export default Login