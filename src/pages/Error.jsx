import React from "react";
import king404 from "../assets/images/king-404.png";
import { Link } from "react-router-dom";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";

const Error = () => {
  return (
    <Center>
      <Stack align="center">
        <h1>Oh no!</h1>
        <p>We couldn't find the puzzle you were looking for.</p>
        <img src={king404} alt="404" width={200} />
        <Link to={"/"}>Back to home</Link>
      </Stack>
    </Center>
  );
};

export default Error;
