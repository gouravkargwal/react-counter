import React, { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

const ComponentA = () => {
  const ctx = useContext(CounterContext);

  return <div>Count is :{ctx.count}</div>;
};

export default ComponentA;
