import React from "react";
import { Link } from 'react-router-dom'; 
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from '../Context/CartContext'; 

const Navbar = () => {
    const { totalItems } = useCart(); 
    return (
        <nav className="navbar bg-pink-100 p-6 text-white fixed w-full top-0 z-10 shadow-md mb-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="brand text-lg text-pink-900 font-bold">FashionWithMe</Link> 
                <div className="nav-actions">
                    <Link
                        to="/cart" 
                        className="bg-rose-700 text-white shadow-lg px-4 py-2 rounded cart-btn flex items-center hover:outline-none hover:bg-rose-800 hover:text-black focus:outline-none"
                    >
                        <TiShoppingCart className="text-2xl" />
                        <span className="cart-count ml-2">{totalItems}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;