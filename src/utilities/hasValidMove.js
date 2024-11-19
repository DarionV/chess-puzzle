import { getPiece } from "./getPiece";

export const hasValidMove = (piece, board, yPos, xPos) => {
  if (piece.includes("-")) return;

  if (piece.includes("P")) {
    return getPiece(board, yPos, xPos - 1).includes("-");
  } else if (piece.includes("B")) {
    return (
      getPiece(board, yPos + 1, xPos - 1).includes("-") ||
      getPiece(board, yPos - 1, xPos + 1).includes("-") ||
      getPiece(board, yPos - 1, xPos - 1).includes("-") ||
      getPiece(board, yPos + 1, xPos + 1).includes("-")
    );
  } else if (piece.includes("N")) {
    return (
      getPiece(board, yPos - 2, xPos - 1).includes("-") ||
      getPiece(board, yPos - 2, xPos + 1).includes("-") ||
      getPiece(board, yPos + 2, xPos - 1).includes("-") ||
      getPiece(board, yPos + 2, xPos + 1).includes("-") ||
      getPiece(board, yPos - 1, xPos - 2).includes("-") ||
      getPiece(board, yPos - 1, xPos + 2).includes("-") ||
      getPiece(board, yPos + 1, xPos - 2).includes("-") ||
      getPiece(board, yPos + 1, xPos + 2).includes("-")
    );
  } else if (piece.includes("R") || piece.includes("K")) {
    return (
      getPiece(board, yPos - 1, xPos).includes("-") ||
      getPiece(board, yPos + 1, xPos).includes("-") ||
      getPiece(board, yPos, xPos - 1).includes("-") ||
      getPiece(board, yPos, xPos + 1).includes("-")
    );
  } else if (piece.includes("Q")) {
    return (
      getPiece(board, yPos - 1, xPos).includes("-") ||
      getPiece(board, yPos + 1, xPos).includes("-") ||
      getPiece(board, yPos, xPos - 1).includes("-") ||
      getPiece(board, yPos, xPos + 1).includes("-") ||
      getPiece(board, yPos + 1, xPos - 1).includes("-") ||
      getPiece(board, yPos - 1, xPos + 1).includes("-") ||
      getPiece(board, yPos - 1, xPos - 1).includes("-") ||
      getPiece(board, yPos + 1, xPos + 1).includes("-")
    );
  } else {
    console.log("No valid piece found");
  }
};
