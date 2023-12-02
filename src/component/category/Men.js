import ProductList from "../product/ProductList";
import data from "./data.json";
import "./category.css";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import useLoading from "./useLoading";

const Men = () => {
  const menData = data.men || [];
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
            <h2>men</h2>
          </div>
          <h2 className="mainer">men</h2>

          <ProductList products={menData} />
        </>
      )}
    </div>
  );
};

export default Men;
