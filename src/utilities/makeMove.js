import { getEmptyTile } from "./getEmptyTile";

export const makeMove = (piece, board, yPos, xPos) => {
  // Check if hero piece
  let isHero = piece.includes("H");

  //Check if dark piece
  let isDark = piece.includes("D");

  // Sometimes a tile can have extra info, eg. "RG" (Rook on a Goal tile)
  // We only want the abbreviation, in this case R. (Rook)
  let pieceAbbreviation = piece[0];

  let newBoard = board.map((row) => [...row]);
  const emptyTilePosition = getEmptyTile(board);

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

  return newBoard;
};
