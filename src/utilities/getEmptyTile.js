export const getEmptyTile = (board) => {
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
