import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerResult = styled.div`
  width: 20%;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 auto;
    border: 2px dashed #000;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 50px;
  }

  Button {
    background-color: #ff5252;
    font-weight: bold;
  }
`;
