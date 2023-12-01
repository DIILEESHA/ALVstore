// HomePageSlider.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./CustomArrows";
import sliderData from "./sliderData.json";
import "./slider.css";
import Nav from "../nav/Nav";

const Slid = () => {
  const settings = {
    // dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 1900,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider_container">
      
      <Slider {...settings}>
        
        {sliderData.map((sliders, index) => (
          <div className="slider" key={index}>
            <img src={sliders.image} alt="" />

            <div className="slider_texter">
              <h2 className="sm">{sliders.text}</h2>
              <h2 className="bg">{sliders.sub}</h2>
              <div class="slider_btn_container">
                <button class="slider_btn" tabindex="0">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slid;
