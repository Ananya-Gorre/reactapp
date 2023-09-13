import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RouteLayout from './components/RouteLayout';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import Feedback from './components/Feedback';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Register' element={<Register />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/feedback" element={<Feedback />}></Route>
      <Route path="/product" element={<Product />}></Route>

    </Route>

  ))


  return (
    <div className='App'>
      <RouterProvider router={router} />


    </div>
  );
}

export default App;
