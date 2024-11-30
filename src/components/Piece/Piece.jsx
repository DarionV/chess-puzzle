import React, { useContext, useEffect, useState } from "react";

import pawnWhite from "../../assets/images/pawn-white.png";
import pawnBlack from "../../assets/images/pawn-black.png";
import pawnRed from "../../assets/images/pawn-red.png";
import knightWhite from "../../assets/images/knight-white.png";
import knightBlack from "../../assets/images/knight-black.png";
import knightRed from "../../assets/images/knight-red.png";
import bishopWhite from "../../assets/images/bishop-white.png";
import bishopBlack from "../../assets/images/bishop-black.png";
import bishopRed from "../../assets/images/bishop-red.png";
import rookWhite from "../../assets/images/rook-white.png";
import rookBlack from "../../assets/images/rook-black.png";
import rookRed from "../../assets/images/rook-red.png";
import queenWhite from "../../assets/images/queen-white.png";
import queenBlack from "../../assets/images/queen-black.png";
import queenRed from "../../assets/images/queen-red.png";
import kingWhite from "../../assets/images/king-white.png";
import kingBlack from "../../assets/images/king-black.png";
import kingRed from "../../assets/images/king-red.png";
import BoardContext from "../../context/BoardContext";

import style from "./Piece.module.css";
import { useRecoilState } from "recoil";
import { madeMoveState } from "../TouchTarget/TouchTarget";

const Piece = ({ piece, size, yPos, xPos, highlighted }) => {
  const topOffset = size * 0.43; // To center piece in tile properly. Based on size to scale properly.
  const [madeMove] = useRecoilState(madeMoveState);

  const [jumpClass, setJumpClass] = useState("");

  useEffect(() => {
    setJumpClass(madeMove && highlighted ? style.jump : "");
  }, [madeMove]);

  const { board } = useContext(BoardContext);
  let leftOffset;

  leftOffset = (board[0].length - board.length) * (size / 6); //Manually adjusted to fit in tile.

  let imageSrc = "";

  if (piece.includes("P")) {
    imageSrc = piece.includes("H")
      ? pawnRed
      : piece.includes("D")
      ? pawnBlack
      : pawnWhite;
  } else if (piece.includes("N")) {
    imageSrc = piece.includes("H")
      ? knightRed
      : piece.includes("D")
      ? knightBlack
      : knightWhite;
  } else if (piece.includes("B")) {
    imageSrc = piece.includes("H")
      ? bishopRed
      : piece.includes("D")
      ? bishopBlack
      : bishopWhite;
  } else if (piece.includes("R")) {
    imageSrc = piece.includes("H")
      ? rookRed
      : piece.includes("D")
      ? rookBlack
      : rookWhite;
  } else if (piece.includes("Q")) {
    imageSrc = piece.includes("H")
      ? queenRed
      : piece.includes("D")
      ? queenBlack
      : queenWhite;
  } else if (piece.includes("K")) {
    imageSrc = piece.includes("H")
      ? kingRed
      : piece.includes("D")
      ? kingBlack
      : kingWhite;
  } else {
    console.log("Could not find graphic for the piece " + piece);
  }

  return (
    <img
      className={`${style.piece} ${jumpClass}`}
      src={imageSrc}
      height={`${size}px`}
      width={`${size}px`}
      style={{
        position: "absolute",
        top: `${xPos * 0.215 * size + yPos * 0.215 * size - topOffset}px`,
        left: `${
          xPos * 0.365 * size + yPos * -0.365 * size - size / 2.1 - leftOffset
        }px`,
        transitionProperty: "transform",
        transitionDuration: "0.1s",
        transform: highlighted ? "translateY(-3px)" : "",
        filter: highlighted ? "brightness(105%)" : "",
      }}
    ></img>
  );
};

export default Piece;
