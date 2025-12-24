import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../style/Cart.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const { itemsCarrito, removeItem, addTotal } = useContext(CartContext);

  const mandoAcontext = (acum) => {
    addTotal(acum);
  };

  let acumulador = 0;

  for (const item of itemsCarrito) {
    const aux = item.precioNumero * item.cantidad;
    acumulador += aux;
  }

  return (
    <>
      {itemsCarrito.length < 1 && (
        <h3 className="sinItems">
          Cart empty :C, try visiting the{" "}
          <Link to="/products" className="link">
            <strong>products section.</strong>
          </Link>
        </h3>
      )}
      {itemsCarrito.length >= 1 && (
        <div>
          <div className="elPadre">
            {itemsCarrito.map((item, index) => (
              <div className="contenedor col-xxl-10" key={index}>
                <div className="img">
                  <img src={item.img} alt="imagen" className="nombre" />
                </div>
                <div className="nombrePrecio">
                  <p className="nombre">
                    <strong>{item.marca}</strong> {item.nombre}{" "}
                    <strong>x{item.cantidad}</strong>
                  </p>
                  <p className="precio">{`$${
                    item.precioNumero * item.cantidad
                  }`}</p>
                </div>
                <div
                  className="card-button"
                  onClick={() => removeItem(item.id)}
                >
                  Borrar del carrito
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {itemsCarrito.length >= 1 && (
        <>
          <div className="contenedorFinalizar">
            <div className="nombrePrecioTotal">
              <p className="mt-3">
                <strong>Total:</strong> {`$${acumulador}`}
              </p>
              <Link to="/cart/form" className="link">
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={() => mandoAcontext(acumulador)}
                >
                  Finalizar mi compra
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
