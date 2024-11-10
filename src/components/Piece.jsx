import React, { useState } from "react";

import pawnWhite from "../assets/images/pawn-white.png";
import pawnRed from "../assets/images/pawn-red.png";
import knightWhite from "../assets/images/knight-white.png";
import knightRed from "../assets/images/knight-red.png";
import bishopWhite from "../assets/images/bishop-white.png";
import bishopRed from "../assets/images/bishop-red.png";
import rookWhite from "../assets/images/rook-white.png";
import rookRed from "../assets/images/rook-red.png";
import queenWhite from "../assets/images/queen-white.png";
import queenRed from "../assets/images/queen-red.png";
import kingWhite from "../assets/images/king-white.png";
import kingRed from "../assets/images/king-red.png";

const Piece = ({ piece, size, yPos, xPos, highlighted }) => {
  const topOffset = size * 0.43; // To center piece in tile properly. Based on size to scale properly.

  let imageSrc = "";

  if (piece.includes("P")) {
    imageSrc = piece.includes("H") ? pawnRed : pawnWhite;
  } else if (piece.includes("N")) {
    imageSrc = piece.includes("H") ? knightRed : knightWhite;
  } else if (piece.includes("B")) {
    imageSrc = piece.includes("H") ? bishopRed : bishopWhite;
  } else if (piece.includes("R")) {
    imageSrc = piece.includes("H") ? rookRed : rookWhite;
  } else if (piece.includes("Q")) {
    imageSrc = piece.includes("H") ? queenRed : queenWhite;
  } else if (piece.includes("K")) {
    imageSrc = piece.includes("H") ? kingRed : kingWhite;
  } else {
    console.log("Could not find the piece " + piece);
  }

  return (
    <img
      src={imageSrc}
      height={`${size}px`}
      width={`${size}px`}
      style={{
        position: "absolute",
        top: `${xPos * 0.215 * size + yPos * 0.215 * size - topOffset}px`,
        left: `${xPos * 0.365 * size + yPos * -0.365 * size - size / 2.1}px`,
        transitionProperty: "all",
        transitionDuration: "0.1s",
        transform: highlighted ? "translateY(-3px)" : "",
        filter: highlighted ? "brightness(105%)" : "",
      }}
    ></img>
  );
};

export default Piece;
