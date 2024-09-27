Part 1: Multiple Choice (10 points)
1.	¿Qué hook deberías usar para optimizar el rendimiento memorizando el resultado de un cálculo en React?
o	A) useEffect
o	B) useCallback
•	C) useMemo
o	D) useReducer
2.	When using useEffect, which parameter ensures that the effect runs only once, when the component mounts?
o	A) No dependency array
•	B) An empty dependency array
o	C) A non-empty dependency array
o	D) Passing a function to useEffect
3.	What does React.memo() do when used to wrap a component?
o	A) It makes the component stateful
•	B) It prevents the component from re-rendering if props haven't changed
o	C) It forces the component to always re-render
o	D) It converts a class component to a functional component
4.	Which of the following describes how React's useContext hook is used?
o	A) To manage global state without passing props through intermediate components
o	B) To directly update the state of a parent component
•	C) To trigger side effects in components
•	D) To manage side effects like fetching data
5.	In a React app using React Router, what component is used to define a route that renders only if no other route matches?
o	A) <Route />
•	B) <Redirect />
o	C) <Switch />
o	D) <NotFound />
________________________________________

Part 2: Short Answer (20 points)
1.	Explain the difference between useMemo and useCallback and give an example of when you would use each.
  la diferencia entre useMemo y useCallback es que la primera memoriza el resulado de una función  y la segunda memoriza la funcion en si para ser utilizada como callback
  sus casos de uso pueden ser en el caso de userMemo la de memorizar el resultado de un calculo ya que podria hacer el calculo solo cuando la dependencia cambie 
  y el useCallback podriamos pasarle una funcion y que solo la muestre cuando esta cambien sino nos da el resultado que ya tendria podria usarse para un boton de count.
2.	What are React fragments, and why would you use them instead of wrapping elements in a div? Provide an example.
    Los fragmentos de React nos permiten devolver elementos en el dom que estan alineados con el root y no con un div. por ejemplo a la hora de renderizar componentes.
3.	How does the useReducer hook differ from useState, and when would you prefer using useReducer?
    useReduce hook difiere de useState en que el primero se utiliza para manejar estados mas complejos y cambiarlos mediantes acciones. usaria useReducer cuando tuviese varios valores y buscase que se actualizen juntos.
4.	Describe what happens during React reconciliation and how React optimizes rendering through the diffing algorithm.
    en esencia se compara el virtual DOM con el real DOM de manera heurestica por lo que primero observa lo esencial y ahi aplica los cambios minimos y necesarios para renderizar la web
________________________________________
Part 3: Coding Challenges (40 points)
1.	Create a TodoList component that allows users to add, delete, and toggle tasks as complete/incomplete. Use the useReducer hook to manage the list of tasks and their state.
2.	Implement a useDebounce hook in React. This hook should delay updating a value until after a certain period of inactivity. Use it to debounce a search input that fetches data from an API only when the user has stopped typing for at least 500ms.
3.	Create a component that uses React Router to navigate between three pages: Home, About, and Contact. Display navigation links in each page to allow switching between the pages without refreshing.
4.	Optimize the following component to prevent unnecessary re-renders using React.memo and useCallback:
Copiar código
function ExpensiveComponent({ count, onIncrement }) {
  console.log("ExpensiveComponent rendered");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  return (
    <div>
      <ExpensiveComponent count={count} onIncrement={() => setCount(count + 1)} />
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
    </div>
  );
}
________________________________________
Part 4: Debugging (20 points)
1.	Find and correct the issue in the following code that results in an infinite loop:
import { useEffect, useState } from 'react';

export function FetchDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data));
  }, [data]); // change for an empty independencie[]

  return (
    <div>
      {data ? <p>{data.name}</p> : <p>Loading...</p>}
    </div>
  );
}
2.Identify the issue in the following form component and correct it so that the input field updates as expected:
export function FormComponent() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.inputValue); // Issue here, correct this changing the e.target.inputValue for e.target.value
  }

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </form>
  );
}
________________________________________
Grading Criteria
•	Multiple Choice (10 points): Each correct answer is worth 2 points.
•	Short Answer (20 points): Clarity, correctness, and depth of explanation will be evaluated.
•	Coding Challenges (40 points): Correct implementation, adherence to React best practices, component behavior, and performance optimizations.
•	Debugging (20 points): Correct identification and fixing of issues in the provided code.
________________________________________
This test incorporates more advanced concepts like performance optimization, custom hooks, and React Router, to help you deepen your React knowledge. Dive in, and good luck!
