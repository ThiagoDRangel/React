import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './services/Router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>

);