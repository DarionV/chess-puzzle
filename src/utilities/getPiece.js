export const getPiece = (board, yPos, xPos) => {
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
