import React, { createContext, useState } from "react";
import puzzles from "../puzzlesDb.js";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  const [board, setBoard] = useState(puzzles[currentBoardIndex].board);

  const resetBoard = () => {
    setBoard(currentBoardIndex);
  };

  const getNextPuzzle = () => {
    const newIndex =
      currentBoardIndex + 1 >= puzzles.length ? 0 : currentBoardIndex + 1;
    setCurrentBoardIndex(newIndex);
    setBoard(puzzles[newIndex].board);
  };

  const getPreviousPuzzle = () => {
    const newIndex =
      currentBoardIndex - 1 < 0 ? puzzles.length - 1 : currentBoardIndex - 1;
    setCurrentBoardIndex(newIndex);
    setBoard(puzzles[newIndex].board);
  };

  const getTitle = () => {
    return puzzles[currentBoardIndex].title;
  };

  const getInfo = () => {
    return puzzles[currentBoardIndex].info;
  };

  return (
    <BoardContext.Provider
      value={{
        board,
        setBoard,
        getNextPuzzle,
        getPreviousPuzzle,
        resetBoard,
        getTitle,
        getInfo,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
