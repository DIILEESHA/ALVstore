import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Tshirts from "./component/category/Tshirts";
import Men from "./component/category/Men";
import Women from "./component/category/Women";
import Topnav from "./component/nav/Topnav";
import Nav from "./component/nav/Nav";
import Footer from "./component/footer/Footer";
import Singleitem from "./component/single/Singleitem";
import AddToCart from "./component/addtocart/AddToCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topnav />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/women/" element={<Women />} />
          <Route path="/product/men/" element={<Men />} />
          <Route path="/shop" element={<Tshirts />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path="/product/:category/:itemId" element={<Singleitem />} />
          <Route path="/category/:category/:itemId" element={<Singleitem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
