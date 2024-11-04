import style from "./TouchTarget.module.css";

const TouchTarget = ({ size, yPos, xPos }) => {
  //To center piece in tile properly
  const topOffset = 87;
  const leftOffset = size * 0.15;

  return (
    <button
      onClick={() => {
        alert("y: " + yPos + " x: " + xPos);
      }}
      className={style.touchTarget} //remove this later
      style={{
        width: size * 0.7,
        height: size * 0.7,
        position: "absolute",
        top: `${xPos * 0.29 * size + yPos * 0.29 * size + topOffset}px`,
        left: `${
          xPos * 0.5 * size + yPos * -0.5 * size - size / 2 + leftOffset
        }px`,
      }}
    ></button>
  );
};

export default TouchTarget;
