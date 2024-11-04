import React, { useContext } from "react";
import Piece from "../Piece";
import BoardContext from "../../context/BoardContext";

const Pieces = ({ size }) => {
  const { board } = useContext(BoardContext);
  let currentRow = 0;
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
      };
      pieces.push(pieceObject);
      zIndex++;
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
          key={index}
          zIndex={zIndex}
        ></Piece>
      ))}
    </div>
  );
};

export default Pieces;
