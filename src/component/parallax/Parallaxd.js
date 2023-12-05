import React from "react";
import { Parallax } from "react-parallax";
import "./para.css";
import { Link } from "react-router-dom";

const Parallaxd = () => {
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="para">
      <Parallax
        strength={600}
        className="bgClassName"
        bgImage={
          "https://images.unsplash.com/photo-1509295148211-91a35ab2e3ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <div className="content">
          <div className="sub_content">
            <h5>NEW COLLECTION♡</h5>
            <h1>Be different in your own way!</h1>
            <h2>Find your unique style.</h2>

            <Link className="linka" to="/shop">
              <button onClick={handleClicks}>shop collection</button>
            </Link>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallaxd;
