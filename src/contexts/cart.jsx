import {createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';



export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [item, setItem] = useState([])

    return (
        <CartContext.Provider value={{item, setItem}}>
            { children }
        </CartContext.Provider>
    )
}


//hook personalizado
export function useCartContext() {
    const {item, setItem} = useContext(CartContext)

    function addItem(newItem){
        // const repeatedItem = item.some((coisa) => coisa.id === newItem.id)

        let newList = [...item]
        newList.push(newItem)
            return setItem(newList)

        // if(!repeatedItem){
            
        // }


        // newList = item.filter((itmm) => itmm.id !== newItem.id)
        // return setItem(newList)

    }

    return {
        item,
        addItem
    }
}


CartProvider.propTypes = {
    children: PropTypes.node, // Valida que `children` pode ser qualquer elemento renderizável
  };