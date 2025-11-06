// src/Components/CartItem.jsx

import React from 'react';
import { useCart } from '../Context/CartContext';
import { HiOutlineMinus, HiOutlinePlus, HiOutlineTrash } from 'react-icons/hi';

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();
  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex items-center border-b pb-4 mb-4 bg-white p-3 rounded-lg shadow-sm">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-16 h-16 object-contain mr-4 rounded-md" 
      />
      
      <div className="flex">
        <h3 className="text-lg font-semibold line-clamp-1 text-pink-700">{item.title}</h3>
        <p className="text-gray-500">${item.price.toFixed(2)} / item</p>
      </div>
      
      <div className="flex items-center mx-4 border rounded-md">
        <button 
          onClick={() => updateQuantity(item.id, -1)} 
          className="p-2 hover:bg-pink-100 rounded-l"
        >
          <HiOutlineMinus />
        </button>
        <span className="p-2 font-medium w-8 text-center">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, 1)} 
          className="p-2 hover:bg-pink-100 rounded-r"
        >
          <HiOutlinePlus />
        </button>
      </div>

      <div className="w-24 text-right">
        <span className="font-bold text-lg text-pink-800">${itemTotal.toFixed(2)}</span>
      </div>
      
      <button 
        onClick={() => removeFromCart(item.id)} 
        className="ml-4 p-2 text-red-500 hover:text-red-700 transition duration-300"
      >
        <HiOutlineTrash className="h-5 w-5" />
      </button>
    </div>
  );
}

export default CartItem;