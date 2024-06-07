import React from 'react'
import styled from 'styled-components'

import Product from './Product'
import { popularProduct } from './SlideItem'
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
/* align-items: center; */
justify-content: space-between;
    
`
const Products = () => {
  return (
      <Container>
    {popularProduct.map((Item)=>(
         <Product Item={Item} key={Item.id}/>
            
    ))}
    </Container>
  )
}

export default Products
