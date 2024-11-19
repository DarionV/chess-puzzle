import React, { useContext, useEffect, useState } from "react";
import style from "./Board.module.css";
import Piece from "../Piece/Piece.jsx";
import BoardContext from "../../context/BoardContext";
import TouchTargets from "../TouchTargets/TouchTargets";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white.png";
import tileBlack from "../../assets/images/tile-black.png";
import tileRed from "../../assets/images/tile-red.png";
import PromoteModal from "../PromoteModal/PromoteModal";
import WinModal from "../WinModal/WinModal";
import ArrowButton from "../ArrowButton/ArrowButton";
import AnimatedHeading from "../AnimatedHeading/AnimatedHeading.jsx";
import { Helmet } from "react-helmet";
import { ImageLoader } from "../ImageLoader/ImageLoader.jsx";
import InstructionsModal from "../InstructionsModal/InstructionsModal.jsx";
import useGoalTiles from "../../hooks/useGoalTiles.jsx";

const Board = ({ size }) => {
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

  let pieces = [];
  let tiles = [];
  let color;

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

  // Used for alternating tile colors when rendering out the tiles.
  const getColor = (tile = "") => {
    color === tileBlack ? (color = tileWhite) : (color = tileBlack);
    if (tile.includes("G")) return tileRed;
    return color;
  };

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

  // Add pieces to be rendered
  board.forEach((row, rowIndex) => {
    row.forEach((tile, index) => {
      if (!tile || tile.includes("-")) return;
      const pieceObject = {
        xpos: index,
        ypos: rowIndex,
        piece: tile,
        id: `${rowIndex}${index}`,
      };
      pieces.push(pieceObject);
    });
  });

  // Add tiles to be rendered
  board.forEach((row, rowIndex) => {
    // Alternate starting color for each row
    rowIndex % 2 === 0 ? (color = tileWhite) : (color = tileBlack);

    row.forEach((tile, index) => {
      if (!tile) {
        getColor(); //Alternate color even though there is no tile
        return;
      }
      const tileObject = {
        xpos: index,
        ypos: rowIndex,
        color: getColor(tile),
        id: `${rowIndex}${index}`,
      };
      tiles.push(tileObject);
    });
  });

  return (
    <ImageLoader>
      <Helmet>
        <title>{getTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
      </Helmet>
      <AnimatedHeading heading={getTitle()} />
      <InstructionsModal />
      {/* <p>{getInfo()}</p> */}
      <div className={style.gameContainer}>
        <ArrowButton handleClick={loadPreviousPuzzle} direction="left" />
        <div className={`${style.boardContainer} ${boardContainerStyle}`}>
          <div className={style.centeringContainer}>
            {tiles.map((tile) => (
              <Tile
                tileSize={size}
                yPos={tile.ypos}
                xPos={tile.xpos}
                color={tile.color}
                key={tile.id}
                highlighted={tile.id === highlightedPieceId}
              ></Tile>
            ))}
            {pieces.map((tile) => (
              <Piece
                size={size}
                yPos={tile.ypos}
                xPos={tile.xpos}
                piece={tile.piece}
                key={tile.id}
                highlighted={tile.id === highlightedPieceId}
              ></Piece>
            ))}
            <TouchTargets
              size={size}
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
