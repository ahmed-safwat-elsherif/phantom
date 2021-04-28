import React from "react";

import mockup from "./../mocks/mockup.table";
import SortingArrows from "./../Icons/Sorting";
const TableResults = () => {
  return (
    <>
      <table class="table">
        <thead className="table-header">
          <tr>
            <th scope="col">
              <div className="d-flex align-items-center clickable">
                <span className="mr-2">Date</span>
                <SortingArrows />
              </div>
            </th>
            <th scope="col">Product</th>
            <th scope="col">size(us)</th>
            <th scope="col">Website</th>
            <th scope="col">price</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {mockup.map((row, i) => {
            return (
              <tr key={i}>
                <td>{row.date}</td>
                <td>{row.product}</td>
                <td>{row.size}</td>
                <td>{row.website}</td>
                <td>{row.price}</td>
                {row.status ? (
                  <td>
                    {" "}
                    <span className="badge badge-success">success</span>
                  </td>
                ) : (
                  <td>
                    {" "}
                    <span className="badge badge-fail">fail</span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableResults;
