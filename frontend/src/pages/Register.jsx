import React from "react";
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
width: 40%;
background-color: #ffffffab`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const FORM = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
padding: 10px;
border:none;
cursor: pointer;
background-color: teal;
color: white

`;

const Agreement = styled.p`
font-size: 12px;
margin: 20px , 0;
padding: 10px;

`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> CREATE AN NEW ACCOUNT </Title>
        <FORM>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="last Name" />
          <Input type="text" placeholder="username" />

          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Agreement>
            By creating a new account , I consent to the processing of my
            personal data in accordance with <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">Register</Button>
        </FORM>
      </Wrapper>
    </Container>
  );
};

export default Register;
