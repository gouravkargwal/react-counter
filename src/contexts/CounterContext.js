import React, { useState, createContext, useContext } from "react";

// export const CounterContext = createContext();
export const CounterContext = createContext();

// export const useCounter = () => {
//   useContext(CounterContext);
// };

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const values = { count, increaseCount, decreaseCount };

  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};
export default CounterContextProvider;
