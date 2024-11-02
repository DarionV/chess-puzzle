import React, { useContext } from "react";
import style from "./ThemeSwitcher.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className={style.switcher} onClick={toggleTheme}>
      Switch theme
    </button>
  );
};

export default ThemeSwitcher;
