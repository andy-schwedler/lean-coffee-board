import styled from "styled-components";

export default function Cards() {
  return (
    <StyledCard>
      <li>Text</li>
      <p>Author</p>
    </StyledCard>
  );
}

const StyledCard = styled.ul`
  list-style-type: none;
  border: darkgray;

  li {
    font-style: italic;
  }
  p {
    font-family: monospace;
    color: orangered;
  }
`;
