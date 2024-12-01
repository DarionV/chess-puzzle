import React, { useContext, useEffect, useState } from "react";
import BoardContext from "../context/BoardContext";
import tileWhite from "../assets/images/tile-white.png";
import tileWhiteHover from "../assets/images/tile-white-hover.png";
import tileBlackHover from "../assets/images/tile-black-hover.png";
import tileBlack from "../assets/images/tile-black.png";
import tileRed from "../assets/images/tile-red.png";
import tileRedHover from "../assets/images/tile-red-hover.png";

const Tile = ({ tileSize, yPos, xPos, color, highlighted }) => {
  const { board } = useContext(BoardContext);
  const [imageSrc, setImageSrc] = useState("");
  let leftOffset;

  useEffect(() => {
    if (color === "red") setImageSrc(highlighted ? tileRedHover : tileRed);
    else if (color === "white")
      setImageSrc(highlighted ? tileWhiteHover : tileWhite);
    else if (color === "black")
      setImageSrc(highlighted ? tileBlackHover : tileBlack);
  }, [highlighted, color]);

  leftOffset = (board[0].length - board.length) * (tileSize / 6);

  return (
    <img
      src={imageSrc}
      width={`${tileSize}px`}
      height={`${tileSize}px`}
      style={{
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
