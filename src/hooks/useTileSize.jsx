import React, { useEffect, useState } from "react";

const useTileSize = () => {
  const [tileSize, setTileSize] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300 || window.innerWidth <= 500) {
        return;
      }
      setTileSize(window.innerWidth / 5.5);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return tileSize;
};

export default useTileSize;
