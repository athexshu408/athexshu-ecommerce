import React from 'react'
import Annoucement from '../components/Annoucement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      {/* <Annoucement/> */}
      {/* <Navbar/> */}
      <Slider/>
      <Categories />
      <Products/>
       {/* <Newsletter /> */}
       {/* <Footer/> */}
    </>
  )
}

export default Home
