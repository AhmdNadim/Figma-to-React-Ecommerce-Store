import React from 'react';
import { Route, Routes, Router} from "react-router-dom";
import './App.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignPage from './pages/sign';


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
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/sign",
    element: <SignPage/>,
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
