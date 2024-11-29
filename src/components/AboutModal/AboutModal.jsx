import React from "react";
import { Modal } from "@mantine/core";
import style from "./AboutModal.module.css";

const AboutModal = ({ opened, toggleAbout }) => {
  const handleClose = () => {
    close();
    toggleAbout();
  };

  return (
    <Modal
      trapFocus={false}
      opened={opened}
      onClose={handleClose}
      centered
      withCloseButton={false}
      title="ROYAL RIDDLES"
      classNames={{ body: style.body }}
      styles={{
        title: {
          color: "rgb(174, 49, 49)",
          fontFamily: `"EB Garamond", serif`,
          fontSize: "2rem",
          textAlign: "center",
          margin: "auto",
        },
      }}
    >
      <h3>Developer</h3>
      <a
        href="https://www.linkedin.com/in/darion-valdez-a63629176/"
        target="blank"
      >
        DarionV
      </a>
      <h3>Puzzle designs</h3>
      <a href="https://uz.linkedin.com/in/khaydarbekoff" target="blank">
        Sherzod Khaydarbekov
      </a>
      <a
        href="https://www.linkedin.com/in/darion-valdez-a63629176/"
        target="blank"
      >
        DarionV
      </a>
      <h3>3D Assets</h3>
      <a
        href="https://www.thingiverse.com/thing:6054837"
        target="blank"
        title="3D-assets"
      >
        Stanleyerland @ Thingiverse
      </a>
    </Modal>
  );
};

export default AboutModal;
