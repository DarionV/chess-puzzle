import { useContext } from "react";
import style from "./TouchTarget.module.css";
import BoardContext from "../../context/BoardContext";
import { useMoveCount } from "../../context/MoveCountContext";
import { hasValidMove } from "../../utilities/hasValidMove";
import { getPiece } from "../../utilities/getPiece";
import { makeMove } from "../../utilities/makeMove";

// The function of the TouchTarget is to act as a button or selector for the tiles.
// Each TouchTarget is overlayed on top of each tile.
// When clicked, it evaluated if there is a legal move available for that piece.

const TouchTarget = ({ size, yPos, xPos, pieces, setHighlightedPieceId }) => {
  const { board, setBoard } = useContext(BoardContext);
  const { moveCount, setMoveCount } = useMoveCount();

  //To center piece in tile properly, adjusted manually.
  const topOffset = size * 0.19;
  const leftOffset =
    size * 0.26 - (board[0].length - board.length) * (size / 6);

  const handleClick = () => {
    const piece = getPiece(board, yPos, xPos);
    if (hasValidMove(piece, board, yPos, xPos)) {
      setBoard(makeMove(piece, board, yPos, xPos));
      setMoveCount(moveCount + 1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={style.touchTarget}
      style={{
        width: size * 0.48,
        height: size * 0.48,
        position: "absolute",
        top: `${xPos * 0.21 * size + yPos * 0.21 * size + topOffset}px`,
        left: `${
          xPos * 0.36 * size + yPos * -0.36 * size - size / 2 + leftOffset
        }px`,
      }}
      onMouseEnter={() => {
        const targetedPiece = pieces.filter(
          (piece) => piece.xpos === xPos && piece.ypos === yPos
        );
        if (targetedPiece[0] === undefined) return;
        setHighlightedPieceId(targetedPiece[0].id);
      }}
      onMouseLeave={() => {
        setHighlightedPieceId("");
      }}
    ></button>
  );
};

export default TouchTarget;
