import { useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState(0);

  const Aumentar = () => {
    setCount(count + 1);
  };

  const Decrementar = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={Decrementar}>-</button>
      <span>{count}</span>
      <button onClick={Aumentar}>+</button>
    </div>
  );
};
