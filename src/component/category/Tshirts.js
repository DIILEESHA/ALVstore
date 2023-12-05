// Tshirts.jsx
import React from "react";
import ProductList from "../product/ProductList";
import data from "./data.json";
import { Link } from "react-router-dom";
import useLoading from "./useLoading";
import Spinner from "../spinner/Spinner";

const Tshirts = () => {
  const menData = data.men || [];
  const womenData = data.women || [];
  const tshirtDatas = data.tshirt || [];
  const all = data.tshirtData || [];

  const tshirtData = [...menData, ...womenData, ...all, ...tshirtDatas];

  const loading = useLoading();

  return (
    <div className="men_container">
      {loading && <Spinner />}
      {!loading && (
        <>
          <div className="men_navigator">
            <Link className="linka">
              <h2>home</h2>
            </Link>
            <h2>|</h2>
            <h2>shop</h2>
          </div>
          <h2 className="mainer">shop</h2>
          <ProductList products={tshirtData} category="tshirt" />
        </>
      )}
    </div>
  );
};

export default Tshirts;
