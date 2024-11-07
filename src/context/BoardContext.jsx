import React, { createContext, useState } from "react";
import puzzles from "../puzzlesDb.js";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
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
