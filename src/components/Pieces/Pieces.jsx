import React, { useContext, useEffect, useState } from "react";
import Piece from "../Piece";
import BoardContext from "../../context/BoardContext";
import TouchTargets from "../TouchTargets/TouchTargets";

const Pieces = ({ size }) => {
  const { board } = useContext(BoardContext);
  const [highlightedPieceId, setHighlightedPieceId] = useState(null);

  let currentRow = 0;
  let pieces = [];
  let zIndex = 100;

  board.forEach((row, rowIndex) => {
    row.forEach((tile, index) => {
      if (!tile || tile.includes("-")) return;
      const pieceObject = {
        xpos: index,
        ypos: currentRow,
        piece: tile,
        zIndex: zIndex,
        id: `${rowIndex}${index}`,
      };
      pieces.push(pieceObject);
      zIndex++;
      // id++;
    });
    currentRow++;
    console.log(pieces);
  });

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {pieces.map((tile, index) => (
        <Piece
          size={size}
          yPos={tile.ypos}
          xPos={tile.xpos}
          color={tile.color}
          piece={tile.piece}
          key={tile.id}
          zIndex={zIndex}
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
