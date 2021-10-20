import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

type CounterResultProps = {
   result: number,
   a: string,
   setResult: React.Dispatch<SetStateAction<number>>
   handleAdd: () => void,
   handleRemove: () => void,
}

type ResultProps = {
   children: ReactNode
}
export const CounterContext = createContext({} as CounterResultProps)

export function ResultCounterProvider({ children }: ResultProps) {
   const [result, setResult] = useState(0)

   function handleAdd() {
      setResult(result + 1)
   }
   function handleRemove() {
      setResult(result - 1)
   }

   let a = `Hello`

   return (
      <CounterContext.Provider value={{ result, setResult, handleAdd, handleRemove, a }}>
         {children}
      </CounterContext.Provider>
   );
}