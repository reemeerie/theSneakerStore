import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserView from "../components/UserView";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userString = window.localStorage.getItem("loggedUser");

    if (userString && userString.length > 10) {
      const usuario = JSON.parse(userString);
      if (!(usuario.id === Number(id))) {
        navigate(`/login`);
      }
      setUser(usuario);
    } else {
      navigate("/login");
    }
  }, [id, navigate]);

  return <>{user ? <UserView user={user} /> : ""}</>;
};

export default User;
