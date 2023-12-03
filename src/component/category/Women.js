import React from "react";
import ProductList from "../product/ProductList";
import data from "./data.json";
import { Link } from "react-router-dom";
import useLoading from "./useLoading";
import Spinner from "../spinner/Spinner";

const Women = () => {
  const womenData = data.women || [];
  const loading = useLoading();
  return (
    <div className="men_container">
      {loading && <Spinner />}
      {!loading && (
        <>
          <div className="men_navigator">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <h2>home</h2>
            </Link>
            <h2>|</h2>
            <h2>women</h2>
          </div>
          <h2 className="mainer">women</h2>
          <ProductList products={womenData} category="women"/>
        </>
      )}
    </div>
  );
};

export default Women;
