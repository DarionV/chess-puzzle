import React, { useContext } from "react";
import BoardContext from "../context/BoardContext";

const Tile = ({ tileSize, yPos, xPos, color, highlighted }) => {
  const { board } = useContext(BoardContext);
  let leftOffset;

  const isEmptyTile = board[yPos][xPos].includes("-");

  leftOffset = (board[0].length - board.length) * (tileSize / 6);

  return (
    <img
      src={color}
      width={`${tileSize}px`}
      height={`${tileSize}px`}
      style={{
        transform: highlighted
          ? "translateY(-3px)"
          : isEmptyTile
          ? "translateY(-3px)"
          : "",
        position: "absolute",
        top: `${xPos * 0.21 * tileSize + yPos * 0.21 * tileSize}px`,
        left: `${
          xPos * 0.36 * tileSize +
          yPos * -0.36 * tileSize -
          tileSize / 2 -
          leftOffset
        }px`,
      }}
    ></img>
  );
};

export default Tile;
