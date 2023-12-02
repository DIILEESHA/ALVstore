import React from "react";
import ProductList from "../product/ProductList";
import data from "./data.json";
import { Link } from "react-router-dom";

const Women = () => {
  const womenData = data.women || [];
  return (
    <div className="men_container">
      <div className="men_navigator">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h2>home</h2>
        </Link>
        <h2>|</h2>
        <h2>women</h2>
      </div>
      <h2 className="mainer">women</h2>
      <ProductList products={womenData} />
    </div>
  );
};

export default Women;
