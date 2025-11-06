import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();
const DISCOUNT_RATE = 0.10;

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  const updateQuantity = (productId, change) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + change;
          if (newQuantity < 1) return item; 
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * DISCOUNT_RATE;
  const finalTotal = subtotal - discountAmount;
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        subtotal,
        discountAmount,
        finalTotal,
        totalItems,
        DISCOUNT_RATE
      }}
    >
      {children}
    </CartContext.Provider>
  );
};