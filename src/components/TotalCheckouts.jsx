import React from "react";
import CartSuccess from "../Icons/CartSuccess";
const TotalCheckouts = ({ number, icon, color }) => {
  return (
    <>
      <div className="widget p-3">
        <div className="content">
          <h4 className="title">Total Checkouts</h4>
          <p>
            <span className="result-number txt-success">{number}</span>
            <span className="out-of"> / 82</span>
          </p>
        </div>
        <div className="icon d-flex justify-content-center align-items-center">
          <CartSuccess />
        </div>
      </div>
    </>
  );
};

export default TotalCheckouts;
