import styled from "styled-components"
import Products from "../components/Products"

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
    return <Container>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
             <Select>
             <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
                <Option>Orange</Option>
             </Select>

             <Select>
             <Option disabled selected>Size</Option>
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
             
            <Select>
             <Option disabled selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
                {/* <Option>Black (desc)</Option> */}
                
               
             </Select>
            </Filter>
        </FilterContainer>
        <Products/>
    </Container>
};

export default ProductList;