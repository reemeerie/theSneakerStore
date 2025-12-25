import { useContext, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../style/UserPage.css";

export const UserPage = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(CartContext);
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    setUser();
    navigate("/");
  };

  useEffect(() => {
    if (!user || user.id !== Number(id)) {
      navigate(`/`);
    }
  }, []);

  return (
    <div className="userContainer">
      <div className="userIcon">
        <FaIcons.FaUser />
      </div>
      <p>{user.name}</p>
      <Button variant="contained" onClick={logout}>
        Log out
      </Button>
    </div>
  );
};
