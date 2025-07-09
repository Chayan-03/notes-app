import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Home } from './pages/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Important } from './pages/Important';

import { Archive } from './pages/Archive';
import { Bin } from './pages/Bin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/important" element={<Important />} />
      <Route path="/archived" element={<Archive />} />
      <Route path='/bin' element={<Bin />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
