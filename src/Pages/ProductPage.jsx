import React from 'react';
import ProductCard from '../Components/ProductCard'; 


const ProductPage = ({ products, addToCart }) => { 
  return (
    <div>
    <div className="product-list min-h-screen relative"> 
      <img src="https://t4.ftcdn.net/jpg/05/96/62/65/360_F_596626503_jrzjZNYStDexiWxQFqO7oCh6M8PdMlJs.jpg" alt="Placeholder" className="w-full blur-xs fixed top-0 left-0" />
      <div className="mt-20 grid flex-col justify-center absolute opacity-80 w-full h-auto p-4 md:p-8 lg:items-center">
          <h1 className="lg:text-6xl md:text-2xl font-bold text-white text-center">Fashion Products</h1>    
          <h3 className="text-white text-center text-sm md:text-sm lg:text-sm">Discover the latest trends in fashion with our exclusive collection of clothing, accessories, and footwear. Whether you're looking for casual wear or something more formal, we have something for everyone. Shop now and elevate your style!</h3>
          </div>
    </div>
    <div className="container absolute mx-auto mt-4 mb-30">       
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map((ele) => (
            <ProductCard
              key={ele.id}
              ele={ele}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      </div>
  );
};

export default ProductPage;