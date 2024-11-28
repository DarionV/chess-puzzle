import React, { useContext } from "react";
import style from "./Footer.module.css";
import BoardContext from "../../context/BoardContext";

const Footer = () => {
  const { getDesigner } = useContext(BoardContext);
  return (
    <footer className={style.footer}>
      <div>
        Puzzle design by {getDesigner()}. Developed by{" "}
        <a
          href="https://www.linkedin.com/in/darion-valdez-a63629176/"
          target="blank"
        >
          DarionV
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
