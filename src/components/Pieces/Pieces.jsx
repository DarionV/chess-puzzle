import React from "react";
import Piece from "../Piece";

const Pieces = ({ boardArray, size }) => {
  let currentRow = 0;
  let pieces = [];

  boardArray.forEach((row) => {
    row.forEach((tile, index) => {
      if (!tile || tile.includes("-")) return;
      const pieceObject = {
        xpos: index,
        ypos: currentRow,
        piece: tile,
      };
      pieces.push(pieceObject);
    });
    currentRow++;
    // console.log(pieces);
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
          key={index}
        ></Piece>
      ))}
    </div>
  );
};

export default Pieces;
