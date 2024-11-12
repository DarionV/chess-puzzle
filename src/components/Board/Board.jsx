import React, { useContext, useEffect, useMemo, useState } from "react";
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
import { useMoveCount } from "../../context/MoveCountContext";

const Board = ({ size }) => {
  const {
    board,
    setBoard,
    getTitle,
    getInfo,
    getNextPuzzle,
    getPreviousPuzzle,
    getGoals,
  } = useContext(BoardContext);
  const initialBoardState = useMemo(() => {
    let initialBoardState = [];
    board.map((row) => initialBoardState.push(row));

    return initialBoardState;
  }, []);

  const [highlightedPieceId, setHighlightedPieceId] = useState(null);
  const [showPromoteModal, setShowPromoteModal] = useState(false);
  const [isPuzzleCompleted, setIsPuzzleCompleted] = useState(false);

  const { moveCount, setMoveCount } = useMoveCount();

  let pieces = [];
  let tiles = [];
  let color;

  // Check for pawn promotions, and for winning moves.
  useEffect(() => {
    board.forEach((row) => {
      if (row[0] && row[0].includes("P")) togglePromoteModal();
    });

    // Check if multiple goal tiles available in current puzzle
    if (getGoals()) {
      let goals = getGoals();

      let goal1 = goals[0];
      let goal2 = goals[1];
      console.log(board[goal1[0]][goal1[1]]);
      console.log(board[goal2[0]][goal2[1]]);
      if (
        board[goal1[0]][goal1[1]].includes("3") &&
        board[goal2[0]][goal2[1]].includes("4")
      ) {
        setIsPuzzleCompleted(true);
      }
    }
    if (!getGoals()) {
      board.forEach((row) => {
        row.forEach((tile) => {
          if (!tile) return;
          if (tile.includes("G") && tile.includes("H"))
            setIsPuzzleCompleted(true);
        });
      });
    }
  }, [board]);

  function togglePromoteModal() {
    setShowPromoteModal(!showPromoteModal);
  }

  function promotePawn(piece) {
    let rowIndex; //Row that the pawn is located at
    board.forEach((row, index) => {
      if (!row[0]) return;
      if (row[0].includes("P")) {
        rowIndex = index;
      }
    });
    let newBoard = [...board];
    let piecePosition = newBoard[rowIndex][0];

    switch (piece) {
      case "R":
        newBoard[rowIndex][0] = piecePosition.replace("P", "R");
        break;
      case "N":
        newBoard[rowIndex][0] = piecePosition.replace("P", "N");
        break;
      case "B":
        newBoard[rowIndex][0] = piecePosition.replace("P", "B");
        break;
      case "Q":
        newBoard[rowIndex][0] = piecePosition.replace("P", "Q");
        break;

      default:
        break;
    }

    togglePromoteModal();
  }

  const getColor = (tile = "") => {
    color === tileBlack ? (color = tileWhite) : (color = tileBlack);
    if (tile.includes("G")) return tileRed;
    return color;
  };
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
    <div className={style.container}>
      <h1>{getTitle()}</h1>
      <p>{getInfo()}</p>
      <div className={style.gameContainer}>
        <ArrowButton handleClick={getPreviousPuzzle} direction="left" />
        <div className={style.boardContainer}>
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
              setShowPromoteModal={setShowPromoteModal}
            ></TouchTargets>
            {showPromoteModal ? (
              <PromoteModal
                togglePromoteModal={togglePromoteModal}
                promotePawn={promotePawn}
              />
            ) : null}
            {isPuzzleCompleted ? (
              <WinModal setIsPuzzleCompleted={setIsPuzzleCompleted} />
            ) : null}
          </div>
        </div>
        <ArrowButton handleClick={getNextPuzzle} />
      </div>
    </div>
  );
};

export default Board;
