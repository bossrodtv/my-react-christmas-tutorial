import { useEffect, useState } from "react";

export function UseStateAndEffect() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount((prev) => prev + 10);
  }, []);

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>{count}</p>
    </div>
  );
}
