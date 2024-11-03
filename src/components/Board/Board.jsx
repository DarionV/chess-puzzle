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

  const TILE_SIZE_IN_PX = 160;
  const TOP_MARGIN_IN_PX = 100;

  board.forEach((row) => {
    currentRow % 2 === 0 ? (color = tileBlack) : (color = tileWhite);

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
    <div
      style={{
        position: "relative",
        border: "5px solid red",
        width: "1px",
      }}
    >
      {tiles.map((tile, index) => (
        <img
          src={tile.color}
          width={`${TILE_SIZE_IN_PX}px`}
          height={`${TILE_SIZE_IN_PX}px`}
          key={index}
          style={{
            position: "absolute",
            top: `${
              tile.xpos * 0.29 * TILE_SIZE_IN_PX +
              tile.ypos * 0.29 * TILE_SIZE_IN_PX +
              TOP_MARGIN_IN_PX
            }px`,
            left: `${
              tile.xpos * 0.5 * TILE_SIZE_IN_PX +
              tile.ypos * -0.5 * TILE_SIZE_IN_PX -
              TILE_SIZE_IN_PX / 2
            }px`,
            zIndex: { index },
          }}
        ></img>
      ))}
    </div>
  );
};

export default Board;
