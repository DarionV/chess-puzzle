import React from "react";
import Board from "../components/Board/Board";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";
import { useParams } from "react-router";
import MoveCountProvider from "../context/MoveCountContext";

const Game = () => {
  const tileSize = useTileSize();

  const { puzzleId } = useParams();

  return (
    <BoardProvider puzzleUrl={puzzleId}>
      <MoveCountProvider>
        <Board size={tileSize} />
      </MoveCountProvider>
    </BoardProvider>
  );
};

export default Game;
