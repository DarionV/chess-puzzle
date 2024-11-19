import React, { useContext, useState } from "react";
import useGoalTiles from "./useGoalTiles";
import BoardContext from "../context/BoardContext";
import { useEffect } from "react";

const useCheckForWins = () => {
  const { board, getSolution } = useContext(BoardContext);
  // Retrieve the tiles which to check for winning conditions.
  let goalTiles = useGoalTiles();
  let nrOfGoals = goalTiles.length;
  let [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    let nrOfGoalsCompleted = 0;
    const solution = getSolution();
    goalTiles.forEach((tile) => {
      if (board[tile[0]][tile[1]].includes(solution[tile[0]][tile[1]]))
        nrOfGoalsCompleted++;
    });
    setIsSolved(nrOfGoalsCompleted === nrOfGoals);
  }, [board]);

  return isSolved;
};

export default useCheckForWins;
