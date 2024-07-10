import React, { createContext, useEffect, useState } from 'react'
import { food_list } from '../../assets/assets';

export const StoreContext = createContext(null);


const Context = (props) => {

    const [cartItem, setCartItem] = useState({});

    const addProduct = (itemId) => {
        if(!cartItem[itemId]) {
            setCartItem(pre => ({...pre , [itemId]: 1 }))
        } else {
            setCartItem(pre => ({...pre , [itemId]: pre[itemId] + 1}))
        }
    }

    const removeProduct = (itemId) => {
        setCartItem((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }))
    }
 

    const getTotal = () => {
        let totalAmount = 0;
        for(const item in cartItem) {
            if(cartItem[item] > 0) {
                let itemInfo = food_list.find((product)=> product._id === item );
                totalAmount += itemInfo.price * cartItem[item]
            }
        }
        return totalAmount;
    }


    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addProduct,
        removeProduct,
        getTotal,
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default Context