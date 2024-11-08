import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import App from './Components/App';
import routes from './Components/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

