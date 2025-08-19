import React, { useState } from 'react';
import './Css/ejemplo.css';

const VirtualDom = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
    <div>
      <h1>Virtual DOM en React</h1>

      {/* Definición ampliada */}
      <p>
        El <strong>Virtual DOM</strong> es una representación en memoria del DOM real.
        React utiliza el Virtual DOM para optimizar las actualizaciones de la interfaz de usuario.
        Cuando el estado de un componente cambia, React crea un nuevo Virtual DOM y lo compara con el anterior
        utilizando un algoritmo de reconciliación. Solo se actualizan los elementos que han cambiado,
        lo que mejora el rendimiento y la eficiencia de la aplicación.
      </p>
</div>
    <div>
      {/* Imagen ilustrativa */}
      <img 
        src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1649655403381%2FYQwkgNyh-.png%3Fw%3D1200%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng" 
        alt="Ejemplo de Virtual DOM" 
        className="virtual-dom-img"
      />
    </div>

      {/* Bloque de código interactivo */}
      <div className="code-demo">
        <h2>Ejemplo interactivo</h2>
        <p>Haz clic en el botón y observa cómo solo cambia el número (React usa el Virtual DOM para evitar recargar todo el contenido).</p>
        
        <p>Contador: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>

    </>
  );
};

export default VirtualDom;
