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
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          }
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
