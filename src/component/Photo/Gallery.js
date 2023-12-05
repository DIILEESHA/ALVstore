import React from "react";
import "./gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const handleClicks = () => {
    // Scroll to the top of the SingleItemDetail component
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="gallery_container">
      <div className="gallery_grid">
        <div className="gallery_sub_grid">
          <img
            src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="gallery_sub_grid">
          <img
            src="https://images.unsplash.com/photo-1503341338985-c0477be52513?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="gallery_sub_grid jk">
          <h3>men</h3>
          <h2>The base collection - Ideal every day.</h2>

          <Link className="linka" to="/shop">
            <button onClick={handleClicks}>shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
