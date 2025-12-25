import { useState, useEffect, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../context/CartContext";
import "../style/NavBar.css";

export const NavBar = () => {
  const { user, setUser } = useContext(CartContext);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    /* Cada vez que renderizo el navbar me fijo si tengo un usuario logeado
    si no, muestro "Log In"
    Esta responsabilidad no deberia tenerla el navbar, si no un layout */
    const userJSON = window.localStorage.getItem("loggedUser");
    if (userJSON) {
      const usuario = JSON.parse(userJSON);
      setUser(usuario);
    }
  }, []);

  /* Esta data debería ser estática y estar en un archivo JSON */
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
      title: user ? user.name : "Log in",
      path: "/login",
      icon: <FaIcons.FaUser />,
      cName: "nav-text",
    },
  ];

  return (
    /* El provider de iconos debería ir en App envolviendo a toda la aplicación, acá solo envuelve el navbar, no tiene sentido */
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <section className="navbar">
          <div className="contenedorGrande">
            <div className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} className="barritas" />
            </div>
            <Link to="/" className="brand">
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
                {user ? user.name : "Log in"}
              </Button>
            </Link>
          </div>
        </section>
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
