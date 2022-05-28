import React, { useState, useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const MyCounter = () => {
  const ctx = useContext(CounterContext);
  console.log(ctx);
  // const [count, setCount] = useState(0);

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };
  return (
    <>
      <h3>Counter Component</h3>
      {/* <p>Count is:{ctx.count}</p> */}
      <ComponentA />
      <ComponentB />
      {/* <button onClick={ctx.increaseCount}>Increase Count</button>
      <button onClick={ctx.decreaseCount}>Decrease Count</button> */}
    </>
  );
};

export default MyCounter;
