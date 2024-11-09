import React, { useState } from "react";

import pawnWhite from "../assets/images/pawn-white-2.png";
import knightWhite from "../assets/images/knight-white-2.png";
import bishopWhite from "../assets/images/bishop-white-2.png";
import rookWhite from "../assets/images/rook-white-2.png";
import queenWhite from "../assets/images/queen-white.png";
import queenRed from "../assets/images/queen-red-2.png";

const Piece = ({ piece, size, yPos, xPos, highlighted }) => {
  const topOffset = size * 0.43; // To center piece in tile properly. Based on size to scale properly.

  let imageSrc = "";

  if (piece.includes("P")) {
    imageSrc = pawnWhite;
  } else if (piece.includes("N")) {
    imageSrc = knightWhite;
  } else if (piece.includes("B")) {
    imageSrc = bishopWhite;
  } else if (piece.includes("R")) {
    imageSrc = rookWhite;
  } else if (piece.includes("Q")) {
    imageSrc = queenRed;
  } else if (piece.includes("K")) {
    console.log("King");
  } else {
    console.log("No piece found");
  }

  return (
    <img
      src={imageSrc}
      height={`${size}px`}
      width={`${size}px`}
      style={{
        position: "absolute",
        top: `${xPos * 0.25 * size + yPos * 0.25 * size - topOffset}px`,
        left: `${xPos * 0.43 * size + yPos * -0.43 * size - size / 2}px`,
        transitionProperty: "all",
        transitionDuration: "0.1s",
        transform: highlighted ? "translateY(-3px)" : "",
        filter: highlighted ? "brightness(105%)" : "",
      }}
    ></img>
  );
};

export default Piece;
