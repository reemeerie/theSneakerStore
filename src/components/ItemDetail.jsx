import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "../context/CartContext";
import "../style/Item.css";
import "../style/ItemCount.css";

export const ItemDetail = (props) => {
  const { addItem, itemsCarrito, isInCart } = useContext(CartContext);
  let cantEnCarro = 0;

  if (isInCart(props.id)) {
    let itemIndex = itemsCarrito.findIndex((item) => item.id === props.id);
    cantEnCarro = itemsCarrito[itemIndex].cantidad;
  }

  const [cant, setCant] = useState(1);

  function agregarUno() {
    /* si hay en stock lo pre-agrego al carrito */
    if (cantEnCarro + cant < props.stock) {
      return setCant(cant + 1);
    } else {
      return;
    }
  }
  function restarUno() {
    /* si pre-agregue, resto uno */
    if (cant > 1) {
      return setCant(cant - 1);
    } else {
      return;
    }
  }

  return (
    <div className="col-xxl-5 customCont col-lg-8 col-md-10 col-xl-6 navfix">
      <div className="row">
        <div className="">
          <div className="card-sl">
            <div className="card-image">
              <img src={props.img} alt="imagen" />
            </div>
            <div className="card-heading">{props.nombre}</div>
            <div className="card-text">{props.precio}</div>
            {cantEnCarro === Number(props.stock) ? (
              <p className="card-button-disabled">Sin stock</p>
            ) : (
              <>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => {
                      restarUno();
                    }}
                  >
                    -
                  </Button>
                  <p className="numero">{cant}</p>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => {
                      agregarUno();
                    }}
                  >
                    +
                  </Button>
                </div>
                <p className="inCart">Already in cart: {cantEnCarro}</p>
                <Link
                  onClick={() => addItem(props, cant)}
                  to="/cart"
                  className="card-button"
                >
                  Añadir al carrito
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
