import React from 'react'
import styled from 'styled-components'

import { CategoriesDAta } from './SlideItem'
import CategoryItem from './CategoryItem'
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`
const Categories = () => {
  return (
    <Container >{CategoriesDAta.map((item)=>(
        <CategoryItem item={item}/>
    ))}</Container>
  )
}

export default Categories