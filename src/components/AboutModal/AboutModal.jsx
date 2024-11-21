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
      <a
        href="https://www.linkedin.com/in/darion-valdez-a63629176/"
        target="blank"
      >
        Developed by DarionV
      </a>
      <a href="https://uz.linkedin.com/in/khaydarbekoff" target="blank">
        Puzzle designs by Sherzod Khaydarbekov
      </a>
      <a
        href="https://www.thingiverse.com/thing:6054837"
        target="blank"
        title="3D-assets"
      >
        3D-assets by Stanleyerland @ Thingiverse
      </a>
      <a
        href="https://www.flaticon.com/free-icons/knight"
        title="chess icons"
        target="blank"
      >
        Chess icons created by rizal2109 - Flaticon
      </a>
      {/* <p>
        We use affiliate links, which help us earn commissions from purchases
        made through this site.
      </p> */}
    </Modal>
  );
};

export default AboutModal;
