import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Home } from './pages/Home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { Important } from './components/Important';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/important" element={<Important />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
