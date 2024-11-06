import React from "react";
import styles from "./Game.module.css";
import Board from "../components/Board/Board";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";

const Game = () => {
  const tileSize = useTileSize();

  return (
    <BoardProvider>
      <div className={styles.boardContainer}>
        <h1>Pawn = Queen</h1>
        <Board size={tileSize} />
      </div>
    </BoardProvider>
  );
};

export default Game;
