import React from "react";
import Slid from "../slidr/Slid";
import Homecard from "../category/homeCategory/Homecard";
import Parallaxd from "../parallax/Parallaxd";
import Gallery from "../Photo/Gallery";
import Trendcard from "../category/homeCategory/Trrendcard";

const Home = () => {
 
  return (
    <div >
      <Slid />
      <Homecard />
      <Gallery />
      <Parallaxd />
      <Trendcard />
    </div>
  );
};

export default Home;
