import React, { useEffect, useState } from "react";
import style from "./AnimatedHeading.module.css";

const AnimatedHeading = ({ heading }) => {
  const [oldHeading, setOldHeading] = useState(heading);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass(style.fadeOut);
    setTimeout(() => {
      setOldHeading(heading);
      setAnimationClass(style.fadeIn);
    }, 300);
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
