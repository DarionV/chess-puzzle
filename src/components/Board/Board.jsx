import React, { useContext, useEffect, useState } from "react";
import style from "./Board.module.css";
import BoardContext from "../../context/BoardContext";
import TouchTargets from "../TouchTargets/TouchTargets";
import PromoteModal from "../PromoteModal/PromoteModal";
import WinModal from "../WinModal/WinModal";
import ArrowButton from "../ArrowButton/ArrowButton";
import AnimatedHeading from "../AnimatedHeading/AnimatedHeading.jsx";
import { Helmet } from "react-helmet";
import { ImageLoader } from "../ImageLoader/ImageLoader.jsx";
import InstructionsModal from "../InstructionsModal/InstructionsModal.jsx";
import useGoalTiles from "../../hooks/useGoalTiles.jsx";
import Pieces from "../Pieces/Pieces.jsx";
import Tiles from "../Tiles/Tiles.jsx";

const Board = () => {
  const {
    board,
    getTitle,
    getNextPuzzle,
    getPreviousPuzzle,
    getMetaDescription,
    getSolution,
  } = useContext(BoardContext);

  const [highlightedPieceId, setHighlightedPieceId] = useState(null);
  const [isPuzzleCompleted, setIsPuzzleCompleted] = useState(false);
  const [pieces, setPieces] = useState([]);

  // Retrieve the tiles which to check for winning conditions.
  let goalTiles = useGoalTiles();
  let nrOfGoals = goalTiles.length;

  useEffect(() => {
    let nrOfGoalsCompleted = 0;
    const solution = getSolution();
    goalTiles.forEach((tile) => {
      if (board[tile[0]][tile[1]].includes(solution[tile[0]][tile[1]]))
        nrOfGoalsCompleted++;
    });
    if (nrOfGoalsCompleted === nrOfGoals) setIsPuzzleCompleted(true);
  }, [board]);

  const [boardContainerStyle, setBoardContainerStyle] = useState("");

  function loadNextPuzzle() {
    setBoardContainerStyle(style.fadeOut);
    //Allow time for fade out animation
    setTimeout(() => {
      getNextPuzzle();
    }, 300);

    setTimeout(() => {
      setBoardContainerStyle(style.fadeIn);
    }, 500);
  }

  function loadPreviousPuzzle() {
    setBoardContainerStyle(style.fadeOut);
    //Allow time for fade out animation
    setTimeout(() => {
      getPreviousPuzzle();
    }, 300);

    setTimeout(() => {
      setBoardContainerStyle(style.fadeIn);
    }, 500);
  }

  return (
    <ImageLoader>
      <Helmet>
        <title>{getTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
      </Helmet>
      <AnimatedHeading heading={getTitle()} />
      <InstructionsModal />
      <div className={style.gameContainer}>
        <ArrowButton handleClick={loadPreviousPuzzle} direction="left" />
        <div className={`${style.boardContainer} ${boardContainerStyle}`}>
          <div className={style.centeringContainer}>
            <Tiles highlightedPieceId={highlightedPieceId} pieces={pieces} />
            <Pieces
              highlightedPieceId={highlightedPieceId}
              setPieces={setPieces}
            />
            <TouchTargets
              pieces={pieces}
              setHighlightedPieceId={setHighlightedPieceId}
            ></TouchTargets>
            <PromoteModal />
            {isPuzzleCompleted ? (
              <WinModal setIsPuzzleCompleted={setIsPuzzleCompleted} />
            ) : null}
          </div>
        </div>
        <ArrowButton handleClick={loadNextPuzzle} />
      </div>
    </ImageLoader>
  );
};

export default Board;
