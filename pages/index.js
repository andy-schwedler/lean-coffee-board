import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";

export default function HomePage() {
  const [card, setCard] = useState([]);

  return (
    <>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <Card></Card>
      <Form />
    </>
  );
}

const StyledHeader = styled.h1`
  font-family: monospace;
  text-align: center;
  text-size-adjust: 124px;
`;
