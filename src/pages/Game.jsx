import React from "react";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";
import { useParams } from "react-router";
import MoveCountProvider from "../context/MoveCountContext";

const Game = () => {
  const tileSize = useTileSize();

  const { puzzleId } = useParams();

  return (
    <MoveCountProvider>
      <BoardProvider puzzleUrl={puzzleId}>
        <Header />
        <Board size={tileSize} />
      </BoardProvider>
    </MoveCountProvider>
  );
};

export default Game;
