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
        {/* . Developed by{" "}
        <a href="#" target="blank">
          DarionV
        </a> */}
        .
      </div>
      <p>
        We use affiliate links, which help us earn commissions from purchases
        made through this site.
      </p>
    </footer>
  );
};

export default Footer;
