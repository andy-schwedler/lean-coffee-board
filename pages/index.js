import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import { nanoid } from "nanoid";
import { StyledBoard, StyledHeader } from "../styles";
import styled from "styled-components";

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
  }

  function handleChange(id, para) {
    setCards(
      cards.map((card) => {
        if (card.id === id) return { ...card, thought: para };
        return card;
      })
    );
  }
  // get task from here https://lean-coffee-board-api-nextjs.vercel.app/
  // async function getCards() {
  //   const response = await fetch(
  //     "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
  //   );
  //   const cardsList = await response.json();
  //   setCards(cardsList); // update of a state variable (or thoughts, notes, cards, etc.)
  // }
  // useEffect(() => {
  //   getCards();
  // }, []);

  return (
    <>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <hr></hr>
      <StyledScrollContainer>
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
      </StyledScrollContainer>
      <hr></hr>
      <Form onSubmit={handleSubmit} />
    </>
  );
}

const StyledScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  box-sizing: content-box;
  width: 100%;
  overflow: auto;
`;
