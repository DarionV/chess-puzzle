import React from "react";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white.png";

const Board = () => {
  const board = [
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", null],
    ["empty", "empty", "empty", null],
    ["empty", "empty", "empty", "empty"],
  ];

  let currentRow = 0;
  let tiles = [];

  board.forEach((row) => {
    row.forEach((tile, index) => {
      if (tile) {
        const tileObject = { xpos: index, ypos: currentRow };
        tiles.push(tileObject);
      }
    });
    currentRow++;
  });

  console.log(tiles);

  return (
    <div style={{ position: "relative" }}>
      {tiles.map((tile, index) => (
        <img
          src={tileWhite}
          width="160px"
          height="160px"
          key={index}
          style={{
            position: "absolute",
            top: `${tile.xpos * 1 * 60 + tile.ypos * 1 * 60}px`,
            left: `${tile.xpos * 0.5 * 160 + tile.ypos * -0.5 * 160}px`,
            zIndex: { index },
          }}
        ></img>
      ))}
    </div>
  );
};

export default Board;
