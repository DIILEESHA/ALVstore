// CustomArrows.jsx
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";
import "./slider.css";

const Arrow = ({ direction, onClick }) => {
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
    color: "#000", // Arrow color
  };

  return (
    <div style={{ ...arrowStyles, [direction]: 10 }} onClick={onClick}>
      {direction === "left" ? (
        <BiSolidLeftArrow className="for" />
      ) : (
        <BiSolidRightArrow className="for" />
      )}
    </div>
  );
};

const PrevArrow = ({ onClick }) => <Arrow direction="left" onClick={onClick} />;
const NextArrow = ({ onClick }) => (
  <Arrow direction="right" onClick={onClick} />
);

export { PrevArrow, NextArrow };
