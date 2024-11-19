import React, { useContext } from "react";
import TouchTarget from "../TouchTarget/TouchTarget";
import BoardContext from "../../context/BoardContext";

const TouchTargets = ({ size, pieces, setHighlightedPieceId }) => {
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
    <div>
      {targets.map((tile, index) => (
        <TouchTarget
          size={size}
          yPos={tile.ypos}
          xPos={tile.xpos}
          key={index}
          pieces={pieces}
          setHighlightedPieceId={setHighlightedPieceId}
        ></TouchTarget>
      ))}
    </div>
  );
};

export default TouchTargets;
