import React from "react";
import pawnWhite from "../assets/images/pawn-white.png";
import knightWhite from "../assets/images/knight-white.png";
import bishopWhite from "../assets/images/bishop-white.png";
import rookWhite from "../assets/images/rook-white.png";
import queenWhite from "../assets/images/queen-white.png";

const Piece = ({ piece, size, yPos, xPos }) => {
  const TOP_MARGIN_IN_PX = 5;
  let imageSrc = "";
  console.log("piece " + piece);

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
