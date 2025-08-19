import React, { useState } from 'react';
import './Css/ejemplo.css';

function ComponenteHijo({ nombre, edad }) {
  return (
    <div className="card">
      <h3>Hola, {nombre}!</h3>
      <p>Tienes {edad} años.</p>
    </div>
  );
}

// Página principal de Props
const Props = () => {
  // Estados para manejar los inputs
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [personas, setPersonas] = useState([]);

  // Manejo del envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "" && edad.trim() !== "") {
      setPersonas([...personas, { nombre, edad }]);
      setNombre("");
      setEdad("");
    }
  };

  return (
    <>
      <div className="props-container">
        <h1>Props en React</h1>
        <p>
          Las <strong>props</strong> (abreviatura de propiedades) son uno de los conceptos 
          fundamentales de React. Su función principal es <strong>permitir la comunicación 
          de datos entre componentes</strong>, es decir, pasar información de un 
          <strong> componente padre</strong> hacia un <strong>componente hijo</strong>. 
        </p>
        <p>
          Se definen como <strong>atributos</strong> en el JSX del padre, muy similares a los 
          atributos de una etiqueta HTML, y el componente hijo puede acceder a ellas a través 
          del objeto <code>props</code> o mediante <strong>desestructuración</strong>.
        </p>
        <p>
          Las props son <strong>inmutables</strong>: un componente hijo <u>no puede 
          modificarlas</u>, solo usarlas. Esta característica garantiza un <strong>flujo de datos unidireccional</strong> 
          (de padre a hijo), lo que hace que la aplicación sea más predecible y fácil de depurar.
        </p>
        <p>
          A diferencia del <strong>estado (state)</strong>, que pertenece a un componente y 
          puede cambiar con el tiempo, las props son <strong>estáticas para el hijo</strong>, 
          pero pueden actualizarse si el padre cambia el valor que envía.  
          Gracias a esto, podemos crear <strong>componentes reutilizables y dinámicos</strong>, 
          adaptando su comportamiento según los datos que reciban.
        </p>
      </div>

      <div>
        <img 
          src="https://dotnettrickscloud.blob.core.windows.net/article/5720250716183413.png" 
          alt="Ejemplo Props" 
          className="props-image" 
        />
      </div>

      <div>
        {/* Ejecución real del código */}
        <div className="example-box">
          <h3>Resultado en vivo:</h3>
          <ComponenteHijo nombre="Juan" edad={25} />
          <ComponenteHijo nombre="María" edad={30} />
          <ComponenteHijo nombre="Carlos" edad={28} />
        </div>

        <p>
          Como puedes ver, el componente padre <code>Props</code> pasa las props 
          <code>nombre</code> y <code>edad</code> a cada <code>ComponenteHijo</code>, 
          que las utiliza para mostrar mensajes personalizados.
        </p>
      </div>

      <div>
        <h2>Ejemplo interactivo con Props</h2>
        <p>Escribe un nombre y una edad para enviar datos al componente hijo:</p>

        {/* Formulario */}
        <form onSubmit={manejarEnvio} className="form-box">
          <input 
            type="text" 
            placeholder="Nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
          <input 
            type="number" 
            placeholder="Edad" 
            value={edad} 
            onChange={(e) => setEdad(e.target.value)} 
          />
          <button type="submit">Agregar</button>
        </form>

        {/* Resultado ejecutado con props */}
        <div className="example-box">
          <h3>Resultado en vivo:</h3>
          {personas.map((p, index) => (
            <ComponenteHijo key={index} nombre={p.nombre} edad={p.edad} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Props;
