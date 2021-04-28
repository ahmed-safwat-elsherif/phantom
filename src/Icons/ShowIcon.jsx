import React, { useState } from "react";
const ShowIcon = ({ show, handleShow }) => {
  return (
    <>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => handleShow()}
        className="icon-wrapper-sm-success d-flex justify-content-center align-items-center"
      >
        {show ? (
          <i className="fas fa-eye"></i>
        ) : (
          <i className="fas fa-eye-slash"></i>
        )}
      </span>
    </>
  );
};

export default ShowIcon;
