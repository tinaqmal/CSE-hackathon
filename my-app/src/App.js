import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Onboard from './pages/home/onboard';
import Categories from './pages/home/categories';
import Signup from './pages/home/signup';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Onboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
