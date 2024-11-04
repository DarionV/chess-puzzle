import React from "react";

const Tile = ({ tileSize, yPos, xPos, color }) => {
  const TOP_MARGIN_IN_PX = 0;
  return (
    <img
      src={color}
      width={`${tileSize}px`}
      height={`${tileSize}px`}
      style={{
        position: "absolute",
        top: `${
          xPos * 0.29 * tileSize + yPos * 0.29 * tileSize + TOP_MARGIN_IN_PX
        }px`,
        left: `${
          xPos * 0.5 * tileSize + yPos * -0.5 * tileSize - tileSize / 2
        }px`,
      }}
    ></img>
  );
};

export default Tile;
