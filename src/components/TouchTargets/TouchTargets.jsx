import React from "react";
import TouchTarget from "../TouchTarget/TouchTarget";

const TouchTargets = ({ board, size }) => {
  let currentRow = 0;
  let targets = [];
  let zIndex = 100;

  board.forEach((row) => {
    row.forEach((tile, index) => {
      if (!tile) return;
      const targetObject = {
        xpos: index,
        ypos: currentRow,
        piece: tile,
        zIndex: zIndex,
      };
      targets.push(targetObject);
      zIndex++;
    });
    currentRow++;
    console.log(targets);
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
          color={tile.color}
          piece={tile.piece}
          key={index}
          zIndex={zIndex}
        ></TouchTarget>
      ))}
    </div>
  );
};

export default TouchTargets;
