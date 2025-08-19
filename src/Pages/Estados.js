import React, { useState } from 'react';
import './Css/ejemplo.css';

const Estados = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
    <div >
      <h1>Estados (State) en React</h1>

      {/* Definición ampliada */}
      <p>
        El <strong>estado (state)</strong> en React es una estructura que permite a los componentes almacenar 
        y gestionar datos dinámicos que pueden cambiar a lo largo del ciclo de vida de la aplicación. 
        Es decir, el estado hace posible que la interfaz de usuario se actualice de forma automática 
        cada vez que los datos cambian.
      </p>
      <p>
        A diferencia de las <em>props</em>, que se utilizan para enviar datos desde un componente padre 
        a un hijo y son <strong>inmutables</strong>, el estado es <strong>interno y mutable</strong>. 
        Esto significa que cada componente puede controlar su propio estado y modificarlo 
        mediante la función <code>setState</code> en componentes de clase o el hook 
        <code> useState</code> en componentes funcionales.
      </p>
      <p>
        Gracias al uso de estados, se pueden manejar interacciones de usuario (como clics o formularios), 
        alternar vistas, crear contadores, mostrar/ocultar elementos y mucho más, 
        convirtiendo la aplicación en una experiencia interactiva y dinámica.
      </p>
      </div>
      {/* Imagen ilustrativa */}
      <div>
        <img 
          src="https://miro.medium.com/v2/resize:fit:900/0*HemFwK6FJ1T9gNtz.png" 
          alt="Diagrama de estados en React" 
          className="imagen-ejemplo"
        />
      </div>

      {/* Ejemplo de código */}
      <div >
        <h2>Ejemplo práctico</h2>
        <pre>
{`import React, { useState } from 'react';

function Contador() {
  // Definimos el estado con useState
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h3>Valor del contador: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Disminuir
      </button>
      <button onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </div>
  );
}

export default Contador;`}
        </pre>
      </div>

      {/* Bloque de código interactivo */}
      <div className="">
        <h2>Prueba interactiva</h2>
        <p>El contador actual es: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
      </div>

    </>
  );
};

export default Estados;
