import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import ProductPage from './Pages/ProductPage'; 
import CartPage from './Pages/CartPage'; 
import Footer from './Components/Footer';
import { useCart } from './Context/CartContext'; 

const App = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> 
      <main className="flex p-4 md:p-8">
        <Routes>
          <Route 
            path="/" 
            element={<ProductPage products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<CartPage />} 
          />
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
};

export default App;