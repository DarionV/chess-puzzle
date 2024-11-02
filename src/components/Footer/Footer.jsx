import React from "react";
import style from "./Footer.module.css";
import lightStyle from "./FooterLight.module.css";
import darkStyle from "./FooterDark.module.css";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const theme = useTheme();
  const themeStyling = theme === "light" ? lightStyle : darkStyle;

  return (
    <footer className={`${style.footer} ${themeStyling.footer}`}>
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
