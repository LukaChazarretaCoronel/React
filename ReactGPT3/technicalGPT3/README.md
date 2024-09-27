Which hook allows you to synchronize a component's state with a browser's localStorage?
A)✓ useEffect
B) useMemo
C) useReducer
D) useSyncExternalStore

What is Concurrent Mode in React?
A) A mode that enables multiple renders to happen simultaneously.
B)✓ A feature that allows React to interrupt rendering to handle high-priority updates.
C) A way of running side effects synchronously.
D) A new way of managing component state introduced in React 18.

What does the useDeferredValue hook do?
A)✓ It defers updates to the next render cycle.
B) It returns the latest state value but defers the update to the UI.
C) It returns a value but defers rendering the component until other rendering is complete.
D) It allows you to cancel a render operation.

What is the primary difference between useCallback and useMemo?
A) useCallback caches values, while useMemo caches functions.
B)✓ useCallback is used for memoizing functions, while useMemo is used for memoizing values or results of a function.
C) useCallback re-runs on every render, while useMemo runs only once.
D) useMemo works with class components, but useCallback works with functional components only.

Which feature of React 18 enables React.Suspense for data fetching?
A) Server-Side Rendering (SSR)
B) Concurrent Mode
C)✓Suspense for Data Fetching
D) Automatic Batching
Part 2: Short Answer (20 points)
Explain the difference between optimistic UI updates and traditional UI updates. When would you use an optimistic update, and what are the potential risks?
la diferencia entre optimistic UI y la tradicional es que la primera actualiza el render con la accion del usuario, a pesar de no tener el exito de la accion y encaso que haya un error se vuelve al estado antes, la tradicional en cambio te muestra un loading y espera a que llegue la informacion para cambiar el estado, esto nos puede dar una app menos responsiva y dinamica pero mas exacta, la optimistic se utiliza en redes sociales, en app de videos, etc. Los riesgos potenciales pueden ser que la accion no sea exitosa y tener que volver al estado original

What are refs in React, and what are they used for? Explain the difference between useRef and createRef.
Las refs son una herramienta que permite manipular elementos del DOM que no necesitan ser renderizados nuevamente, y permite manejarlos imperativamente, se usar para enfocar elementos, seleccionar texto o almacenar valores mutables. la diferencia entre useRef y createRef es que la primera Mantiene la misma referencia, se usa en componentes funcionales y la segunda cambia la referencia y se usa en componentes de clase.

What are React portals, and why would you use them? Provide an example where React portals solve a real-world problem.
React portals es codigo avanzo que nos permite renderizar componentes children de cierto nodo del DOM pero en otro nodo del DOM que no tiene nada  que ver, esto se podria utilizar por ejemplo en un modal renderizo lejos de la jerarquia del DOM principal para evitar problemas de estilo con CSS y mejorar la accesibilidad

Describe the purpose of useTransition in React 18. How does it improve the user experience in terms of rendering performance?
useTransition nos permite hacer que una actualizacion del estado tenga una prioridad menos y que React se concentre mas en otras interacciones, una vez que la transicion se completa se renderizan los datos,  esta performance de renderizado hace que el usuario perciba menos latencia, que la interfaz sea mas receptiva y si la aplicación es grande se concentre en los demas componentes mientras este se carga aparece un loading

Part 3: Coding Challenges (40 points)
Custom Hook for Local Storage Syncing

Write a custom hook called useLocalStorageState that syncs a piece of state with the browser's localStorage. The hook should accept a key and an initial value, and should return the state and a function to update it. Ensure that the state is initialized from localStorage if a value exists and updates localStorage when the state changes.
useReducer with Asynchronous Actions

Implement a useReducer function for managing the state of a data-fetching operation. The reducer should handle three actions: FETCH_INIT, FETCH_SUCCESS, and FETCH_FAILURE. Integrate the reducer with useEffect to trigger an API call when the component mounts, and display a loading state, data, or an error message based on the current state of the reducer.
Implement Infinite Scrolling

Create a component that implements infinite scrolling using the IntersectionObserver API. Fetch and append more items to a list as the user scrolls to the bottom. Ensure that the new items are fetched from a mock API and seamlessly added to the existing list without re-rendering the entire list.
Optimizing a React Component with useMemo, useCallback, and React.memo

Given a parent component that renders a list of products, optimize the child component (ProductCard) to prevent unnecessary re-renders. Use useMemo for the list of products, useCallback for the onAddToCart function, and wrap the ProductCard in React.memo to optimize performance. Include a button to sort the product list without re-rendering the entire list.
Part 4: Debugging (20 points)
Fix the following memory leak issue:

jsx
Copiar código
import React, { useState, useEffect } from 'react';

export function MemoryLeakComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        if (mounted) {
          setData(data);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return <div>{data ? <p>{data.name}</p> : <p>Loading...</p>}</div>;
}
Fix the issue with the following reducer logic:

jsx
Copiar código
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action');
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
Issue: The reset action doesn't seem to reset the count to the initial value. Fix the issue so the reset action works as expected.

Grading Criteria
Multiple Choice (10 points): Each correct answer is worth 2 points.
Short Answer (20 points): Clarity, correctness, and depth of explanation will be evaluated.
Coding Challenges (40 points): Correct implementation, adherence to React best practices, and performance optimizations.
Debugging (20 points): Correct identification and fixing of issues in the provided code.
