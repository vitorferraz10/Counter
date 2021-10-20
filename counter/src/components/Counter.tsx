import React from "react";
import Button from "./button/Button";
import { useCounter } from "./hooks/useCounter";
import { Container } from "./CounterStyled";

const Counter = () => {
   const { result, handleAdd, handleRemove } = useCounter();

   console.log(result);
   return (
      <Container>
         <Button onClick={handleRemove}>REMOVE</Button>
         <h1>{result}</h1>
         <Button onClick={handleAdd}>ADD</Button>
      </Container>
   );
};

export default Counter;