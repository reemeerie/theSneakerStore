***Proyecto E-commerce de Zapatillas***

Este proyecto corresponde al primer trabajo desarrollado con React, realizado como proyecto final del curso de React en Coderhouse.
Consiste en un e-commerce de zapatillas, enfocado en la aplicación práctica de los conceptos fundamentales del ecosistema React.

**Tecnologías utilizadas**

- React
- React-router-dom para el ruteo entre vistas
- Material UI (utilizado de forma puntual para algunos componentes)
- Axios para la gestión de peticiones HTTP
- Formik para el manejo de formularios
- SweetAlert2 para la implementación de notificaciones tipo toast

**Backend y persistencia de datos**

En una primera etapa, el proyecto utilizó Firebase como sistema de almacenamiento de productos.
Posteriormente, como parte de un proceso de aprendizaje más profundo en backend, esta solución fue reemplazada por una API desarrollada en Node.js, encargada de la gestión de:

- Productos (zapatillas)
- Órdenes de compra
- Usuarios

Los datos se almacenan en una base de datos NoSQL alojada en MongoDB Atlas.

_⚠️ Nota: Si la sección de productos no carga o presenta errores, es posible que el clúster de MongoDB Atlas se encuentre inactivo._

**Objetivo y aprendizaje**

Este proyecto representó un primer acercamiento práctico a:

- El uso de hooks en React
- La gestión de estado global mediante Context API
- La integración de librerías de estilos
- El ruteo de la aplicación con react-router-dom

**Próximos pasos**

A tres años de haber desarrollado este proyecto, y con mayor experiencia, mejores prácticas y una formación universitaria en curso, el objetivo es recrear este e-commerce utilizando un stack más robusto y moderno:

Frontend:
- TypeScript
- Mantine UI
- TanStack Query
- React Router

Backend:
- NestJS
- MySQL

_Este repositorio se mantiene como referencia de mis primeros pasos en React y como punto de comparación con proyectos más recientes._