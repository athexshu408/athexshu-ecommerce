
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImageContainer = styled.div`
  flex  : 1;
`
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: contain;
`
const InfoContainer = styled.div`
flex  : 1;
padding: 0px 50px;
`
const Title = styled.h1`
    font-weight :200 ;
`
const Desc = styled.p`
  margin: 20px 0px;  
`
const Price = styled.span`
   font-weight: 100;
   font-size: 40px; 
`
const FilterContainer = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
width: 50%;`


const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
border-color: 1px solid black;
margin: 0 5px;
background-color: ${props =>props.color};
cursor: pointer;

`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;`

const FilterSizeOption = styled.option``





const Product = () => {
  return (
    <Container>
        <Wrapper>
            <ImageContainer>
              <Image src="https://i.ibb.co/kDyvjGr/transparent-formal-attire-red-satin-shirt-with-long-sleeves-collar6619740559ab10-81129464.png" />   
            </ImageContainer>
            <InfoContainer>

            <Title>zara shirt</Title>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, ab dolorem doloremque perferendis asperiores unde dicta quos quo nesciunt repellendus!</Desc>
            <Price> 100</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="#00008B"/>
                    <FilterColor color="#FFE5B4"/>
                    
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>

                    <FilterSize>
                       <FilterSizeOption>XS</FilterSizeOption>
                       <FilterSizeOption>S</FilterSizeOption>
                       <FilterSizeOption>M</FilterSizeOption>
                       <FilterSizeOption>L</FilterSizeOption>
                       <FilterSizeOption>XL</FilterSizeOption>
                       <FilterSizeOption>XXL</FilterSizeOption>

                    </FilterSize>
                </Filter>
            </FilterContainer>
            </InfoContainer>
        </Wrapper>

    </Container>
  )
}

export default Product