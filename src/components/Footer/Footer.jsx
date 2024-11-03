import React from "react";
import style from "./Footer.module.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const theme = useTheme();
  const themeStyling = theme === "light" ? "light" : "dark";

  return (
    <footer className={`${style.footer} ${style[themeStyling]}`}>
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
