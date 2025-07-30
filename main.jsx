import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/global.css'; // Puedes crear este archivo para estilos globales o quitar esta línea

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);