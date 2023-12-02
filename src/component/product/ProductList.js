import React from "react";
import "./product.css";

function ProductList({ products }) {
  return (
    // <ul>
    //   {products.map((product) => (
    //     <li key={product.id}>
    //       <li>{product.image}</li>
    //     </li>
    //   ))}
    // </ul>

    <div className="product_container">
      <div className="product_grid">
        {products.map((product) => (
          <div key={products.id} className="product_sub">
            <img src={product.image} alt={product.name} />
            <h2>{product.cat}</h2>
            <h3>{product.name}</h3>
            <h4>
              {" "}
              ${product.price.min} - ${product.price.max}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
