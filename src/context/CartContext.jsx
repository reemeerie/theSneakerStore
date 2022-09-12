import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [itemsCarrito, setItemsCarrito] = useState([]);
    const [total, setTotal] = useState(0)

    const addItem = (item, cantidad) => {
        console.log({...item, cantidad})
        if(isInCart(item.id)){
            let aux = itemsCarrito
            let itemIndex = aux.findIndex((element)=> element.id === item.id)
            let antes = aux[itemIndex].cantidad
            let cantAgregar = antes + cantidad
            if (cantAgregar <= item.stock) {
                aux[itemIndex].cantidad += cantidad
                setItemsCarrito([...aux])
            }
        } else {
            setItemsCarrito([...itemsCarrito, {...item, cantidad}])
        }
    }

    const removeItem = (ItemId) => {
        setItemsCarrito(itemsCarrito.filter((element)=> element.id != ItemId))
    }

    const isInCart = (ItemId) => {
            return itemsCarrito.find((item)=> item.id === ItemId)
    }

    const addTotal = (acum) => {
        setTotal(acum)
    }


  return (
    <CartContext.Provider
    value={{
        itemsCarrito,
        total,
        addItem,
        isInCart,
        removeItem,
        addTotal
    }}>
    {children}
    </CartContext.Provider>
  )
}