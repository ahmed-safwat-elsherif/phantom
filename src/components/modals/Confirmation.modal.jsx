import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ConfirmIcon from "./../../Icons/ConfirmIcon";
const ConfirmationModal = ({ onOpen }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    onOpen();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button button-light" onClick={handleShow}>
        Save Changes
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex text-center  flex-column justify-content-center align-items-center">
            <ConfirmIcon />
            <div className="my-2">
              <Modal.Title>Confirmation Email Sent</Modal.Title>
            </div>
            <div className=" px-3">
              <p>
                We sent a link to{" "}
                <span>
                  <a href="/" className="link-email">
                    anthony2142@email.com
                  </a>
                </span>{" "}
                and{" "}
                <span>
                  <a href="/" className="link-email">
                    jamesconor@email.com
                  </a>
                </span>
                . Check the email to confirm the transfer.
              </p>
              <p>
                <span className="text-sm text-faded">
                  Didn’t get a confirmation email?
                </span>
              </p>
              <p className="text-md">
                Check your spam or{" "}
                <span>
                  <a href="/" className="link">
                    Send Again
                  </a>
                </span>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConfirmationModal;
