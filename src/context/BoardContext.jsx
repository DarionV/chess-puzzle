import React, { createContext, useState } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [board, setBoard] = useState([
    ["B", "N", "R", "P"],
    ["B", "N", "-", null],
    ["B", "N", "R", null],
    ["B", "N", "R", "R"],
  ]);
  return (
    <BoardContext.Provider value={{ board, setBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
