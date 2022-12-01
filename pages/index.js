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
    setCards([...cards, { thought: thought, owner: owner, id: nanoid() }]);

    event.target.reset();
  }

  function handleDelete(id) {
    setCards(cards.filter((card) => setCards(id !== id)));
  }

  return (
    <>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <hr></hr>
      <StyledBoard>
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              owner={card.owner}
              thought={card.thought}
              onDelete={handleDelete}
            />
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
