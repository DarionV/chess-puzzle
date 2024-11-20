import React, { useState } from "react";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";
import { useParams } from "react-router";
import MoveCountProvider from "../context/MoveCountContext";
import AboutModal from "../components/AboutModal/AboutModal";

const Game = () => {
  const tileSize = useTileSize();
  const { puzzleId } = useParams();
  const [opened, setOpened] = useState(false);
  const toggleAbout = () => setOpened(!opened);

  return (
    <MoveCountProvider>
      <BoardProvider puzzleUrl={puzzleId}>
        <Header toggleAbout={toggleAbout} />
        <AboutModal opened={opened} toggleAbout={toggleAbout} />
        <Board size={tileSize} />
      </BoardProvider>
    </MoveCountProvider>
  );
};

export default Game;
