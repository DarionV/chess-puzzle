import React from "react";
import tileWhite from "..//assets/images/tile-white.png";

const Tile = ({ yPos, xPos }) => {
  return (
    <img
      src={tileWhite}
      width="160px"
      height="160px"
      key={colIndex}
      style={{
        position: "aboslute",
        top: `${xPos}px`,
        right: `${yPos}px`,
      }}
    ></img>
  );
};

export default Tile;
