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
        top: `${xPos * 0.25 * tileSize + yPos * 0.25 * tileSize + topMargin}px`,
        left: `${
          xPos * 0.43 * tileSize +
          yPos * -0.43 * tileSize -
          tileSize / 2 +
          leftMargin
        }px`,
      }}
    ></img>
  );
};

export default Tile;
