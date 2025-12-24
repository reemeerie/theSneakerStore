import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "../style/NavBar.css";
import { IconContext } from "react-icons";
import CartWidget from "./CartWidget";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const NavBar = () => {
  const [usuario, setUsuario] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const usuario = JSON.parse(userJSON);
      setUsuario(usuario);
    }
  }, []);

  const sidebardata = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "Products",
      path: "/products",
      icon: <FaIcons.FaCartPlus />,
      cName: "nav-text",
    },
    {
      title: "Cart",
      path: "/cart",
      icon: <FaIcons.FaShoppingCart />,
      cName: "nav-text",
    },
    {
      title: usuario ? usuario.name : "Log in",
      path: "/login",
      icon: <FaIcons.FaUser />,
      cName: "nav-text",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <div className="contenedorGrande">
            <div className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} className="barritas" />
            </div>
            <Link to="/" className="brand">
              {/* <img src="/tss2.png" alt="assa"/> */}
              theSneakerStore
            </Link>
          </div>
          <div className="d-flex contenedorGrande">
            <CartWidget />
            <Link to="/login" className="contenedorChico">
              <Button
                color="inherit"
                variant="outlined"
                sx={{ fontSize: 17 }}
                startIcon={<PersonIcon />}
              >
                {usuario ? usuario.name : "Log in"}
              </Button>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {sidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="sideSpan">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
