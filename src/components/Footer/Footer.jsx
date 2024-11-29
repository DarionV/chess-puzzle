import React, { useContext } from "react";
import style from "./Footer.module.css";
import BoardContext from "../../context/BoardContext";

const Footer = () => {
  const { getDesigner } = useContext(BoardContext);
  return (
    <footer className={style.footer}>
      <div>{getDesigner()}.</div>
    </footer>
  );
};

export default Footer;
