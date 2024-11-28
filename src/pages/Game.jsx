import React, { useState } from "react";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import useTileSize from "../hooks/useTileSize";
import { BoardProvider } from "../context/BoardContext";
import { useParams } from "react-router";
import AboutModal from "../components/AboutModal/AboutModal";
import { atom } from "recoil";
import Footer from "../components/Footer/Footer";

export const moveCountState = atom({
  key: "moveCount",
  default: 0,
});

const Game = () => {
  const tileSize = useTileSize();
  const { puzzleId } = useParams();
  const [opened, setOpened] = useState(false);
  const toggleAbout = () => setOpened(!opened);

  return (
    <BoardProvider puzzleUrl={puzzleId}>
      <Header toggleAbout={toggleAbout} />
      <AboutModal opened={opened} toggleAbout={toggleAbout} />
      <Board size={tileSize} />
      <Footer />
    </BoardProvider>
  );
};

export default Game;
