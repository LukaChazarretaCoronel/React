Advanced React Developer Test
Part 1: Multiple Choice (10 points)
What does the useLayoutEffect hook do differently compared to useEffect?

A)✓ useLayoutEffect runs after painting the DOM, while useEffect runs before.
B) useLayoutEffect runs synchronously after DOM mutations, while useEffect runs asynchronously.
C) useLayoutEffect runs only on initial render, while useEffect runs on every render.
D) There is no difference between useLayoutEffect and useEffect.

What is a higher-order component (HOC)?
A) A function that renders a component and its children.
B) A function that adds new props to a component.
C)✓ A function that takes a component and returns a new component.
D) A function that transforms JSX into HTML.

What is the purpose of the useImperativeHandle hook?
A) To share state between parent and child components.
B)✓ To control child component behavior from a parent component using refs.
C) To optimize the rendering of components with expensive calculations.
D) To manage side effects in a functional component.

When would you use React.PureComponent?
A) When you want a component to update every time state or props change.
B)✓ When you want to prevent a component from re-rendering unnecessarily based on shallow props/state comparison.
C) When you need to prevent child components from re-rendering.
D) When you want to use hooks in class components.

Which statement is true about context in React?
A)✓ React Context is used to fetch data in child components.
B) React Context replaces all use cases for useState.
C) React Context allows for state to be passed deeply through the component tree without passing props manually.
D) React Context can only be used in functional components.
Part 2: Short Answer (20 points)
What are controlled and uncontrolled components in React? Provide an example of each.

What is code splitting in React, and why is it important? How would you implement it in a React app using React Router?
Code splitting es una manera de dividir el codigo en trocitos, esto es importante ya que sirve para cargar lo minimo y necesario y aumentar el rendimiento de la app web para el usuario.
Para implementar code splitting con react router habria que importar los componentes de manera asincrona con React.lazy(), despues renderizarlo como el children de Suspense y llamas un Router y un switch, esto hara que las paginas tengan codigo dividido y que al entrar al Home, About no este consumiendo recursos y que al entrar a ABOUT, Home no este consumiendo recursos, ya que no esta cargado.

Explain how you would implement a custom hook to manage form validation in React. What should this hook return, and how would you use it?



What is server-side rendering (SSR) in React, and how does it differ from client-side rendering (CSR)? When would you prefer SSR?
Server side rendering hace un pre-renderizado del html en el lado del servidor a diferencia del client-side rendering que renderiza el html minimo en el cliente y el resto que se va actualizando lo hace con javascript, yo preferiria usar ssr a la hora de hacer un blog de noticias o algo que necesite que el motor de busquedas averigue el contenido en el servidor por lo que mejora el SEO.

Part 3: Coding Challenges (40 points)
Higher-Order Component (HOC)

1)Higher-Order Component (HOC)
Write a higher-order component (HOC) called withLoading that wraps any component and displays a loading message while data is being fetched. It should accept a loading prop and render the wrapped component only when loading is false.
Bonus: Make the HOC reusable for various data types and components by passing the data prop.

2)useContext with useReducer
Create a simple counter app using useReducer for state management. Implement the counter logic (increment, decrement) using the reducer, and use React.Context to pass the state and dispatch to nested components.
Ensure that you avoid prop drilling by passing the context down to child components and accessing the counter's state/actions from a deeply nested component.

3)React.memo and useCallback Optimization
You have a list of users and a component that renders each user. Optimize the component using React.memo to prevent unnecessary re-renders when the user list does not change. Also, use useCallback to optimize a button that fetches new user data when clicked.

4)Suspense and Lazy Loading
Implement a React component that uses React.Suspense and React.lazy to load a heavy component (like a chart or a large image) lazily. Display a fallback loading message while the component is being loaded.

Fix the performance issue in this component:

const UserCard = React.memo({user}) =>{
return(
   {user})
}

export function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} /> {/* This component is slow */}
        </li>
      ))}
    </ul>
  );
}
Assume that UserCard is a heavy component. How would you optimize it so that it doesn't re-render unnecessarily if the same list of users is passed?
Find and fix the issue in the following code where the state is not updating as expected:

jsx
Copiar código
export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1) //fixed
    }, 1000);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
Grading Criteria
Multiple Choice (10 points): Each correct answer is worth 2 points.
Short Answer (20 points): Clarity, correctness, and depth of explanation will be evaluated.
Coding Challenges (40 points): Correct implementation, adherence to React best practices, and performance optimizations.
Debugging (20 points): Correct identification and fixing of issues in the provided code.
This test dives deeper into advanced patterns like HOCs, useContext with useReducer, and performance tuning with React.memo and useCallback. These skills are essential as you move into more complex React applications.