import React, { useEffect, useState } from "react";

const useTileSize = () => {
  const [tileSize, setTileSize] = useState(200);
  const MAX_SIZE = 220;

  const handleResize = () => {
    const newSize = window.innerWidth / 5.5;
    setTileSize((prevSize) => (newSize > MAX_SIZE ? MAX_SIZE : newSize));
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return tileSize;
};

export default useTileSize;
