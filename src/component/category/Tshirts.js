import React from "react";
import ProductList from "../product/ProductList";
import data from "./data.json";
import { Link } from "react-router-dom";

const Tshirts = () => {
  const menData = data.men || [];
  const womenData = data.women || [];
  const women = data.tshirtData || [];

  const tshirtData = [...menData, ...womenData, ...women];
  return (
    <div className="men_container">
      <div className="men_navigator">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h2>home</h2>
        </Link>
        <h2>|</h2>
        <h2>shop</h2>
      </div>
      <h2 className="mainer">shop</h2>
      <ProductList products={tshirtData} />
    </div>
  );
};

export default Tshirts;
