import React, { useContext } from "react";
import TouchTarget from "../TouchTarget/TouchTarget";
import BoardContext from "../../context/BoardContext";

const TouchTargets = ({ size }) => {
  const { board } = useContext(BoardContext);
  let currentRow = 0;
  let targets = [];

  board.forEach((row) => {
    row.forEach((tile, index) => {
      if (!tile) return;
      const targetObject = {
        xpos: index,
        ypos: currentRow,
        piece: tile,
      };
      targets.push(targetObject);
    });
    currentRow++;
  });

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {targets.map((tile, index) => (
        <TouchTarget
          size={size}
          yPos={tile.ypos}
          xPos={tile.xpos}
          key={index}
        ></TouchTarget>
      ))}
    </div>
  );
};

export default TouchTargets;
