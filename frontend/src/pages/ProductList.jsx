import styled from "styled-components"
import Products from "../components/Products"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

    
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText =styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`
    
`
const ProductList=()=>{

    const location =  useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("Newest")

const handleFilter = (e)=>{
    const value = e.target.value;
    setFilters({
        ...filters,
     [e.target.name] : value
    })
}
// console.log(filter);
    return <Container>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
             <Select name="color" onChange={handleFilter}>
             <Option disabled >Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
                <Option>Orange</Option>
             </Select>

             <Select name="size" onChange={handleFilter}>
             <Option disabled >Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
               
             </Select>
            
            </Filter>
            {/* <Filter>Filter1</Filter> */}
            <Filter><FilterText>Sort Prodcut:</FilterText>
             
            <Select onChange={e=>setSort(e.target.value)}  >
             <Option  value={"Newest"} >Newest</Option>
                <Option value={"asc"}>Price (asc)</Option>
                <Option value={"desc"}>Price (desc)</Option>
                {/* <Option>Black (desc)</Option> */}
                
               
             </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
    </Container>
};

export default ProductList;