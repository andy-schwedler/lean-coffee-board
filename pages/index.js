import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";

export default function HomePage() {
  const [cards, setCards] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    const thought = event.target.elements.thoughts.value;
    const owner = event.target.elements.owner.value;
    event.target.reset();
    event.target.owner.focus();
    setCards([...cards, { thought: thought, owner: owner }]);
  }

  return (
    <>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <hr></hr>
      <Card card={cards}></Card>
      <hr></hr>
      <Form onSubmit={handleSubmit} />
    </>
  );
}

const StyledHeader = styled.h1`
  font-family: monospace;
  text-align: center;
  text-size-adjust: 124px;
`;
