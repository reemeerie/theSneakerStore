import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "../style/ItemListContainer.css";
import axios from "axios";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [zapatilla, setZapatilla] = useState({});

  useEffect(() => {
    const getAllZapasAndFilter = async () => {
      const response = await axios.get(
        "https://snk-api.vercel.app/api/v1/zapatillas"
      );
      console.log(response)
      const zapatillas = response.data.data;
      const zapa = zapatillas.find((zapa) => zapa.id === Number(id));
      setZapatilla(zapa);
    };

    getAllZapasAndFilter();
  }, [id]);

  return (
    <>
      {Object.keys(zapatilla).length === 0 ? (
        <div className="container customContainer">
          <div className="spinner-border text-warning spinner" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container customContainer">
          <ItemDetail
            nombre={zapatilla.nombre}
            precio={zapatilla.precio}
            img={zapatilla.img}
            inicial={1}
            stock={zapatilla.stock}
            id={zapatilla.id}
            precioNumero={zapatilla.precioNumero}
            marca={zapatilla.marca}
          />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
