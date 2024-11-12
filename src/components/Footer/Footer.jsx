import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      Original puzzles by{" "}
      <a href="#" target="blank">
        Sherzod Khaydarbekov
      </a>
      . Developed by{" "}
      <a href="#" target="blank">
        DarionV
      </a>
      .
    </footer>
  );
};

export default Footer;
