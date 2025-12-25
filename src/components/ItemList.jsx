import { Item } from "./Item";

export const ItemList = (props) => {
  const zapas = props.zapas;
  return (
    <div className="customContainer">
      {zapas.map((zapa) => (
        <Item
          key={zapa.id}
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
