import React from "react";
import style from "./ArrowButton.module.css";

const ArrowButton = ({ handleClick, direction }) => {
  return <button className={style.button} onClick={handleClick}></button>;
};

export default ArrowButton;
