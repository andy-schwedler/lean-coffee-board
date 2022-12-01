import styled from "styled-components";

export default function Card({ owner, thought, onDelete, id }) {
  function handleDelete(id) {
    setCards(cards.filter((card) => setCards(card.id !== card.id)));
    console.log(cards);
  }

  return (
    <StyledCard>
      <p>{thought}</p>
      <hr></hr>
      <p>{owner}</p>
      <button onClick={() => onDelete(id)}>🙅🏽‍♂️</button>
      <button>📝</button>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  text-align: center;
  font-family: monospace;
  list-style-type: none;
  border: 1px solid black;
  margin-top: 10px;
  margin-right: 50px;
  width: 100px;
  box-shadow: 2px 0px 32px 10px rgba(173, 170, 173, 1);

  :hover {
    color: orangered;
    box-shadow: 2px 0px 50px 10px rgba(173, 170, 173, 1);
  }

  p {
    font-family: monospace;
    width: auto;
  }
  hr {
    border: 1px dotted;
  }
  button {
    border: none;
    background-color: white;
  }
`;
