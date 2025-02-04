import React from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import StandardButton from "../StandardButton/StandardButton";

const InstructionsModal = () => {
  const [opened, { close }] = useDisclosure(true);

  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      title="INSTRUCTIONS"
      withCloseButton={false}
      trapFocus={false}
      styles={{
        body: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "12px",
          fontFamily: `"Open Sans", sans-serif`,
        },
        title: {
          color: "rgb(174, 49, 49)",
          fontFamily: `"EB Garamond", serif`,
          fontSize: "2rem",
          textAlign: "center",
          margin: "auto",
        },
      }}
    >
      <p>
        Click a <b>tile</b> to move the piece on it.
      </p>
      <p>Rearrange the pieces to guide the red piece to the red tile.</p>
      <p>Standard chess movements apply, but no capturing is allowed.</p>
      <p>
        <b>Special Puzzle:</b> In "Exchange the Kings," simply swap the
        positions of the kings.
      </p>
      <StandardButton handleClick={close}>Play</StandardButton>
    </Modal>
  );
};

export default InstructionsModal;
