import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import {Erreur} from './pages/Erreur';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();