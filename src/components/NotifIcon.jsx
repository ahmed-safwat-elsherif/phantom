import React, { useState } from "react";
const NotifIcon = ({ isActive }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className=" notification-menu notif-icon"
      >
        {isActive && <span className="dot"></span>}
        <div className={showMenu ? "bell active" : "bell"}>
          <i className="fas fa-bell"></i>
        </div>
        {
          <ul className={showMenu ? "show-items" : "hide-items"}>
            <li className="new d-flex p-1 ">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="16" cy="16" r="16" fill="#1EC1C3" />
                  <path
                    d="M16 6C10.4858 6 6 10.4858 6 16C6 21.5142 10.4858 26 16 26C21.5142 26 26 21.5142 26 16C26 10.4858 21.5142 6 16 6ZM21.0684 13.8809L15.6516 19.2974C15.4891 19.4599 15.2758 19.5417 15.0625 19.5417C14.8492 19.5417 14.6359 19.4599 14.4734 19.2974L11.7651 16.5891C11.4391 16.2634 11.4391 15.7366 11.7651 15.4109C12.0909 15.0849 12.6174 15.0849 12.9434 15.4109L15.0625 17.53L19.8901 12.7026C20.2159 12.3766 20.7424 12.3766 21.0684 12.7026C21.3941 13.0284 21.3941 13.5549 21.0684 13.8809Z"
                    fill="#1EC1C3"
                  />
                </svg>
              </span>
              <div className="ml-2 flex-fill">
                <span className="d-block">
                  <span>Transfer link confirmed</span>
                  <span className="text-faded"> by </span>
                </span>
                <span className="d-block text-faded">jamesconor@email.com</span>
                <span className="d-block text-faded">just now</span>
              </div>
            </li>
            <li className="new d-flex p-1 ">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="16" cy="16" r="16" fill="#1EC1C3" />
                  <path
                    d="M16 6C10.4858 6 6 10.4858 6 16C6 21.5142 10.4858 26 16 26C21.5142 26 26 21.5142 26 16C26 10.4858 21.5142 6 16 6ZM21.0684 13.8809L15.6516 19.2974C15.4891 19.4599 15.2758 19.5417 15.0625 19.5417C14.8492 19.5417 14.6359 19.4599 14.4734 19.2974L11.7651 16.5891C11.4391 16.2634 11.4391 15.7366 11.7651 15.4109C12.0909 15.0849 12.6174 15.0849 12.9434 15.4109L15.0625 17.53L19.8901 12.7026C20.2159 12.3766 20.7424 12.3766 21.0684 12.7026C21.3941 13.0284 21.3941 13.5549 21.0684 13.8809Z"
                    fill="#1EC1C3"
                  />
                </svg>
              </span>
              <div className="ml-2 flex-fill">
                <span className="d-block">
                  <span>Transfer link confirmed</span>
                  <span className="text-faded"> by </span>
                </span>
                <span className="d-block text-faded">jamesconor@email.com</span>
                <span className="d-block text-faded">just now</span>
              </div>
            </li>
            <li className=" d-flex p-1 ">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.2" cx="16" cy="16" r="16" fill="#1EC1C3" />
                  <path
                    d="M16 6C10.4858 6 6 10.4858 6 16C6 21.5142 10.4858 26 16 26C21.5142 26 26 21.5142 26 16C26 10.4858 21.5142 6 16 6ZM21.0684 13.8809L15.6516 19.2974C15.4891 19.4599 15.2758 19.5417 15.0625 19.5417C14.8492 19.5417 14.6359 19.4599 14.4734 19.2974L11.7651 16.5891C11.4391 16.2634 11.4391 15.7366 11.7651 15.4109C12.0909 15.0849 12.6174 15.0849 12.9434 15.4109L15.0625 17.53L19.8901 12.7026C20.2159 12.3766 20.7424 12.3766 21.0684 12.7026C21.3941 13.0284 21.3941 13.5549 21.0684 13.8809Z"
                    fill="#1EC1C3"
                  />
                </svg>
              </span>
              <div className="ml-2 flex-fill">
                <span className="d-block">
                  <span>Transfer link confirmed</span>
                  <span className="text-faded"> by </span>
                </span>
                <span className="d-block text-faded">jamesconor@email.com</span>
                <span className="d-block text-faded">just now</span>
              </div>
            </li>
          </ul>
        }
      </div>
    </>
  );
};

export default NotifIcon;
