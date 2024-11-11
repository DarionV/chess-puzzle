import React, { createContext, useEffect, useState } from "react";
import puzzles from "../puzzlesDb.js";
import { Navigate, replace } from "react-router";
import { useMoveCount } from "./MoveCountContext.jsx";

export const BoardContext = createContext();

export const BoardProvider = ({ children, puzzleUrl }) => {
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  const [board, setBoard] = useState(puzzles[currentBoardIndex].board);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const { setMoveCount } = useMoveCount();

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
    setMoveCount(0);
  };

  const getPreviousPuzzle = () => {
    const newIndex =
      currentBoardIndex - 1 < 0 ? puzzles.length - 1 : currentBoardIndex - 1;
    setCurrentBoardIndex(newIndex);
    setBoard(puzzles[newIndex].board);
    setRedirectUrl(puzzles[newIndex].url);
    setMoveCount(0);
  };

  const getTitle = () => puzzles[currentBoardIndex].title;

  const getInfo = () => puzzles[currentBoardIndex].info;

  const getGoals = () => puzzles[currentBoardIndex].goals;

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
        getGoals,
      }}
    >
      {redirectUrl && <Navigate to={"/" + redirectUrl} replace />}
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
