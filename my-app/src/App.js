import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Onboard from './pages/home/onboard';
import Categories from './pages/home/categories';
import Signup from './pages/home/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Onboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
