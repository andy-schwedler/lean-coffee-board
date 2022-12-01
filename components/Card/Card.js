import styled from "styled-components";

export default function Cards({ card }) {
  return (
    <StyledCard>
      <p>Text</p>
      <p>Author</p>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  text-align: center;
  font-style: italic;

  p {
    font-family: monospace;
    color: orangered;
  }
`;
