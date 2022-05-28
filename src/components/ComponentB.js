import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
// import { useCounter } from "../contexts/CounterContext";

const ComponentB = () => {
  const ctx = useContext(CounterContext);
  console.log(ctx);

  return (
    <div>
      <button onClick={ctx.increaseCount}>Increase Count</button>
      <button onClick={ctx.decreaseCount}>Decrease Count</button>
    </div>
  );
};

export default ComponentB;
