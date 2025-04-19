import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Toppage from './pages/toppage'
import Works from './pages/works'
import About from './pages/about'


const App = () => {
  

  return (
    <HashRouter>
      <Routes>
        {/* Top Page */}
        <Route path="/" element={<Toppage />} />
        {/* works */}
        <Route path="/WORKS" element={<Works />} />
        {/* about */}
        <Route path="/ABOUT" element={<About />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
