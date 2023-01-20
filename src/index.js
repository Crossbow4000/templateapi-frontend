import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import HomePage from './pages/home-page/home-page.js';
import Dashboard from './pages/dashboard/dashboard.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
