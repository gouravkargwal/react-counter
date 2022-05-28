import "./App.css";
import MyCounter from "./components/MyCounter";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context API</h1>
        <MyCounter />
      </div>
    </CounterContextProvider>
  );
}

export default App;
