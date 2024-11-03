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

  const TILE_HEIGHT_IN_PX = 160;
  const TILE_WIDTH_IN_PX = 160;

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
          width={`${TILE_WIDTH_IN_PX}px`}
          height={`${TILE_HEIGHT_IN_PX}px`}
          key={index}
          style={{
            position: "absolute",
            top: `${
              (tile.xpos * 1 * TILE_HEIGHT_IN_PX) / 2.7 +
              (tile.ypos * 1 * TILE_HEIGHT_IN_PX) / 2.7
            }px`,
            left: `${
              tile.xpos * 0.5 * TILE_WIDTH_IN_PX +
              tile.ypos * -0.5 * TILE_WIDTH_IN_PX
            }px`,
            zIndex: { index },
          }}
        ></img>
      ))}
    </div>
  );
};

export default Board;
