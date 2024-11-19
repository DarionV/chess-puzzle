import { useContext } from "react";
import style from "./TouchTarget.module.css";
import BoardContext from "../../context/BoardContext";
import { useMoveCount } from "../../context/MoveCountContext";

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

  // Input x and y and retrieve the tile in that position.
  // Pieces close to the edge will try to retrieve tiles outside of the board
  // when checking for legal moves. The if clause checks for those cases.
  const getTile = (board, yPos, xPos) => {
    if (
      xPos < 0 ||
      yPos < 0 ||
      xPos > board[0].length - 1 || //array is even in size. 5x5, 7x7 etc. So checking length of 1st row is sufficient.
      yPos > board.length - 1 ||
      board[yPos][xPos] == null // check for "holes" in the board
    )
      return "X"; //Prevent moves outside of board
    return board[yPos][xPos];
  };

  const getEmptyTile = () => {
    let position = [];
    board.forEach((row, yPos) => {
      row.forEach((tile, xPos) => {
        if (!tile) return;
        if (tile.includes("-")) {
          position = [yPos, xPos];
        }
      });
    });
    return position;
  };

  const checkValidMove = (piece) => {
    if (piece.includes("-")) return;

    if (piece.includes("P")) {
      return getTile(board, yPos, xPos - 1).includes("-");
    } else if (piece.includes("B")) {
      return (
        getTile(board, yPos + 1, xPos - 1).includes("-") ||
        getTile(board, yPos - 1, xPos + 1).includes("-") ||
        getTile(board, yPos - 1, xPos - 1).includes("-") ||
        getTile(board, yPos + 1, xPos + 1).includes("-")
      );
    } else if (piece.includes("N")) {
      return (
        getTile(board, yPos - 2, xPos - 1).includes("-") ||
        getTile(board, yPos - 2, xPos + 1).includes("-") ||
        getTile(board, yPos + 2, xPos - 1).includes("-") ||
        getTile(board, yPos + 2, xPos + 1).includes("-") ||
        getTile(board, yPos - 1, xPos - 2).includes("-") ||
        getTile(board, yPos - 1, xPos + 2).includes("-") ||
        getTile(board, yPos + 1, xPos - 2).includes("-") ||
        getTile(board, yPos + 1, xPos + 2).includes("-")
      );
    } else if (piece.includes("R") || piece.includes("K")) {
      return (
        getTile(board, yPos - 1, xPos).includes("-") ||
        getTile(board, yPos + 1, xPos).includes("-") ||
        getTile(board, yPos, xPos - 1).includes("-") ||
        getTile(board, yPos, xPos + 1).includes("-")
      );
    } else if (piece.includes("Q")) {
      return (
        getTile(board, yPos - 1, xPos).includes("-") ||
        getTile(board, yPos + 1, xPos).includes("-") ||
        getTile(board, yPos, xPos - 1).includes("-") ||
        getTile(board, yPos, xPos + 1).includes("-") ||
        getTile(board, yPos + 1, xPos - 1).includes("-") ||
        getTile(board, yPos - 1, xPos + 1).includes("-") ||
        getTile(board, yPos - 1, xPos - 1).includes("-") ||
        getTile(board, yPos + 1, xPos + 1).includes("-")
      );
    } else {
      console.log("No valid piece found");
    }
  };

  const makeMove = (piece) => {
    // Check if hero piece
    let isHero = piece.includes("H");

    //Check if dark piece
    let isDark = piece.includes("D");

    // Sometimes a tile can have extra info, eg. "RG" (Rook on a Goal tile)
    // We only want the abbreviation, in this case R. (Rook)
    let pieceAbbreviation = piece[0];

    let newBoard = board.map((row) => [...row]);
    const emptyTilePosition = getEmptyTile();

    //Sometimes the target square can have extra info, eg. "-G". (Empty Goal tile)
    // We want to replace only "-", and not "G".
    // If Hero piece, make sure to keep the "H"
    const newTileString = newBoard[emptyTilePosition[0]][
      emptyTilePosition[1]
    ].replace("-", isDark ? pieceAbbreviation + "D" : pieceAbbreviation);
    newBoard[emptyTilePosition[0]][emptyTilePosition[1]] = isHero
      ? newTileString + "H"
      : newTileString;

    // The same thing applies to the old tile.
    let oldTileString = newBoard[yPos][xPos].replace(pieceAbbreviation, "-");
    if (isHero) oldTileString = oldTileString.replace("H", "");
    if (isDark) oldTileString = oldTileString.replace("D", "");
    newBoard[yPos][xPos] = oldTileString;
    setBoard(newBoard);

    setMoveCount(moveCount + 1);
  };

  const handleClick = () => {
    const piece = getTile(board, yPos, xPos);
    if (checkValidMove(piece)) makeMove(piece);
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
