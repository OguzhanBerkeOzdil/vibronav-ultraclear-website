/**
 * Component: main
 * Purpose: Application entry point and React DOM rendering
 * Author: Oğuzhan Berke Özdil
 * Last edit: 27 January 2025
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Handle GitHub Pages SPA routing
const pathname = window.location.search.match(/\?p=(.*)/);
if (pathname) {
  window.history.replaceState(null, '', pathname[1]);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
