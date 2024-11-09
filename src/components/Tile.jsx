import React from "react";

const Tile = ({ tileSize, yPos, xPos, color, highlighted }) => {
  const topMargin = 0; //172
  const leftMargin = 0; //200
  return (
    <img
      src={color}
      width={`${tileSize}px`}
      height={`${tileSize}px`}
      style={{
        transform: highlighted ? "translateY(-3px)" : "",
        position: "absolute",
        top: `${xPos * 0.21 * tileSize + yPos * 0.21 * tileSize + topMargin}px`,
        left: `${
          xPos * 0.36 * tileSize +
          yPos * -0.36 * tileSize -
          tileSize / 2 +
          leftMargin
        }px`,
      }}
    ></img>
  );
};

export default Tile;
