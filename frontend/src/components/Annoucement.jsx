import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color:teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
text-align:center;`

const Annoucement = () => {
  return (
    <Container>
    Super Deal! Free Shipping on Order over 500 <span >&#8377;</span>
    </Container>
  )
}

export default Annoucement