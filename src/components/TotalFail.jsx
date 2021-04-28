import React from "react";
import CartFail from "./../Icons/CartFail";
const TotalFail = ({ number }) => {
  return (
    <>
      <div className="widget p-3">
        <div className="content">
          <h4 className="title">Total Checkouts</h4>
          <p>
            <span className="result-number txt-fail">{number}</span>
            <span className="out-of"> / 82</span>
          </p>
        </div>
        <div className="icon">
          <CartFail />
        </div>
      </div>
    </>
  );
};

export default TotalFail;
