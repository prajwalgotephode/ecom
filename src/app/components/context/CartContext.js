"use client"
    import React, { createContext, useContext, useState } from 'react';

    const CartContext = createContext();


    const CartProvider = ({ children }) => {
        const [count, setCount] = useState(0);
        const [cartItem, setCartItem] = useState([]);
        console.log('cartItem', cartItem)
        
        const addItemToCart = (productdetails) => {
            const existingItemIndex = cartItem.findIndex((cartItem) => cartItem.id === productdetails[0].id);

            
            if (existingItemIndex !== -1) {
                const updatedCart = [...cartItem];
                const a = updatedCart[existingItemIndex];
                updatedCart[existingItemIndex]= {...a, quantity: a.quantity + 1 };
                setCartItem(updatedCart);
            } else {
                setCartItem([...cartItem, { ...productdetails[0], quantity: 1 }]);
            }
        }

        const removeItemFromCart = (productdetails) => {
            const updatedCart = cartItem.filter((cartItem) => cartItem.id !== productdetails);
            setCartItem(updatedCart);
        }


        return (
            <CartContext.Provider value={{ count, setCount, cartItem, setCartItem , addItemToCart, removeItemFromCart }}>
                {children}
            </CartContext.Provider>
        );

    };

    export { CartProvider, CartContext };