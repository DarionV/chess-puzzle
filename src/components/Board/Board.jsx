import React from "react";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white.png";
import tileBlack from "../../assets/images/tile-black.png";
import tileRed from "../../assets/images/tile-red.png";

const Board = () => {
  const board = [
    ["empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", null],
    ["empty", "empty", "empty", null],
    ["empty", "empty", "empty", "empty red"],
  ];

  let currentRow = 0;
  let tiles = [];
  let color;

  const TILE_HEIGHT_IN_PX = 124;
  const TILE_WIDTH_IN_PX = 160;

  board.forEach((row) => {
    currentRow % 2 === 0 ? (color = tileWhite) : (color = tileBlack);

    row.forEach((tile, index) => {
      if (!tile) return;
      if (tile.includes("red")) color = tileRed;
      const tileObject = { xpos: index, ypos: currentRow, color: color };
      tiles.push(tileObject);

      color === tileBlack ? (color = tileWhite) : (color = tileBlack);
    });
    currentRow++;
  });

  console.log(tiles);

  return (
    <div style={{ position: "relative" }}>
      {tiles.map((tile, index) => (
        <img
          src={tile.color}
          width={`${TILE_WIDTH_IN_PX}px`}
          height={`${TILE_HEIGHT_IN_PX}px`}
          key={index}
          style={{
            position: "absolute",
            top: `${
              tile.xpos * 0.37 * TILE_HEIGHT_IN_PX +
              tile.ypos * 0.37 * TILE_HEIGHT_IN_PX
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
