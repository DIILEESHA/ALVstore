import React from "react";
import ProductList from "../product/ProductList";
import data from "./data.json";
import "./category.css";
import { Link } from "react-router-dom";

const Men = () => {
  const menData = data.men || [];
  return (
    <div className="men_container">
      <div className="men_navigator">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h2>home</h2>
        </Link>
        <h2>|</h2>
        <h2>men</h2>
      </div>
      <h2 className="mainer">men</h2>

      <ProductList products={menData} />
    </div>
  );
};

export default Men;
