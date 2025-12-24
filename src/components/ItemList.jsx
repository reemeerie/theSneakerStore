import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  const zapas = props.zapas;
  return (
    <div className="customContainer">
      {zapas.map((zapa, index) => (
        <Item
          key={index}
          img={zapa.img}
          nombre={zapa.nombre}
          precio={zapa.precio}
          id={zapa.id}
          precioNumero={zapa.precioNumero}
        />
      ))}
    </div>
  );
};

export default ItemList;
