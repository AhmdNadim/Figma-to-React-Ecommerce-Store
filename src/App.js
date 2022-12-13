import React from 'react'

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Logo from './component/logo';
import Category from './component/category';
import Zara from './component/Zara';
import Seller from './component/Seller';
import Discount from './component/Discount';
import Footer from './component/Footer';
import Footermain from './component/Footermain';

function App() {
  return (
    <>
         <Navbar />
         <Home />
         <Logo />
         <Category />
         <Products />
         <Zara />
         <Seller />
         <Discount />
         <Footer />
         <Footermain />
    </>
    
  );
}

export default App;
