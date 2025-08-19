import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Componente principal
import App from './App';

/**
 * Punto de entrada de la aplicación React.
 * Configura el enrutador y renderiza la aplicación.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-proyecto-Info"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);