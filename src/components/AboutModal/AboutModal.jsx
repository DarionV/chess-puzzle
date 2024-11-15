import React from "react";
import style from "./AboutModal.module.css";

const AboutModal = ({ toggleAbout }) => {
  return (
    <div className={style.overlay} onClick={toggleAbout}>
      <div className={style.modal}>
        <h2>Royal Riddles</h2>
        <a href="https://www.linkedin.com/in/darion-valdez-a63629176/">
          Developed by DarionV
        </a>
        <a href="https://uz.linkedin.com/in/khaydarbekoff">
          Puzzle designs by Sherzod Khaydarbekov
        </a>
        <a
          href="https://www.thingiverse.com/thing:6054837"
          target="blank"
          title="3D-assets"
        >
          3D-assets by Stanleyerland @ Thingiverse
        </a>
        <a
          href="https://www.flaticon.com/free-icons/knight"
          title="chess icons"
          target="blank"
        >
          Chess icons created by rizal2109 - Flaticon
        </a>
        <p>
          We use affiliate links, which help us earn commissions from purchases
          made through this site.
        </p>
      </div>
    </div>
  );
};

export default AboutModal;
