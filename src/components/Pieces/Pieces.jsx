import React, { useContext } from "react";
import Piece from "../Piece";
import BoardContext from "../../context/BoardContext";

const Pieces = ({ size }) => {
  const { board } = useContext(BoardContext);
  let currentRow = 0;
  let id = 1;
  let pieces = [];
  let zIndex = 100;

  board.forEach((row) => {
    row.forEach((tile, index) => {
      if (!tile || tile.includes("-")) return;
      const pieceObject = {
        xpos: index,
        ypos: currentRow,
        piece: tile,
        zIndex: zIndex,
        id: id,
      };
      pieces.push(pieceObject);
      zIndex++;
      id++;
    });
    currentRow++;
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
        ></Piece>
      ))}
    </div>
  );
};

export default Pieces;
