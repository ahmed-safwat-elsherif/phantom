import React from "react";
import NotifIcon from "./components/NotifIcon";
import Profile from "./components/Profile";
import TotalCheckouts from "./components/TotalCheckouts";
import TotalFail from "./components/TotalFail";
import Fitler from "./components/Filter";
import TableResults from "./components/Table";
import LicenseKey from "./components/LicenseKey";
import DiscordID from "./components/DiscordID";
import Transfer from "./components/Transfer";
import DownloadApp from "./components/DownloadApp";
const App = () => {
  return (
    <>
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-12 profile-section mb-3">
            <Profile pname={"Anthony Mike"} email={"anthony2142@email.com"} />
            <NotifIcon isActive={true} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 row m-auto">
            <div className="col-md-8 col-sm-12 ">
              <div className="control-panel-horizontal">
                <div className="filter">
                  <Fitler />
                </div>
                <div className="total-checkout">
                  <TotalCheckouts number={72} />
                </div>
                <div className="total-failure">
                  <TotalFail number={10} />
                </div>
              </div>
              <div className="col-12 p-0 mt-3">
                <TableResults />
              </div>
            </div>
            <div className="col-md-4 pl-1 col-sm-12">
              <div className="control-panel-vertical">
                <div className="license-key">
                  <LicenseKey licenseKey={"1234-1231-123-1235-1234"} />
                </div>
                <div className="discord-ID">
                  <DiscordID />
                </div>
                <div className="transfer">
                  <Transfer />
                </div>
                <div className="download-app">
                  <DownloadApp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
