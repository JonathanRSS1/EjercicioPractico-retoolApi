import { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Welcome from './pages/welcome'
import Home from './pages/home';
import Products from './pages/products';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
             <Route path="/products/:id?" element={<Products />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
