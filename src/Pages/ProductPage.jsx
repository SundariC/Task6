import React from "react";
import ProductCard from "../Components/ProductCard";
import { HiH1 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProductPage = ({ products, addToCart }) => {
  return (
    <div>
      <div className="min-h-screen relative">
        <img
          className="blur-sm transition-all duration-500 w-full fixed top-0 left-0  h-full object-cover z-0"
          src="https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg"
          alt="Placeholder"
        />
        <div className="mt-20 text-center flex flex-col gap-10 opacity-80 p-4 md:p-8 lg:items-center">
          <h1 className="lg:text-6xl md:text-2xl font-bold text-white text-center">
            Fashion Products
          </h1>
          <h3 className="text-white text-center px-50 text-sm md:text-sm lg:text-sm">
            Discover the latest trends in fashion with our exclusive collection
            of clothing, accessories, and footwear. Whether you're looking for
            casual wear or something more formal, we have something for
            everyone. Shop now and elevate your style!
          </h3>
          <h1 className="text-white mt-30 text-center px-50 text-sm md:text-sm lg:text-6xl font-bold opacity-80">
           10% OFF ON FIRST ORDER
          </h1>
          <Link to="/" className="border border-white text-white font-bold py-2 px-4 rounded w-40 mx-auto hover:bg-white hover:text-black transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="container absolute mx-auto mb-30 p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((ele) => (
            <ProductCard key={ele.id} ele={ele} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
