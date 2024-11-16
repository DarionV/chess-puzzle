import React, { useState } from "react";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";
import { useParams } from "react-router";
import MoveCountProvider from "../context/MoveCountContext";
import AboutModal from "../components/AboutModal/AboutModal";
import { ImageLoader } from "../components/ImageLoader/ImageLoader";

const Game = () => {
  const tileSize = useTileSize();
  const { puzzleId } = useParams();
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <MoveCountProvider>
      <BoardProvider puzzleUrl={puzzleId}>
        <Header toggleAbout={toggleAbout} />
        {showAbout ? <AboutModal toggleAbout={toggleAbout} /> : null}
        <Board size={tileSize} />
      </BoardProvider>
    </MoveCountProvider>
  );
};

export default Game;
