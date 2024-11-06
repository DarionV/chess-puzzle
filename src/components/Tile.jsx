import React from "react";

const Tile = ({ tileSize, yPos, xPos, color, highlighted }) => {
  const TOP_MARGIN_IN_PX = 80;
  return (
    <img
      src={color}
      width={`${tileSize}px`}
      height={`${tileSize}px`}
      style={{
        transform: highlighted ? "translateY(-3px)" : "",
        position: "absolute",
        top: `${
          xPos * 0.25 * tileSize + yPos * 0.25 * tileSize + TOP_MARGIN_IN_PX
        }px`,
        left: `${
          xPos * 0.43 * tileSize + yPos * -0.43 * tileSize - tileSize / 2
        }px`,
      }}
    ></img>
  );
};

export default Tile;
