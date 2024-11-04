import React from "react";
import Board from "../components/Board/Board";
import styles from "./Game.module.css";
import Pieces from "../components/Pieces/Pieces";
import TouchTargets from "../components/TouchTargets/TouchTargets";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";

const Game = () => {
  const tileSize = useTileSize();

  return (
    <BoardProvider>
      <div className={styles.boardContainer}>
        <h1>Pawn = Queen</h1>
        <Board size={tileSize} />
        <Pieces size={tileSize} />
        <TouchTargets size={tileSize}></TouchTargets>
      </div>
    </BoardProvider>
  );
};

export default Game;
