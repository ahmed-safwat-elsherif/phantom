import React from "react";
const DownloadApp = () => {
  return (
    <>
      <div className="widget p-3">
        <div className="flex-fill">
          <div className="d-flex">
            <span className="p-2 mr-2 d-flex flex-column justify-content-between align-items-center big-icon-wrapper">
              <span>
                <svg
                  width="120"
                  height="65"
                  viewBox="0 0 100 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="13.8662"
                    y="3.81226"
                    width="72.1563"
                    height="47.8148"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="0.5"
                  />
                  <path
                    d="M59 30V34C59 34.5304 58.7893 35.0391 58.4142 35.4142C58.0391 35.7893 57.5304 36 57 36H43C42.4696 36 41.9609 35.7893 41.5858 35.4142C41.2107 35.0391 41 34.5304 41 34V30"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45 25L50 30L55 25"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M50 30V18"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect
                    x="10.5181"
                    y="0.25"
                    width="79.0759"
                    height="55.0509"
                    rx="2.75"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="0.5"
                  />
                  <rect
                    x="0.25"
                    y="55.9121"
                    width="99.5"
                    height="1.83781"
                    rx="0.918907"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="0.5"
                  />
                  <path
                    d="M34.3714 56.3749C34.1611 56.2385 34.2576 55.9121 34.5082 55.9121H65.1521C65.4445 55.9121 65.5464 56.3004 65.2917 56.4439C64.8087 56.7162 64.2636 56.8593 63.7091 56.8593H36.0091C35.4279 56.8593 34.8591 56.6911 34.3714 56.3749Z"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="0.5"
                  />
                </svg>
              </span>
              <span>Desktop App</span>
            </span>
            <div className="d-flex flex-fill pl-1 flex-column justify-content-around ">
              <button className="button p-2 button-light d-flex justify-content-center align-items-center">
                <span>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6168 19.2C13.5328 20.252 12.3368 20.088 11.1968 19.592C9.9848 19.086 8.8768 19.054 7.5968 19.592C6.0028 20.28 5.1568 20.08 4.1968 19.2C-1.2232 13.62 -0.423203 5.12002 5.7368 4.80002C7.2308 4.88002 8.2768 5.62602 9.1568 5.68801C10.4648 5.42202 11.7168 4.66002 13.1168 4.76002C14.7988 4.89602 16.0568 5.56002 16.8968 6.75401C13.4368 8.83401 14.2568 13.394 17.4348 14.674C16.7988 16.344 15.9828 17.994 14.6148 19.214L14.6168 19.2ZM9.0368 4.74002C8.8748 2.26002 10.8848 0.220019 13.1968 0.0200195C13.5148 2.88002 10.5968 5.02002 9.0368 4.74002Z"
                      fill="#19A2A4"
                    />
                  </svg>
                </span>
                <span>Download for MacOS</span>
              </button>
              <button className="button p-2 button-light d-flex justify-content-center align-items-center">
                <span className="mr-1">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.81864L8.11068 1.71405L8.11423 9.53746L0.00740909 9.58362L0 2.81864ZM8.10682 10.4389L8.11311 18.2691L0.00629545 17.1545L0.00584091 10.3863L8.10682 10.4389ZM9.09002 1.56955L19.8441 0V9.43795L9.09002 9.52333V1.56955ZM19.8466 10.5125L19.8441 19.908L9.09 18.3901L9.07493 10.4949L19.8466 10.5125Z"
                      fill="#19A2A4"
                    />
                  </svg>
                </span>
                <span> Download for Windows</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
