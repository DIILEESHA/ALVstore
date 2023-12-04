import React from "react";
import "../product/product.css";
import { Link } from "react-router-dom";
import data from "../category/data.json";

function RelatedItems({ category }) {
  const relatedItems = data[category] || [];

  const slicer = relatedItems.slice(0,4)
  return (
    <div className="product_container">
      <div className="product_grid">
        {slicer.map((item) => (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/category/${category}/${item.id}`}
          >
            <div className="product_sub">
              <img src={item.image} alt={item.name} loading="lazy"/>
              <h2>{item.cat}</h2>
              <h3>{item.name}</h3>
              <h4>
                ${item.price.min} - ${item.price.max}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedItems;
