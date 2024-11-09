import React from "react";
import style from "./ArrowButton.module.css";

const ArrowButton = ({ handleClick, direction = "right" }) => {
  return (
    <button
      className={style.button}
      onClick={handleClick}
      style={{ transform: direction === "left" ? "rotateZ(-180deg)" : "" }}
    ></button>
  );
};

export default ArrowButton;
