import React from 'react';

/**
 * Componente de pie de página que muestra información de copyright y enlaces.
 * 
 * @returns {JSX.Element} Elemento de footer
 */
const Footer = () => {
  return (
    <footer className="app-footer">
      <p>© {new Date().getFullYear()} My React App</p>
      <p>
        Follow us on{' '}
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
    </footer>
  );
};

export default Footer;