import React from "react";
const Fitler = () => {
  return (
    <>
      <div className="widget p-3">
        <div className="content">
          <h4 className="title">Filter by : </h4>
          <ul className="filter-by">
            <li className="clickable">
              <span>1D</span>
            </li>
            <li className="active clickable">
              <span>1M</span>
            </li>
            <li className="clickable">
              <span>1Y</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Fitler;
