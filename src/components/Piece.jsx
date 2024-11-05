import React, { useState } from "react";

import pawnWhite from "../assets/images/pawn-white-2.png";
import knightWhite from "../assets/images/knight-white-2.png";
import bishopWhite from "../assets/images/bishop-white-2.png";
import rookWhite from "../assets/images/rook-white-2.png";
import queenWhite from "../assets/images/queen-white.png";

const Piece = ({ piece, size, yPos, xPos, zIndex }) => {
  const topOffset = 2.2; //To center piece in tile properly
  const TOP_MARGIN_IN_PX = -size / topOffset + 80;
  const [hoverStyle, setHoverStyle] = useState("nonHover");

  let imageSrc = "";

  switch (piece) {
    case "P":
      imageSrc = pawnWhite;
      break;
    case "N":
      imageSrc = knightWhite;
      break;
    case "B":
      imageSrc = bishopWhite;
      break;
    case "R":
      imageSrc = rookWhite;
      break;
    case "Q":
      imageSrc = queenWhite;
      break;
    case "K":
      console.log("King");
      break;
    default:
      console.log("No piece found");
  }

  return (
    <img
      src={imageSrc}
      height={`${size}px`}
      width={`${size}px`}
      style={{
        position: "absolute",
        top: `${xPos * 0.25 * size + yPos * 0.25 * size + TOP_MARGIN_IN_PX}px`,
        left: `${xPos * 0.43 * size + yPos * -0.43 * size - size / 2}px`,
        transitionProperty: "top, leftall",
        transitionDuration: "0.4s",
      }}
    ></img>
  );
};

export default Piece;
