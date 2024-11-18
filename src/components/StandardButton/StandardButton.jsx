import React from "react";
import style from "./StandardButton.module.css";

const StandardButton = ({ children, handleClick }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default StandardButton;
