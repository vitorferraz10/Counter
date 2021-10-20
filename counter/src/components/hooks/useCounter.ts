import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

export function useCounter() {
  const data = useContext(CounterContext);

  const { result, setResult, handleAdd, handleRemove } = data;

  return { result, setResult, handleAdd, handleRemove };
}
