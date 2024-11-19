import { useContext } from "react";
import BoardContext from "../context/BoardContext";

export const usePuzzleNavigation = (setBoardContainerStyle, style) => {
  const { getNextPuzzle, getPreviousPuzzle } = useContext(BoardContext);
  const loadNextPuzzle = () => {
    setBoardContainerStyle(style.fadeOut);
    //Allow time for fade out animation
    setTimeout(() => {
      getNextPuzzle();
    }, 300);

    setTimeout(() => {
      setBoardContainerStyle(style.fadeIn);
    }, 500);
  };

  const loadPreviousPuzzle = () => {
    setBoardContainerStyle(style.fadeOut);
    //Allow time for fade out animation
    setTimeout(() => {
      getPreviousPuzzle();
    }, 300);

    setTimeout(() => {
      setBoardContainerStyle(style.fadeIn);
    }, 500);
  };

  return { loadNextPuzzle, loadPreviousPuzzle };
};
