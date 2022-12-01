import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import { nanoid } from "nanoid";

export default function HomePage() {
  const [cards, setCards] = useState([]);
  console.log(cards);

  function handleSubmit(event) {
    event.preventDefault();
    const thought = event.target.elements.thoughts.value;
    const owner = event.target.elements.owner.value;
    event.target.reset();

    setCards([...cards, { thought: thought, owner: owner, id: nanoid() }]);
  }

  return (
    <>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <hr></hr>
      <StyledBoard>
        {cards.map((card) => {
          return (
            <Card key={card.id} owner={card.owner} thought={card.thought} />
          );
        })}
      </StyledBoard>
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

const StyledBoard = styled.ul`
  display: flex;
  justify-content: row;
  gap: 10px;
`;
