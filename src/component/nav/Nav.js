import React from "react";
import "./nav.css";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_sections">
        <div className="nav_suber">
          <h2 className="nav_title">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
              to="/"
            >
              <b>ALV </b> <del>store</del>
              <BiHeart />
            </Link>
          </h2>

          <div className="navul_section">
            <ul className="nav_ul">
              <li className="nav_li">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/shop"
                >
                  buy t-shirts
                </Link>
              </li>
              <li className="nav_li">
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/product/women/"
                >
                  women
                </Link>
              </li>
              <li className="nav_li">
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/product/men/"
                >
                  men
                </Link>
              </li>
              <li className="nav_li">
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  about
                </Link>
              </li>
              <li className="nav_li">
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav_sub">
          <div className="nav_icons">
            <BiSearch />
            <BiCart />
            <BiHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
