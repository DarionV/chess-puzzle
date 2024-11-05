import React, { createContext, useState } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState([
    ["P", "P", "-", "P"],
    ["-", "B", "B", null],
    ["R", "N", "-", null],
    ["B", "P", "-", "- red"],
  ]);
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
