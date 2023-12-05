import React, { useState } from "react";
import "./nav.css";
import { BiCart, BiHeart, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
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

            <Link to="/cart">
              <BiCart />
            </Link>
            <BiHeart />
            <div className="hamburger_menu" onClick={() => setOpen(!isOpen)}>
              <RxHamburgerMenu className="rusa" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="menu_option duka"
        style={{ right: isOpen ? "0px" : "-50vw" }}
      >
        <ul className="menu_ul">
          <div className="hjt" onClick={() => setOpen(!isOpen)}>
            <li className="menu_li">
              <Link to="/shop" className="linka">
                buy t-shirts
              </Link>
            </li>
          </div>
          <div className="hjt" onClick={() => setOpen(!isOpen)}>
            <li className="menu_li">
              <Link to="/product/women" className="linka">
                women
              </Link>
            </li>
          </div>
          <div className="hjt" onClick={() => setOpen(!isOpen)}>
            <li className="menu_li">
              <Link to="/product/men" className="linka">
                men
              </Link>
            </li>
          </div>
          <div className="hjt" onClick={() => setOpen(!isOpen)}>
            <li className="menu_li">about</li>
          </div>
          <div className="hjt" onClick={() => setOpen(!isOpen)}>
            <li className="menu_li">contact</li>
          </div>
          <div className="hamburger_menu uk" onClick={() => setOpen(!isOpen)}>
            <MdClose className="rusa" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
