import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

function ProductList({ products, category }) {
  return (
    <div className="product_container">
      <div className="product_grid">
        {products.map((product) => (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/product/${product.cat}/${product.id}`}
          >
            <div className="product_sub">
              <img src={product.image} alt={product.name} />
              <h2>{product.cat}</h2>
              <h3>{product.name}</h3>
              <h4>
                ${product.price.min} - ${product.price.max}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
