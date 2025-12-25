import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState("");

  const addItem = (item, cantidadNueva) => {
    if (isInCart(item.id)) {
      /* si lo tengo, trato de agregar la cantidad nueva */
      let itemIndex = itemsCarrito.findIndex((element) => element.id === item.id);
      let cantidadActual = itemsCarrito[itemIndex].cantidad;
      let cantAgregar = cantidadActual + cantidadNueva;
      /* si hay en stock, la agrego y si no nada */
      if (cantAgregar <= item.stock) {
        itemsCarrito[itemIndex].cantidad += cantidadNueva;
        setItemsCarrito([...itemsCarrito]);
      }
    } else {
      /* si no lo tengo, copio lo que tengo y lo agrego */
      setItemsCarrito([...itemsCarrito, { ...item, cantidad: cantidadNueva }]);
    }
  };

  const removeItem = (ItemId) => {
    /* copia en un array nuevo todos los items que tengan un id distinto */
    setItemsCarrito(itemsCarrito.filter((element) => element.id !== ItemId));
  };

  const isInCart = (ItemId) => {
    return itemsCarrito.find((item) => item.id === ItemId);
  };

  const clearCarro = () => {
    setItemsCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        itemsCarrito,
        total,
        user,
        addItem,
        isInCart,
        removeItem,
        setTotal,
        clearCarro,
        setUser
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
