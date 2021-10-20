import React from 'react'
import Button from './button/Button'
import { useCounter } from "./hooks/useCounter";
import { ContainerResult } from './CounterStyled'

const Result = () => {
   const { result, setResult } = useCounter()

   function clearCounter() {
      setResult(0)
   }
   return (
      <ContainerResult>
         <h1>{result * 3}</h1>

         <Button onClick={clearCounter}>Clear</Button>
      </ContainerResult>
   )
}

export default Result