import React from 'react'
import Navbar from '../component/Navbar'
import HomeComponent from '../component/Home';
import Products from '../component/Products';
import Logo from '../component/logo';
import Category from '../component/category';
import Zara from '../component/Zara';
import Seller from '../component/Seller';
import Discount from '../component/Discount';
import Footer from '../component/Footer';
import Footermain from '../component/Footermain';

function Home() {
  return (
    <>
    <Navbar />
         <HomeComponent />   
         <Logo />
         <Category />
         <Products />
         <Zara />
         <Seller />
         <Discount />
         <Footer />
         <Footermain />

    </>
  )
}

export default Home
