import React from 'react';
import { useCart } from '../Context/CartContext';
import CartItem from '../Components/CartItem'; 

function CartPage() {
  const { cart, subtotal, discountAmount, finalTotal, DISCOUNT_RATE } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-items-center items-center pl-125 pt-30 text-center mt-20">
        <h2 className="text-2xl font-semibold text-pink-800">Your Cart is Empty 😢</h2>
        <p className="mt-2 text-gray-600">Start shopping from the products page!</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6 text-pink-900">Your Shopping Cart</h1>
        <div className="space-y-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      
      <div className="lg:col-span-1 border border-pink-300 p-6 rounded-lg shadow-xl h-fit bg-pink-100 sticky top-4">
        <h2 className="text-2xl font-bold mb-4 border-b border-pink-400 pb-2 text-pink-900">Order Summary</h2>
        
        <div className="flex justify-between py-2">
          <span>Subtotal:</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between py-2 text-red-600 font-medium">
          <span>Discount ({DISCOUNT_RATE * 100}%):</span>
          <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
        </div>
        
        <hr className="my-3 border-t-2 border-pink-300" />
        
        <div className="flex justify-between py-2 text-xl font-extrabold text-green-700">
          <span>Final Total:</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
        
        <button className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;