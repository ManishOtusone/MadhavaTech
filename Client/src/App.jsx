import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './Screens/Home';
import { Contact1 } from "./Screens/Contact1"
import { Service } from "./Screens/Service"
import { AboutUs } from './Screens/AboutUs';


function App() {


  return (

    <>

      <Router>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact1 />} />
          <Route path='/service' element={<Service />} />
          <Route path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
