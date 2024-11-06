import React, { useContext, useEffect, useState } from "react";
import Piece from "../Piece";
import BoardContext from "../../context/BoardContext";
import TouchTargets from "../TouchTargets/TouchTargets";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white-4.png";
import tileBlack from "../../assets/images/tile-black-3.png";
import tileRed from "../../assets/images/tile-red.png";
import PromoteModal from "../PromoteModal/PromoteModal";

const Board = ({ size }) => {
  const { board } = useContext(BoardContext);
  const [highlightedPieceId, setHighlightedPieceId] = useState(null);
  const [showPromoteModal, setShowPromoteModal] = useState(false);

  let pieces = [];
  let tiles = [];
  let color;

  // Check for pawn promotions
  useEffect(() => {
    board.forEach((row) => {
      if (row[0] === "P") togglePromoteModal();
    });
  }, [board]);

  function togglePromoteModal() {
    setShowPromoteModal(!showPromoteModal);
  }

  function promotePawn(piece) {
    let rowIndex; //Row that the pawn is located at
    board.forEach((row, index) => {
      if (row[0] === "P") {
        rowIndex = index;
      }
    });
    let newBoard = [...board];

    switch (piece) {
      case "R":
        newBoard[rowIndex][0] = "R";
        break;
      case "N":
        newBoard[rowIndex][0] = "N";
        break;
      case "B":
        newBoard[rowIndex][0] = "B";
        break;
      case "Q":
        newBoard[rowIndex][0] = "Q";
        break;

      default:
        break;
    }

    togglePromoteModal();
  }

  const getColor = (tile = "") => {
    color === tileBlack ? (color = tileWhite) : (color = tileBlack);
    if (tile.includes("red")) return tileRed;
    return color;
  };

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
    <div
      style={{
        position: "relative",
      }}
    >
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
    </div>
  );
};

export default Board;
