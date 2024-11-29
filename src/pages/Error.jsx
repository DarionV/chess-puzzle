import React from "react";
import king404 from "../assets/images/king-404.png";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";
import StandardButton from "../components/StandardButton/StandardButton";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Center>
      <Stack align="center">
        <h1>Oh no!</h1>
        <p>We couldn't find the puzzle you were looking for.</p>
        <img src={king404} alt="404" width={400} />
        <StandardButton handleClick={handleClick}>Back to home</StandardButton>
      </Stack>
    </Center>
  );
};

export default Error;
