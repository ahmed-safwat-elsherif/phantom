import React, { useState } from "react";
const DropDownMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="drop-down-menu">
        <div onMouseEnter={() => setShowMenu(true)} className="drop-down-btn">
          <i className="fas fa-chevron-down"></i>

          {
            <ul
              onMouseLeave={() => setShowMenu(false)}
              onMouseEnter={() => setShowMenu(true)}
              className={showMenu ? "show-items" : "hide-items"}
            >
              <li>
                <a href="#">item 1</a>
              </li>
              <li>
                <a href="#">item 2</a>
              </li>
              <li>
                <a href="#">item 3</a>
              </li>
              <li>
                <a href="#">item 4</a>
              </li>
            </ul>
          }
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
