import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState[0];
  const incHandler = () => {
    setNumber(number + 1);
  };
  const decHandler = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <button onClick={incHandler}>+</button>
      <label htmlFor="">{Number}</label>
      <button onClick={decHandler}>-</button>
    </div>
  );
};
export default Counter;
