import { useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import { nanoid } from "nanoid";
import { StyledBoard, StyledHeader } from "../styles";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const thought = event.target.elements.thoughts.value;
    const owner = event.target.elements.owner.value;

    setCards([...cards, { thought: thought, owner: owner, id: nanoid() }]);
    event.target.reset();
  }

  function handleDelete(id) {
    setCards(cards.filter((card) => id !== card.id));
    console.log("this ID was deleted from the index.js", id);
  }

  function handleChange(id, para) {
    setCards(
      cards.map((card) => {
        if (card.id === id) return { ...card, thought: para };
        return card;
      })
    );
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
              onDelete={() => handleDelete(card.id)}
              onChange={handleChange}
              id={card.id}
            />
          );
        })}
      </StyledBoard>
      <hr></hr>
      <Form onSubmit={handleSubmit} />
    </>
  );
}

// for Edit-sbumit-button

// const handleChange = (id, thoughts) => {
//   setCards(
//     cards.map((card) => {
//       if (card.id === id) return { ...card, thoughts };
//       return card;
//     })
//   );
// };
