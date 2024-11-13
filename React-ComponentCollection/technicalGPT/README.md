# ReactGPT 🚀

Este repositorio contiene una serie de componentes de React que cubren conceptos avanzados de React como hooks personalizados, debounce, uso de `useReducer` y mucho más.

## Descripción del Proyecto

ReactGPT es una colección de componentes para ilustrar patrones de desarrollo en React, optimización de rendimiento y buenas prácticas. Es útil tanto para principiantes avanzados como para desarrolladores con experiencia que desean profundizar en temas como hooks personalizados y enrutamiento en React.

## Componentes Principales

1. **Count** - Un contador simple con funcionalidad de incremento y decremento.
2. **DataFetcher** - Componente que obtiene datos desde una API y muestra una lista.
3. **DebounceFunction** - Entrada de búsqueda con debounce que evita solicitudes excesivas mientras el usuario escribe.
4. **Greeting** - Componente de saludo que muestra un mensaje personalizado.
5. **MultipleForms** - Formulario simple para capturar nombre de usuario y correo electrónico.
6. **TodoList** - Lista de tareas que permite agregar, eliminar y marcar como completadas las tareas, utilizando `useReducer`.
7. **useDebounce Hook** - Hook personalizado para aplicar debounce a cualquier valor.

## Conceptos Avanzados de React

Este proyecto fue desarrollado con el objetivo de profundizar en temas avanzados de React. Aquí están algunos de los conceptos y optimizaciones abordados:

- **Memorización de Funciones y Cálculos:** Uso de `useMemo` y `useCallback` para optimizar el rendimiento en componentes que realizan cálculos pesados o se vuelven a renderizar frecuentemente.
- **Enrutamiento con React Router:** Navegación entre múltiples páginas (Home, About, Contact) sin recargar la página.
- **Manejo de Estado Complejo con `useReducer`:** Implementación de una lista de tareas (Todo List) que permite agregar, eliminar y marcar tareas completadas/incompletas.
- **Debounce con Hooks Personalizados:** Implementación de un hook `useDebounce` para optimizar el comportamiento de un input de búsqueda que obtiene datos de la API.

> _Estos conceptos fueron evaluados en un test avanzado de React, el cual incluye ejercicios de optimización, debugging, y manejo de hooks personalizados._


## Licencia
Este proyecto está bajo la Licencia MIT.