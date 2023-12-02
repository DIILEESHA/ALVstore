import React from "react";
import Slid from "../slidr/Slid";
import Homecard from "../category/homeCategory/Homecard";
import Parallaxd from "../parallax/Parallaxd";

const Home = () => {
  return (
    <div>
      <Slid />
      <Homecard />
      <Parallaxd />
      <Homecard />
    </div>
  );
};

export default Home;
