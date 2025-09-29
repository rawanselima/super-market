import React, { useState } from "react";
import Modal from "../ui/modal";
function PopUp({ isOpen, setIsOpen, children, title }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={title}
      size="lg"
      animation="bounce"
    >
      {children}
    </Modal>
  );
}

export default PopUp;
