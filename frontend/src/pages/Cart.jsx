import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  /* font-size: 20px; */
  font-weight: 600;
  text-decoration: underline;
  margin: 0px 10px;
  /* margin-right: 20px; */
  letter-spacing: 2px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
`;

const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 0.5px solid black;

  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const  Hr = styled.hr`
    background-color:#eee ;
    width: 90%;
    border: none;
    height: 1px;
   
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  /* background-color: aqua; */
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.span`
font-size: 24px;
margin: 5px;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  margin-top: 10px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;  
  text-align: center;
`

const SummaryItem = styled.div`

margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props =>props.type === "total" &&"500"};
font-size: ${props =>props.type === "total" &&"24px"};
`
// const SummaryItem = styled.div`
// `
const SummaryItemText = styled.div`
`
const SummaryItemPrice = styled.div`
`
const Button = styled.button`
  width: 100%;
    background-color: black;
    color: white;
    padding: 10px;
    font-weight: 600;
`
const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title> YOUR BAG </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Whislist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/cFkmNXn/freepik-export-20240607105838-Sths.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>552545541
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>36.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100.00</ProductPrice>
              </PriceDetail>
            </Product>
              <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/cFkmNXn/freepik-export-20240607105838-Sths.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>552545541
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b>36.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>
                ORDER SUMMARY
            </SummaryTitle>
            <SummaryItem>
                <summaryItemText>Subtotal</summaryItemText>
                <SummaryItemPrice>$20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <summaryItemText>Estimated Shiping</summaryItemText>
                <SummaryItemPrice>$20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <summaryItemText>Shipping Discount</summaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
                <summaryItemText >Total</summaryItemText>
                <SummaryItemPrice>$50</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECK OUT NOW</Button>
            
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
