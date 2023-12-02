import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Tshirts from "./component/category/Tshirts";
import Men from "./component/category/Men";
import Women from "./component/category/Women";
import Topnav from "./component/nav/Topnav";
import Nav from "./component/nav/Nav";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
