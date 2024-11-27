import React, { useEffect, useState } from "react";
import style from "./AnimatedHeading.module.css";

const AnimatedHeading = ({ heading }) => {
  const [oldHeading, setOldHeading] = useState(heading);
  const [animationClass, setAnimationClass] = useState(style.fadeIn);
  const TRANSITION_DURATION_IN_MS = 500;
  const root = document.documentElement;
  root.style.setProperty(
    "--transitionDuration",
    `${TRANSITION_DURATION_IN_MS}ms`
  );

  useEffect(() => {
    if (heading !== oldHeading) {
      setAnimationClass(style.fadeOut);
      setTimeout(() => {
        setOldHeading(heading);
        setAnimationClass(style.fadeIn);
      }, TRANSITION_DURATION_IN_MS + 200);
    }
  }, [heading]);

  return (
    <div className={style.container}>
      <h1 className={`${style.layer0} ${animationClass}`}>{oldHeading}</h1>
      <h2 className={`${style.layer1} ${animationClass}`}>{oldHeading}</h2>
      <h2 className={`${style.layer2} ${animationClass}`}>{oldHeading}</h2>
      <h2 className={`${style.layer3} ${animationClass}`}>{oldHeading}</h2>
    </div>
  );
};

export default AnimatedHeading;
