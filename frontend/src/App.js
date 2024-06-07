import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Newsletter from "./components/Newsletter";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
         <Route path="/register" element={<Register />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/" element={<Cart />}/>
         
      </Routes>
      <Newsletter/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
