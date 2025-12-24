import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const CartWidget = () => {
  const { itemsCarrito, fromLocalStorage } = useContext(CartContext);

  useEffect(() => {
    fromLocalStorage();
  }, [fromLocalStorage]);

  return (
    <Link to="/cart" className="contenedorChico">
      <Button
        color="inherit"
        variant="outlined"
        sx={{ fontSize: 17 }}
        startIcon={<LocalMallOutlinedIcon />}
      >
        {itemsCarrito.length >= 1
          ? itemsCarrito.reduce((pv, cv) => pv + cv.cantidad, 0)
          : "Cart"}
      </Button>
    </Link>
  );
};

export default CartWidget;
