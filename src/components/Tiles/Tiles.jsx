import React from "react";
import { useContext } from "react";
import BoardContext from "../../context/BoardContext";
import useTileSize from "../../hooks/useTileSize";
import Tile from "../Tile";

const Tiles = ({ highlightedPieceId }) => {
  const { board } = useContext(BoardContext);
  const size = useTileSize();
  let tiles = [];
  let color;

  // Used for alternating tile colors when rendering out the tiles.
  const getColor = (tile = "") => {
    color === "black" ? (color = "white") : (color = "black");
    if (tile.includes("G")) color = "red";
    return color;
  };

  // Add tiles to be rendered
  board.forEach((row, rowIndex) => {
    // Alternate starting color for each row
    rowIndex % 2 === 0 ? (color = "white") : (color = "black");

    row.forEach((tile, index) => {
      if (!tile) {
        getColor(); //Alternate color even though there is no tile
        return;
      }
      const tileObject = {
        xpos: index,
        ypos: rowIndex,
        color: getColor(tile),
        id: `${rowIndex}${index}`,
      };
      tiles.push(tileObject);
    });
  });
  return (
    <div>
      {tiles.map((tile) => (
        <Tile
          tileSize={size}
          yPos={tile.ypos}
          xPos={tile.xpos}
          color={tile.color}
          key={tile.id}
          highlighted={tile.id === highlightedPieceId}
        ></Tile>
      ))}
    </div>
  );
};

export default Tiles;
