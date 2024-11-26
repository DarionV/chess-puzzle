import React, { useContext } from "react";
import BoardContext from "../context/BoardContext";
import useGetPiece from "./useGetPiece";

const useHasValidMove = () => {
  const { board } = useContext(BoardContext);

  const getPiece = useGetPiece();

  const hasValidMove = (piece) => {
    const xPos = piece.xPos;
    const yPos = piece.yPos;

    if (piece.name.includes("-")) return;

    if (piece.name.includes("P")) {
      return getPiece(yPos, xPos - 1).name.includes("-");
    } else if (piece.name.includes("B")) {
      return (
        getPiece(yPos + 1, xPos - 1).name.includes("-") ||
        getPiece(yPos - 1, xPos + 1).name.includes("-") ||
        getPiece(yPos - 1, xPos - 1).name.includes("-") ||
        getPiece(yPos + 1, xPos + 1).name.includes("-")
      );
    } else if (piece.name.includes("N")) {
      return (
        getPiece(yPos - 2, xPos - 1).name.includes("-") ||
        getPiece(yPos - 2, xPos + 1).name.includes("-") ||
        getPiece(yPos + 2, xPos - 1).name.includes("-") ||
        getPiece(yPos + 2, xPos + 1).name.includes("-") ||
        getPiece(yPos - 1, xPos - 2).name.includes("-") ||
        getPiece(yPos - 1, xPos + 2).name.includes("-") ||
        getPiece(yPos + 1, xPos - 2).name.includes("-") ||
        getPiece(yPos + 1, xPos + 2).name.includes("-")
      );
    } else if (piece.name.includes("R") || piece.name.includes("K")) {
      return (
        getPiece(yPos - 1, xPos).name.includes("-") ||
        getPiece(yPos + 1, xPos).name.includes("-") ||
        getPiece(yPos, xPos - 1).name.includes("-") ||
        getPiece(yPos, xPos + 1).name.includes("-")
      );
    } else if (piece.name.includes("Q")) {
      return (
        getPiece(yPos - 1, xPos).name.includes("-") ||
        getPiece(yPos + 1, xPos).name.includes("-") ||
        getPiece(yPos, xPos - 1).name.includes("-") ||
        getPiece(yPos, xPos + 1).name.includes("-") ||
        getPiece(yPos + 1, xPos - 1).name.includes("-") ||
        getPiece(yPos - 1, xPos + 1).name.includes("-") ||
        getPiece(yPos - 1, xPos - 1).name.includes("-") ||
        getPiece(yPos + 1, xPos + 1).name.includes("-")
      );
    } else {
      console.log("No valid piece found");
    }
  };

  return hasValidMove;
};

export default useHasValidMove;
