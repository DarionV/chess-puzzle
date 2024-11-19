import React from "react";
import { useContext } from "react";
import BoardContext from "../../context/BoardContext";
import Piece from "../Piece/Piece";
import useTileSize from "../../hooks/useTileSize";
import { useEffect } from "react";
import { useMemo } from "react";

const Pieces = ({ highlightedPieceId, setPieces }) => {
  const { board } = useContext(BoardContext);
  const size = useTileSize();

  const pieces = useMemo(() => {
    const calculatedPieces = [];
    board.forEach((row, rowIndex) => {
      row.forEach((tile, index) => {
        if (!tile || tile.includes("-")) return;
        calculatedPieces.push({
          xpos: index,
          ypos: rowIndex,
          piece: tile,
          id: `${rowIndex}${index}`,
        });
      });
    });
    return calculatedPieces;
  }, [board]);

  useEffect(() => {
    setPieces(pieces);
  }, [pieces, setPieces]);

  return (
    <div>
      {pieces.map((tile) => (
        <Piece
          size={size}
          yPos={tile.ypos}
          xPos={tile.xpos}
          piece={tile.piece}
          key={tile.id}
          highlighted={tile.id === highlightedPieceId}
        ></Piece>
      ))}
    </div>
  );
};

export default Pieces;
