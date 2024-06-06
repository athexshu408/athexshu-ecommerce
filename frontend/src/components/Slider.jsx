import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { SlideItem } from "./SlideItem";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  /* background-color: coral; */
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #edf1f6bf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};

  margin: auto;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  
  transform: translateX(${props=>props.slideIndex *-100}vw );
  display: flex;
  transition: all 1.2s ease;
  /* overflow: hidden; */
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 90%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
  
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
`;



const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0)
   
   
    const handleClick =(direction) =>{
        console.log("click")
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)

        }

    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined style={{ fontSize: "25px" }} />
      </Arrow>
      <Wrapper slideIndex= {slideIndex}>
        {SlideItem.map((item)=>(

            <Slide bg={item.bg}> 
          <ImgContainer>
            <Image src={item.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>
            {item.desc}
            </Desc>
            <Button>{item.button}</Button>
          </InfoContainer>
        </Slide>
        ))}
        
        
      </Wrapper>
      <Arrow direction="right"onClick={()=>handleClick("right")}>
        <ArrowRightOutlined style={{ fontSize: "25px" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
