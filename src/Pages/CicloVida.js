import React, { useState } from 'react';

const CicloVida = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [resultado, setResultado] = useState("");

  const mostrarResultado = () => {
    if (nombre && edad) {
      setResultado(`Hola ${nombre}, tienes ${edad} años. Bienvenido al ciclo de vida de React.`);
    } else {
      setResultado("Por favor, completa todos los campos.");
    }
  };

  return (
    <>
      <div className="ciclo-vida-container">
        <h1>Ciclo de Vida de un Componente en React</h1>
        <p>
          El ciclo de vida de un componente en React describe las diferentes 
          fases por las que pasa un componente desde que se monta en el DOM, 
          se actualiza cuando cambian sus estados o props, hasta que se desmonta. 
          Estas fases permiten ejecutar código en momentos específicos para 
          controlar el comportamiento de la aplicación.
        </p>
</div>
 <div>
        <img 
          src="https://www.devmedia.com.br/arquivos/Artigos/43555/fig1.png" 
          alt="Ciclo de vida React" 
          style={{ width: "80%", borderRadius: "12px", margin: "20px 0" }}
        />
</div>
 <div>
        <h2>Ejemplo Interactivo</h2>
        <p>Escribe tu nombre y tu edad, y observa cómo se renderiza la información:</p>

        <div className="formulario">
          <input 
            type="text" 
            placeholder="Ingresa tu nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Ingresa tu edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
          />
          <button onClick={mostrarResultado}>Mostrar Resultado</button>
        </div>

        {resultado && <p className="resultado">{resultado}</p>}
      </div>
    </>
  );
};

export default CicloVida;
