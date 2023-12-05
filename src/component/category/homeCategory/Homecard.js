// Home.js
import React from "react";
import data from "../data.json";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const menData = data.men.slice(0, 2); // Select first two male items
  const womenData = data.women.slice(0, 2); // Select first two female items

  // Combine and shuffle the men and women data
  const mixedData = menData.reduce((result, menItem, index) => {
    result.push(menItem);
    result.push(womenData[index]);
    return result;
  }, []);

  return (
    <div className="home_container">
      <h2 className="home_title">SUMMER COLLECTION</h2>
      <h1 className="home_main_title">Popular T-Shirts</h1>

      <div className="home_grid">
        {mixedData.map((product) => (
          <Link
           className="linka"
            to={`/product/${product.cat}/${product.id}`}
          >
            <div key={product.id} className="home_product_sub">
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
};

export default Home;
