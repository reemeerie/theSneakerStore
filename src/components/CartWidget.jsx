import { useContext } from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { itemsCarrito } = useContext(CartContext);

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
