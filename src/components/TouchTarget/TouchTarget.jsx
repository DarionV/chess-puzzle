import { useContext, useState } from "react";
import style from "./TouchTarget.module.css";
import BoardContext from "../../context/BoardContext";
import useHasValidMove from "../../hooks/useHasValidMove";
import useMakeMove from "../../hooks/useMakeMove";
import useGetPiece from "../../hooks/useGetPiece";
import { atom, useRecoilState } from "recoil";

// The function of the TouchTarget is to act as a button or selector for the tiles.
// Each TouchTarget is overlayed on top of each tile.
// When clicked, it evaluated if there is a legal move available for that piece.

export const madeMoveState = atom({
  key: "madeMove",
  default: false,
});

const TouchTarget = ({ size, yPos, xPos, pieces, setHighlightedPieceId }) => {
  const { board, setBoard } = useContext(BoardContext);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const hasValidMove = useHasValidMove();
  const makeMove = useMakeMove();
  const getPiece = useGetPiece();
  const [madeMove, setMadeMove] = useRecoilState(madeMoveState);

  //To center piece in tile properly, adjusted manually.
  const topOffset = size * 0.19;
  const leftOffset =
    size * 0.26 - (board[0].length - board.length) * (size / 6);

  const handleClick = () => {
    const piece = getPiece(yPos, xPos);

    if (hasValidMove(piece)) {
      setMadeMove(true);
      setTimeout(() => {
        makeMove(piece);
        setMadeMove(false);
      }, 50);
    }
  };

  const highlightPiece = () => {
    const piece = getPiece(yPos, xPos);
    const targetedPiece = pieces.filter(
      (piece) => piece.xpos === xPos && piece.ypos === yPos
    );
    if (targetedPiece[0] === undefined || !hasValidMove(piece)) return;

    setHighlightedPieceId(targetedPiece[0].id);
    setIsHighlighted(true);
  };

  const unHighlightPiece = () => {
    setHighlightedPieceId("");
    setIsHighlighted(false);
  };

  return (
    <button
      onClick={handleClick}
      className={style.touchTarget}
      style={{
        cursor: isHighlighted ? "pointer" : "default",
        width: size * 0.48,
        height: size * 0.48,
        position: "absolute",
        top: `${xPos * 0.21 * size + yPos * 0.21 * size + topOffset}px`,
        left: `${
          xPos * 0.36 * size + yPos * -0.36 * size - size / 2 + leftOffset
        }px`,
      }}
      onMouseEnter={highlightPiece}
      onMouseLeave={unHighlightPiece}
    ></button>
  );
};

export default TouchTarget;
