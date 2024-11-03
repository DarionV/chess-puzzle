import React from "react";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white.png";
import tileBlack from "../../assets/images/tile-black.png";
import tileRed from "../../assets/images/tile-red.png";

const Board = ({ boardArray }) => {
  let currentRow = 0;
  let tiles = [];
  let color;

  const TILE_SIZE_IN_PX = 160;

  boardArray.forEach((row) => {
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

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {tiles.map((tile, index) => (
        <Tile
          tileSize={TILE_SIZE_IN_PX}
          yPos={tile.ypos}
          xPos={tile.xpos}
          color={tile.color}
          key={index}
        ></Tile>
      ))}
    </div>
  );
};

export default Board;
