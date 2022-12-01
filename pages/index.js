import { useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import { nanoid } from "nanoid";
import { StyledBoard, StyledHeader } from "../styles";

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
    setCards(cards.filter((card) => setCards(id !== card.id)));
    console.log(cards);
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
