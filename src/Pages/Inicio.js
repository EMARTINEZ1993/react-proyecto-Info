import React from 'react';

const Inicio = () => {

    return (
        <>
            <div className="Inicio">
                <h1>Que es React?</h1>
                <p>React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres.</p>
                <p>React se basa en componentes, que son bloques de construcción reutilizables que pueden manejar su propio estado y lógica. Esto permite a los desarrolladores crear aplicaciones web complejas de manera más eficiente y organizada.</p>
                <p>Una de las características más destacadas de React es su uso del Virtual DOM, que mejora el rendimiento al minimizar las actualizaciones directas al DOM real. Esto permite que las aplicaciones sean más rápidas y responsivas.</p>
                <p>React también se integra fácilmente con otras bibliotecas y frameworks, lo que lo convierte en una opción popular para el desarrollo de aplicaciones web modernas. Además, su ecosistema incluye herramientas como React Router para el enrutamiento y Redux para la gestión del estado, lo que amplía aún más sus capacidades.</p>
                <div>
                    <img src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png" alt="React Logo" />
                </div>
                <p>En resumen, React es una poderosa herramienta para construir interfaces de usuario interactivivas y eficientes, y su popularidad continúa creciendo en la comunidad de desarrollo web.</p>
            </div> 
            <div>
                <h2>¿Por qué usar React?</h2>
                <ul>
                    <li><strong>Componentes reutilizables:</strong> Facilita el desarrollo y mantenimiento de aplicaciones.</li>
                    <li><strong>Virtual DOM:</strong> Mejora el rendimiento al optimizar las actualizaciones del DOM.</li>
                    <li><strong>Gran comunidad:</strong> Amplio soporte y recursos disponibles.</li>
                    <li><strong>Integración con otras tecnologías:</strong> Compatible con diversas bibliotecas y frameworks.</li>
                </ul>
            </div>
            <div>
                <h2>¿Qué herramienta Necesito para Iniciar con React?</h2>
                <p>Puedes comenzar con React utilizando herramientas como Create React App, que configura automáticamente un entorno de desarrollo para ti. También necesitarás tener Node.js y npm instalados en tu máquina.</p>
                <ul>
                    <li><strong>Visual Studio Code:</strong> Un editor de código fuente muy popular entre los desarrolladores de React. </li>
                    <li><strong>Node.js:</strong> Un entorno de ejecución para JavaScript en el servidor. </li>
                    <li><strong>npm:</strong> El gestor de paquetes de Node.js, que te permite instalar bibliotecas y dependencias. </li>
                </ul>

                <div>
                    <img src="https://tebyansmart.com/wp-content/uploads/2023/01/5193198472265728.png" alt="React Creator Logo" />
                </div>
            </div>

            <div>
                <h2>¿Cómo puedo aprender React?</h2>
                <p>Existen numerosos recursos para aprender React, incluyendo la documentación oficial, tutoriales en línea, cursos y libros. Aquí hay algunas recomendaciones:</p>
                <ul>
                    <li><strong>Documentación oficial de React:</strong> Es un excelente punto de partida para entender los conceptos básicos y avanzados.</li>
                    <li><strong>Tutoriales en línea:</strong> Plataformas como freeCodeCamp, Codecademy y Udemy ofrecen cursos interactivos.</li>
                    <li><strong>Libros:</strong> Hay varios libros disponibles que cubren desde los fundamentos hasta técnicas avanzadas en React.</li>
                </ul>   
            </div>
        </>
    );  
}

export default Inicio;
