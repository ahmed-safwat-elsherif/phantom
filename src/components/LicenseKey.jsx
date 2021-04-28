import React, { useState } from "react";
import ShowIcon from "./../Icons/ShowIcon";
const LicenseKey = ({ licenseKey }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="widget pt-5 p-3">
        <div className="flex-fill">
          <div className="text-faded">License key</div>
          <div className="d-flex justify-content-between">
            {show ? (
              <div className="secret-key">{licenseKey}</div>
            ) : (
              <div className="secret-key">xxxx-xxxx-xxxx-xxxx</div>
            )}
            <div>
              <ShowIcon show={show} handleShow={handleShow} />
            </div>
          </div>
          <div className="d-flex my-2">
            <button className="button mr-3 button-primary d-flex flex-fill justify-content-between">
              <span>Renew Now</span>
              <span className="text-bold">Stripe</span>
            </button>
            <button className="button px-3 button-danger text-bold">
              Deactivate
            </button>
          </div>
          <div>
            <span className="text-sm">Next Renewal on</span>
            <span className="text-sm text-bold"> 22 Mar 2021</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LicenseKey;
