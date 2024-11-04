import React, { useState } from "react";
import style from "./TouchTarget.module.css";

const TouchTarget = ({ size, yPos, xPos, zIndex }) => {
  const topOffset = 87; //To center piece in tile properly
  const leftOffset = size * 0.15;
  //   const TOP_MARGIN_IN_PX = -size / topOffset + 80;

  return (
    <button
      className={style.touchTarget}
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
