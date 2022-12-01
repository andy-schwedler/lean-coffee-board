import styled from "styled-components";

export default function Card({ owner, thought }) {
  return (
    <StyledCard>
      <p>{thought}</p>
      <hr></hr>
      <p>{owner}</p>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  text-align: center;
  font-family: monospace;
  list-style-type: none;
  border: 1px solid black;
  margin-top: 10px;
  width: 100px;
  box-shadow: 2px 0px 32px 10px rgba(173, 170, 173, 1);

  p {
    font-family: monospace;
  }
  hr {
    border: 1px dotted;
  }
`;
