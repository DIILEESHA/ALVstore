import React from "react";
import "./nav.css";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="nav_container">
      <div className="nav_sections">
        <div className="nav_suber">
          <h2 className="nav_title">
            <b>ALV </b> <del>store</del>
            <BiHeart />
          </h2>

          <div className="navul_section">
            <ul className="nav_ul">
              <li className="nav_li">home</li>
              <li className="nav_li">shop</li>
              <li className="nav_li">features</li>
              <li className="nav_li">blog</li>
              <li className="nav_li">about</li>
              <li className="nav_li">contact</li>
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
