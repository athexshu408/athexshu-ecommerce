// import Home from "./pages/Home";
import Annoucement from "./components/Annoucement";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";


function App() {
  return (
    <div className="App">
      <Annoucement/>
      <Navbar/>
      <Slider/>
      <Categories />
       {/* <Home/> */}
    </div>
  );
}

export default App;
