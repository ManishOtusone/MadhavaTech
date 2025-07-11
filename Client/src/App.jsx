import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css'
import Home from './Screens/Home';
import { Contact1 } from "./Screens/Contact1"
import { Service } from "./Screens/Service"
import { AboutUs } from './Screens/AboutUs';
import Login from './Components/login';
import Signup from './Components/Signup';
import AdminDashboard from './Screens/Dashboard';

function App() {


  return (

    <>

      <Router>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact1 />} />
          <Route path='/service' element={<Service />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
