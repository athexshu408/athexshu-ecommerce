import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

 const Title = styled.h3`
    margin-bottom: 30px;

 `

 const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

 `
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
   margin-bottom :20px;
   display: flex;
   align-items: center;


`

const Payment = styled.img`
width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AtheXshu</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          ipsam, hic cum repellat mollitia eveniet obcaecati molestiae
          reiciendis aut cupiditate.
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      <Title>Useful Links</Title>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Women Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>WishList</ListItem>
        <ListItem>Privacy</ListItem>
        <ListItem>Help</ListItem>
      </List>
      </Center>
      <Right>
        <Title>
            Contact
        </Title>
        <ContactItem><Room style={{marginRight:"10px"}}/>
            604 , kolhapur ,Maharashtra 416234 ; 
        </ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>
            +91 9876543216
            +91 9976543219
        </ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/>
            contact@athexshu.in
        </ContactItem>
        <Payment src="https://i.ibb.co/4fGJsJ1/25654-2-major-credit-card-logo-transparent.png"/>
          
      </Right>
    </Container>
  );
};

export default Footer;
