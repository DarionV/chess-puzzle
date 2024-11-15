import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div>
        Puzzle designs by{" "}
        <a href="#" target="blank">
          Sherzod Khaydarbekov
        </a>
        . Developed by{" "}
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
