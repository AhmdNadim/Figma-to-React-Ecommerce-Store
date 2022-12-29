import React from 'react';
import './App.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignPage from './pages/sign';
import Products from './component/Products';
import Product from './component/Product';
import ContactPage from './pages/contact';


import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/product",
    element: <Products/>,
  },
  {
    path: "/products/:id",
    element: <Product/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/sign",
    element: <SignPage/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
]);



function App() {
  return (
    <>
    <RouterProvider router={router} />
    </> 
  );
}

export default App;
