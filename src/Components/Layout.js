import React from 'react';
import { Outlet } from 'react-router-dom';

// Componentes
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

// Estilos
import '../Pages/Css/style.css';

/**
 * Componente de layout principal que estructura la aplicación.
 * Incluye header, navbar, contenido principal y footer.
 * 
 * @returns {JSX.Element} Estructura base de la aplicación
 */
const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Navbar />
      
      <main className="main-content">
        <Outlet /> {/* Renderiza el contenido de las rutas */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;