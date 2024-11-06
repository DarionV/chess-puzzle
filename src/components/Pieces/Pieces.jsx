import React, { useContext, useEffect, useState } from "react";
import Piece from "../Piece";
import BoardContext from "../../context/BoardContext";
import TouchTargets from "../TouchTargets/TouchTargets";
import Board from "../Board/Board";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white-3.png";
import tileBlack from "../../assets/images/tile-black-2.png";
import tileRed from "../../assets/images/tile-red.png";

const Pieces = ({ size }) => {
  const { board } = useContext(BoardContext);
  const [highlightedPieceId, setHighlightedPieceId] = useState(null);
  const [highlightedTileId, setHighlightedTileId] = useState(null);

  let currentRow = 0;
  let pieces = [];
  let tiles = [];
  let color;
  let zIndex = 100;

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
        zIndex: zIndex,
        id: `${rowIndex}${index}`,
      };
      pieces.push(pieceObject);
      zIndex++;
      // id++;
    });
    // currentRow++;
    // console.log(pieces);
  });

  board.forEach((row, rowIndex) => {
    // Alternate starting color for each row
    currentRow % 2 === 0 ? (color = tileWhite) : (color = tileBlack);

    row.forEach((tile, index) => {
      if (!tile) {
        getColor(); //Alternate color even though there is no tile
        return;
      }
      const tileObject = {
        xpos: index,
        ypos: currentRow,
        color: getColor(tile),
        id: `${rowIndex}${index}`,
      };
      tiles.push(tileObject);
    });
    currentRow++;
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
      {pieces.map((tile, index) => (
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
    </div>
  );
};

export default Pieces;
