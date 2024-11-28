import React from "react";
import king404 from "../assets/images/king-404.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Oh no!</h1>
      <p>We couldn't find the puzzle you were looking for.</p>
      <Link to={"/"}>Back to home</Link>
      <img src={king404} alt="404" width={200} />
    </div>
  );
};

export default Error;
