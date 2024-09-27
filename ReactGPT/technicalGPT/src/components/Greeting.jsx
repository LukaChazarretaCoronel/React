//Create a simple React component called Greeting that accepts a prop name and displays the message:
//"Hello, [name]!" If no name is provided, it should display "Hello, Stranger!"
export function Greeting({ name }) {
    return <h1>{name ? `Hello ${name}` : 'Hello, Stranger!'};</h1>;
  }