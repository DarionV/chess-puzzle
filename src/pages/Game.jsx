import React from "react";
import Board from "../components/Board/Board";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";
import { useParams } from "react-router";

const Game = () => {
  const tileSize = useTileSize();

  const { puzzleId } = useParams();

  return (
    <BoardProvider puzzleUrl={puzzleId}>
      <Board size={tileSize} />
    </BoardProvider>
  );
};

export default Game;
