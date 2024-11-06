import React from "react";
import style from "./PromoteModal.module.css";
import rookIcon from "../../assets/icons/rook-black.png";
import knightIcon from "../../assets/icons/knight-black.png";
import bishopIcon from "../../assets/icons/bishop-black.png";
import queenIcon from "../../assets/icons/queen-black.png";

const PromoteModal = ({ promotePawn }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button
          aria-label="promote to rook"
          onClick={() => {
            promotePawn("R");
          }}
        >
          <img src={rookIcon} alt="rook" />
        </button>
        <button
          aria-label="promote to knight"
          onClick={() => {
            promotePawn("N");
          }}
        >
          <img src={knightIcon} alt="knight" />
        </button>
        <button
          aria-label="promote to bishop"
          onClick={() => {
            promotePawn("B");
          }}
        >
          <img src={bishopIcon} alt="bishop" />
        </button>
        <button
          aria-label="promote to queen"
          onClick={() => {
            promotePawn("Q");
          }}
        >
          <img src={queenIcon} alt="queen" />
        </button>
      </div>
    </div>
  );
};

export default PromoteModal;
