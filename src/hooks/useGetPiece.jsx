import React, { useContext } from "react";
import BoardContext from "../context/BoardContext";

const useGetPiece = () => {
  const { board } = useContext(BoardContext);

  const getPiece = (yPos, xPos) => {
    let name;
    if (
      xPos < 0 ||
      yPos < 0 ||
      xPos > board[0].length - 1 || //array is even in size. 5x5, 7x7 etc. So checking length of 1st row is sufficient.
      yPos > board.length - 1 ||
      board[yPos][xPos] === null // check for "holes" in the board
    )
      return { name: "X" }; //Prevent moves outside of board

    name = board[yPos][xPos];
    // If piece is standing on a goal tile, do not include G in the name when passing it on.
    if (name.includes("G")) name = name.replace("G", "");

    return { name: name, xPos: xPos, yPos: yPos };
  };

  return getPiece;
};

export default useGetPiece;
