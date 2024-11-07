import React, { createContext, useState } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  // P: Pawn
  // N: Knight
  // B: Bishop
  // R: Rook
  // Q: Queen
  // K: King - not implemented
  // G: Goal - Red goal square.
  // H: Hero - Piece that needs to reach the goal.
  // Always start with Piece, eg. PH.
  const [board, setBoard] = useState([
    ["B", "N", "R", "PH"],
    ["B", "N", "R", null],
    ["B", "N", "R", null],
    ["B", "N", "RH", "-G"],
  ]);
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
