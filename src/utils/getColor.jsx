import tileRed from "../assets/images/tile-red.png";

export const getColor = (color, tileWhite, tileBlack, tile = "") => {
  color === tileBlack ? (color = tileWhite) : (color = tileBlack);
  return tile.includes("red") ? tileRed : color;
};
