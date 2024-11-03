import React from "react";
import Board from "../components/Board/Board";

const Game = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Pawn = Queen</h1>
      <Board />
    </div>
  );
};

export default Game;
