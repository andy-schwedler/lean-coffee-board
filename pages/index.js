import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";
import { StyledBoard, StyledHeader, StyledScrollContainer } from "../styles";
import styled from "styled-components";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const thought = event.target.elements.thoughts.value;
    const owner = event.target.elements.owner.value;

    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: thought, name: owner }),
      }
    );

    getCards();

    event.target.reset();
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
  async function getCards() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    const cardsList = await response.json();
    const translatedCards = cardsList.map((card) => {
      return {
        id: card.id,
        thought: card.text,
        owner: card.name,
      };
    });
    setCards(translatedCards); // update of a state variable (or thoughts, notes, cards, etc.)
  }
  useEffect(() => {
    getCards();
  }, []);

  async function handleDeleteQuestion(id) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
    getCards();
  }

  return (
    <>
      <StyledHeader>Lean Coffee Board</StyledHeader>
      <StyledScrollContainer>
        <StyledBoard>
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                owner={card.owner}
                thought={card.thought}
                onDelete={() => handleDeleteQuestion(card.id)}
                onChange={handleChange}
                id={card.id}
              />
            );
          })}
        </StyledBoard>
      </StyledScrollContainer>
      <Form onSubmit={handleSubmit} />
    </>
  );
}
