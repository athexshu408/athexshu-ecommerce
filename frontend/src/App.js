import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Newsletter from "./components/Newsletter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Annoucement from "./components/Annoucement";

function App() {
   
  const user = true;

  return (
    <BrowserRouter>
    <Annoucement/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
         <Route path="/register" element={user ? <Navigate to="/"/>:<Register />}/>
         <Route path="/login" element={user ? <Navigate to="/"/>:<Login />}/>
         <Route path="/cart" element={<Cart />}/>
         
      </Routes>
      <Newsletter/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
