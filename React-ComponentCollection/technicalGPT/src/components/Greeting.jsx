export function Greeting({ name }) {
    return <h1>{name ? `Hello ${name}` : 'Hello, Stranger!'};</h1>;
  }