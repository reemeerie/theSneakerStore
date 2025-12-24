import React from "react";
import { Link } from "react-router-dom";
import "../style/Item.css";
import { useState, useContext } from "react";
import "../style/ItemCount.css";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";

const ItemDetail = (props) => {
  const { addItem, itemsCarrito, isInCart } = useContext(CartContext);
  let cantEnCarro = 0;

  if (isInCart(props.id)) {
    let aux = itemsCarrito;
    let itemIndex = aux.findIndex((element) => element.id === props.id);
    cantEnCarro = aux[itemIndex].cantidad;
  }

  const [cant, setCant] = useState(props.inicial);

  function agregarUno() {
    if (cant < props.stock && cantEnCarro + cant < props.stock) {
      return setCant(cant + 1);
    } else {
      return;
    }
  }
  function restarUno() {
    if (cant > 1) {
      return setCant(cant - 1);
    } else {
      return;
    }
  }
  function onAdd() {
    addItem(props, cant);
  }

  if (props.stock !== 0) {
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
                  <Link onClick={onAdd} to="/cart" className="card-button">
                    Añadir al carrito
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDetail;
