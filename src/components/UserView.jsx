import React from "react";
import "../style/UserView.css";
import * as FaIcons from "react-icons/fa";
import { Button } from "@mui/material";

const UserView = ({ user }) => {
  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.href = "/";
  };

  return (
    <>
      <div className="userContainer">
        <div className="userIcon">
          <FaIcons.FaUser />
        </div>
        <p>{user.name}</p>
        <Button variant="contained" onClick={logout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default UserView;
