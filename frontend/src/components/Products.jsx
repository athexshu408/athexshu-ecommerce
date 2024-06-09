import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Product from './Product'
import { popularProduct } from './SlideItem'

import axios from "axios"
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
/* align-items: center; */
justify-content: space-between;
    
`
const Products = ({cat,filters,sort}) => {

  const [product,setProduct] = useState([])

const [filterProduct,setFilterProduct]= useState([])

useEffect(()=>{
  const getProducts = async ()=>{
    try{
         const res=   await  axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products")
      
          setProduct(res.data);
      
    }catch(err){
      console.log(err)
    }
  } 
  getProducts();
},[cat])

      useEffect(()=>{
     

          cat && setFilterProduct(
              
             product.filter((item)=>
              
              Object.entries(filters).every(([key,value])=>
              
                 item[key].includes(value)
              
              )
            )



          );
          
      },[product, cat,filters]);


   useEffect(()=>{
              if(sort==="Newest"){
                setFilterProduct((prev)=>
                  [...prev].sort((a,b)=>a.createdAt - b.createdAt));
              }else if (sort=== "asc") {
                setFilterProduct((prev)=>
                  [...prev].sort((a,b)=>a.price - b.price));
              }else{
                setFilterProduct((prev)=>
                  [...prev].sort((a,b)=>b.price - a.price));
              }
   },[sort])
  return (
      <Container>
    {cat ?filterProduct.map((Item)=>(
         <Product Item={Item} key={Item._id}/>
            
    )) : product.slice(0,7).map((Item)=>(
      <Product Item={Item} key={Item._id}/>
         
 ))}
    </Container>
  )
}

export default Products
