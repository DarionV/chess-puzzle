import React, { useContext, useState } from "react";
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
import Pieces from "../Pieces/Pieces.jsx";
import Tiles from "../Tiles/Tiles.jsx";
import useCheckForWins from "../../hooks/useCheckForWins.jsx";
import { usePuzzleNavigation } from "../../hooks/usePuzzleNavigation.jsx";

const Board = () => {
  const { getTitle, getMetaDescription } = useContext(BoardContext);
  const [highlightedPieceId, setHighlightedPieceId] = useState(null);
  const [pieces, setPieces] = useState([]);
  const isSolved = useCheckForWins();
  const [boardContainerStyle, setBoardContainerStyle] = useState("");
  const { loadNextPuzzle, loadPreviousPuzzle } = usePuzzleNavigation(
    setBoardContainerStyle,
    style
  );

  return (
    <ImageLoader>
      <Helmet>
        <title>Royal Riddles | {getTitle()}</title>
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
            {isSolved ? <WinModal loadNextPuzzle={loadNextPuzzle} /> : null}
          </div>
        </div>
        <ArrowButton handleClick={loadNextPuzzle} />
      </div>
    </ImageLoader>
  );
};

export default Board;
