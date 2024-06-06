import React from 'react'
import styled from 'styled-components'

import Product from './product'
import { popularProduct } from './SlideItem'
const Container = styled.div`
padding: 20px;
display: flex;
align-items: center;
    
`
const Products = () => {
  return (
      <Container>
    {popularProduct.map((Item)=>(
         <Product item={Item} key={Item.id}/>
            
    ))}
    </Container>
  )
}

export default Products
