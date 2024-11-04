import React from "react";
import Tile from "../Tile";
import tileWhite from "../../assets/images/tile-white.png";
import tileBlack from "../../assets/images/tile-black.png";
import tileRed from "../../assets/images/tile-red.png";

const Board = ({ boardArray, size }) => {
  let currentRow = 0;
  let tiles = [];
  let color;

  const getColor = (tile = "") => {
    color === tileBlack ? (color = tileWhite) : (color = tileBlack);
    if (tile.includes("red")) return tileRed;
    return color;
  };

  boardArray.forEach((row) => {
    // Alternate starting color for each row
    currentRow % 2 === 0 ? (color = tileWhite) : (color = tileBlack);

    row.forEach((tile, index) => {
      if (!tile) {
        getColor(); //Alternate color even though there is no tile
        return;
      }
      const tileObject = {
        xpos: index,
        ypos: currentRow,
        color: getColor(tile),
      };
      tiles.push(tileObject);
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
          tileSize={size}
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
