import React from "react";
import { ResultCounterProvider } from "./components/context/CounterProvider";
import Counter from "./components/Counter";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <ResultCounterProvider>
        <Counter />
        <Result />
      </ResultCounterProvider>
    </div>
  );
}

export default App;