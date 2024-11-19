import { useContext } from "react";
import BoardContext from "../context/BoardContext";

export default function useGoalTiles() {
  const { getSolution } = useContext(BoardContext);
  const solution = getSolution();

  let goalTiles = [];

  solution.forEach((row, rowIndex) => {
    if (!row) return;
    row.forEach((tile, tileIndex) => {
      if (!tile) return;
      goalTiles.push([rowIndex, tileIndex]);
    });
  });
  return goalTiles;
}
