import React, { createContext, useEffect, useState } from "react";
import puzzles from "../puzzlesDb.js";
import { Navigate, replace } from "react-router";

export const BoardContext = createContext();

export const BoardProvider = ({ children, puzzleUrl }) => {
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  const [board, setBoard] = useState(puzzles[currentBoardIndex].board);
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    const selectedPuzzle = puzzles.find((puzzle) => puzzle.url === puzzleUrl);
    setCurrentBoardIndex(puzzles.indexOf(selectedPuzzle));
    setBoard(selectedPuzzle.board);
    setRedirectUrl(null);
  }, [puzzleUrl]);

  const resetBoard = () => {
    setBoard(currentBoardIndex);
  };

  const getNextPuzzle = () => {
    const newIndex =
      currentBoardIndex + 1 >= puzzles.length ? 0 : currentBoardIndex + 1;
    setCurrentBoardIndex(newIndex);
    setBoard(puzzles[newIndex].board);
    setRedirectUrl(puzzles[newIndex].url);
  };

  const getPreviousPuzzle = () => {
    const newIndex =
      currentBoardIndex - 1 < 0 ? puzzles.length - 1 : currentBoardIndex - 1;
    setCurrentBoardIndex(newIndex);
    setBoard(puzzles[newIndex].board);
    setRedirectUrl(puzzles[newIndex].url);
  };

  const getTitle = () => puzzles[currentBoardIndex].title;

  const getInfo = () => puzzles[currentBoardIndex].info;

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
      {redirectUrl && <Navigate to={"/" + redirectUrl} replace />}
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
