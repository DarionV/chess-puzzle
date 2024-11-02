import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      Original puzzle by{" "}
      <a href="#" target="blank">
        Sherzod Khaydarbekov
      </a>
      . Created by{" "}
      <a href="#" target="blank">
        Darion Valdez
      </a>
      .
    </footer>
  );
};

export default Footer;
