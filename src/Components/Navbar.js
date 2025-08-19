import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de navegación con enlaces a las diferentes páginas.
 * 
 * @returns {JSX.Element} Barra de navegación
 */
const Navbar = () => {
  return (
    <nav className="app-navbar">
      <ul>
        <li className="logo">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" 
            alt="React Logo" 
          />
        </li>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="Props">Props</Link></li>
        <li><Link to="Estados">Estados (State). </Link></li>
        <li><Link to="CicloVida">Ciclo de vida de un componente.</Link></li>
        <li><Link to="Hooks">Hooks</Link></li>
        <li><Link to="VirtualDom">Virtual DOM.</Link></li>

        <li><Link to="">Redux.</Link></li>


        

      </ul>
    </nav>
  );
};

export default Navbar;