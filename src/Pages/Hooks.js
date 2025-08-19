import React, { useState } from 'react';
import './Css/ejemplo.css';

/**
 * COMPONENTE FUNCIONAL CON HOOKS
 * 
 * Este componente demuestra:
 * - Uso de componentes funcionales con funciones flecha
 * - Manejo de estado con useState
 * - Sintaxis moderna de React con Hooks
 */
const Hooks = () => {
  // Estados para la calculadora
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  // Estados para la compra
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [resultadoCompra, setResultadoCompra] = useState('');

  /**
   * FUNCIÓN SUMAR
   * 
   * Usa estados en lugar de manipulación directa del DOM
   * Realiza validación de números
   * Actualiza el estado con el resultado
   */
  const sumar = () => {
    // Validación de valores numéricos
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setResultado('Por favor ingrese números válidos.');
      return;
    }
    
    // Calcula y actualiza el estado con el resultado
    const resultadoCalculado = parseFloat(num1) + parseFloat(num2);
    setResultado(`Resultado: ${resultadoCalculado}`);
  };

  /**
   * FUNCIÓN COMPRA
   * 
   * Calcula el total de una compra usando estados
   * Valida campos obligatorios
   * Formatea el resultado con separadores de miles
   */
  const compra = () => {
    // Validación de campos completos
    if (!producto || isNaN(parseFloat(precio)) || isNaN(parseFloat(cantidad))) {
      setResultadoCompra('Por favor complete todos los campos correctamente.');
      return;
    }
    
    // Calcula y formatea el total
    const total = parseFloat(precio) * parseFloat(cantidad);
    setResultadoCompra(`Total ${producto}: ${total.toLocaleString('es-ES')}`);
  };

  /**
   * LIMPIAR CAMPOS
   * 
   * Reinicia todos los estados a valores vacíos
   */
  const limpiarCampos = () => {
    // Limpiar calculadora
    setNum1('');
    setNum2('');
    setResultado('');
    
    // Limpiar compra
    setProducto('');
    setPrecio('');
    setCantidad('');
    setResultadoCompra('');
  };

  return (
    <>
      {/* SECCIÓN DE EXPLICACIÓN */}
      <div className="ejemplo-container">
        <h1>React con Hooks </h1>
        <p>En React, los hooks son funciones especiales que te permiten "enganchar" el estado y otras características de React a componentes funcionales. En esencia, los hooks son una forma de utilizar el estado y el ciclo de vida de los componentes de clase, pero en componentes funcionales, sin necesidad de usar clases. </p>
 
         <h4>Tipos de hooks:</h4>
        <div>
            <ul>
                <li> <strong>useState:</strong> Permite añadir estado a un componente funcional. </li>
                <li> <strong>useEffect:</strong> Permite ejecutar efectos secundarios (como peticiones HTTP o interacciones con el DOM) en componentes funcionales.  </li>
                <li> <strong>useContext:</strong> Permite acceder al contexto de React desde un componente funcional.    </li>
                <li><strong>useRef:</strong> Permite crear referencias a elementos del DOM o valores persistentes que no se reinician en cada renderizado.
                </li>
            </ul>
        </div>
      </div>

      {/* CALCULADORA BÁSICA */}
      <div className="ejemplo-container">
        <div className="calculadora">
          <h2>Calculadora con Hooks</h2>
          <p>Suma dos números usando useState para manejar el estado</p>
          
          <form>
            <input 
              type="number" 
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="Número 1" 
              required 
            />
            <input 
              type="number" 
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="Número 2" 
              required 
            />
            <button type="button" onClick={sumar}>Calcular</button>
            <button type="button" onClick={limpiarCampos}>Limpiar</button>
            <span>{resultado}</span>
          </form>
        </div>
      </div>

      {/* CALCULADORA DE COMPRAS */}
      <div className="ejemplo-container">
        <div className="compra-productos">
          <h2>Calculadora de Compras con Hooks</h2>
          <p>Calcula el total usando useState para manejar el estado</p>
          <form>
            <input 
              type="text" 
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Producto" 
              required 
            />
            <input 
              type="number" 
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio" 
              required 
            />
            <input 
              type="number" 
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              placeholder="Cantidad" 
              required 
            />
            <button type="button" onClick={compra}>Calcular</button>
            <button type="button" onClick={limpiarCampos}>Limpiar</button>
            <span>{resultadoCompra}</span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hooks;