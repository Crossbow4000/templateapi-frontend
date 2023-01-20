import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/home-page/home-page.js';
import Dashboard from './pages/dashboard/dashboard.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
);
