import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ConfirmationModal from "./Confirmation.modal";
const TransferModal = () => {
  let [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        type="button"
        className="button px-3 button-success d-flex align-items-center"
      >
        <span className="pr-2 text-bold">Transfer</span>
        <i class="fas fa-chevron-right"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="text-md">Transfer to</span>
          <InputGroup className=" mt-2 mb-3">
            <FormControl
              placeholder="Enter the email address"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <button
            style={{ color: "white" }}
            className="button px-4 button-danger"
            onClick={handleClose}
          >
            Close
          </button>
          <ConfirmationModal onOpen={handleClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TransferModal;
