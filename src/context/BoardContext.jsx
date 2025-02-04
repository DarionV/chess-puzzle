import React, { createContext, useEffect, useState } from "react";
import puzzles from "../puzzlesDb.js";
import { Navigate } from "react-router";
import { useRecoilState } from "recoil";
import { moveCountState } from "../pages/Game.jsx";

export const BoardContext = createContext();

export const BoardProvider = ({ children, puzzleUrl }) => {
  const [currentBoardIndex, setCurrentBoardIndex] = useState(
    puzzles.findIndex((puzzle) => puzzle.url === puzzleUrl)
  );
  const [board, setBoard] = useState(puzzles[currentBoardIndex].board);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [moveCount, setMoveCount] = useRecoilState(moveCountState);

  useEffect(() => {
    const selectedPuzzle = puzzles.find((puzzle) => puzzle.url === puzzleUrl);
    setCurrentBoardIndex(puzzles.indexOf(selectedPuzzle));
    setBoard(selectedPuzzle.board);
    setRedirectUrl(null);
  }, [puzzleUrl]);

  const resetBoard = () => {
    setBoard(puzzles[currentBoardIndex].board);
    setMoveCount(0);
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

  const getBuyLink = () => puzzles[currentBoardIndex].puzzleLink;

  const getMetaDescription = () => puzzles[currentBoardIndex].metaDescription;

  const getSolution = () => puzzles[currentBoardIndex].solution;

  const getDesigner = () => puzzles[currentBoardIndex].desginer;

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
        getBuyLink,
        getMetaDescription,
        getSolution,
        getDesigner,
      }}
    >
      {redirectUrl && <Navigate to={"/" + redirectUrl} replace />}
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContext;
