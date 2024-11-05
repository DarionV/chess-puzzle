import React, { useState } from "react";

import pawnWhite from "../assets/images/pawn-white.png";
import knightWhite from "../assets/images/knight-white.png";
import bishopWhite from "../assets/images/bishop-white.png";
import rookWhite from "../assets/images/rook-white.png";
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
        top: `${xPos * 0.29 * size + yPos * 0.29 * size + TOP_MARGIN_IN_PX}px`,
        left: `${xPos * 0.5 * size + yPos * -0.5 * size - size / 2}px`,
        // transitionProperty: "all",
        // transitionDuration: "1s",
      }}
    ></img>
  );
};

export default Piece;
