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
          size={size * 1.2}
          yPos={tile.ypos}
          xPos={tile.xpos}
          color={tile.color}
          key={index}
        ></Piece>
      ))}
    </div>
  );
};

export default Pieces;

// switch (tile) {
//     case "P":
//       console.log("Pawn");
//       break;
//     case "N":
//       console.log("Knight");
//       break;
//     case "B":
//       console.log("Bishop");
//       break;
//     case "R":
//       console.log("Rook");
//       break;
//     case "Q":
//       console.log("Queen");
//       break;
//     case "K":
//       console.log("King");
//       break;
//     default:
//       console.log("No piece found");
//   }
