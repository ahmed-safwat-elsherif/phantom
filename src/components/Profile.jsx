import React from "react";
import DropDownMenu from "./DropDownMenu";

const Profile = ({ pname, email }) => {
  return (
    <>
      <div className="profile">
        <img src="assets/profile.jpg" alt="profile" />

        <div className="info">
          <h4 className="pname">{pname}</h4>
          <p className="email">{email}</p>
        </div>
        <DropDownMenu />
      </div>
    </>
  );
};

export default Profile;
