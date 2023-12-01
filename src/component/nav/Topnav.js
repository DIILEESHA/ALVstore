import React from "react";
import "./nav.css";

const Topnav = () => {
  return (
    <div className="topnav_container">
      <div className="topnav_right">
        <h2>
          Free shipping for standard order over
          <span style={{ color: "teal" }}>$100</span>
        </h2>
      </div>
      <div className="topnav_right">
        <ul>
          <li>help & FAQ's</li>
          <li>account</li>
          <li>EN</li>
          <li>USD</li>
        </ul>
      </div>
    </div>
  );
};

export default Topnav;
