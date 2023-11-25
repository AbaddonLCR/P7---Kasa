import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Lodging from './pages/lodging/Lodging';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;