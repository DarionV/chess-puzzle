import { createContext, useContext, useState } from "react";

export const MoveCountContext = createContext(0);

const MoveCountProvider = ({ children }) => {
  const [moveCount, setMoveCount] = useState(0);

  return (
    <MoveCountContext.Provider value={{ moveCount, setMoveCount }}>
      {children}
    </MoveCountContext.Provider>
  );
};

export const useMoveCount = () => useContext(MoveCountContext);
export default MoveCountProvider;
