import React from "react";
import pawnWhite from "../assets/images/pawn-white.png";

const Piece = ({ piece, size, yPos, xPos }) => {
  const TOP_MARGIN_IN_PX = 5;
  return (
    <img
      src={pawnWhite}
      width={`${size}px`}
      height={`${size}px`}
      style={{
        position: "absolute",
        top: `${xPos * 0.24 * size + yPos * 0.24 * size + TOP_MARGIN_IN_PX}px`,
        left: `${xPos * 0.42 * size + yPos * -0.42 * size - size / 2}px`,
      }}
    ></img>
  );
};

export default Piece;
