import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes de páginas
// Componente de layout
import Layout from './Components/Layout';
import Inicio from './Pages/Inicio';
import Props from './Pages/Props'
import Estados from './Pages/Estados';

import Hooks from './Pages/Hooks';
import CicloVida from './Pages/CicloVida';
import VirtualDom from './Pages/VirtualDom';




// Estilos globales
import './App.css';

/**
 * Componente principal de la aplicación que configura las rutas.
 * 
 * @returns {JSX.Element} Estructura de rutas de la aplicación
 */
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="Props" element={<Props />} />
        <Route path="Estados" element={<Estados />} />
        <Route path="Hooks" element={<Hooks />} />
        <Route path="CicloVida" element={<CicloVida />} />
        <Route path="VirtualDom" element={<VirtualDom />} />
       
      </Route>
    </Routes>
  );
};

export default App;