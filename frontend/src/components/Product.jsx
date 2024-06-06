import React from 'react'
import styled from 'styled-components'


import { ShoppingCartOutlined } from '@mui/icons-material'
const Container = styled.div`
    
`
const Product = ({item}) => {
  return (

    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default product