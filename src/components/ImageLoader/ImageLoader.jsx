import React, { useState, useEffect } from "react";
import pawnWhite from "../../assets/images/pawn-white.png";
import pawnBlack from "../../assets/images/pawn-black.png";
import pawnRed from "../../assets/images/pawn-red.png";
import knightWhite from "../../assets/images/knight-white.png";
import knightBlack from "../../assets/images/knight-black.png";
import knightRed from "../../assets/images/knight-red.png";
import bishopWhite from "../../assets/images/bishop-white.png";
import bishopBlack from "../../assets/images/bishop-black.png";
import bishopRed from "../../assets/images/bishop-red.png";
import rookWhite from "../../assets/images/rook-white.png";
import rookBlack from "../../assets/images/rook-black.png";
import rookRed from "../../assets/images/rook-red.png";
import queenWhite from "../../assets/images/queen-white.png";
import queenBlack from "../../assets/images/queen-black.png";
import queenRed from "../../assets/images/queen-red.png";
import kingWhite from "../../assets/images/king-white.png";
import kingBlack from "../../assets/images/king-black.png";
import kingRed from "../../assets/images/king-red.png";

import style from "../Board/Board.module.css";

import { Loader } from "@mantine/core";

export const ImageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true); // Loader state

  const imageUrls = [
    pawnWhite,
    pawnBlack,
    pawnRed,
    knightWhite,
    knightBlack,
    knightRed,
    bishopWhite,
    bishopBlack,
    bishopRed,
    rookWhite,
    rookBlack,
    rookRed,
    queenWhite,
    queenBlack,
    queenRed,
    kingWhite,
    kingBlack,
    kingRed,
  ];

  useEffect(() => {
    const preloadImages = async () => {
      await Promise.all(
        imageUrls.map(
          (url) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = () => {
                resolve();
              };
              img.onerror = reject;
            })
        )
      );
      setLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <div className={style.container}>
      {loading && <Loader color="red" size="sm" />}
      {!loading && <div className={style.container}>{children}</div>}
    </div>
  );
};
