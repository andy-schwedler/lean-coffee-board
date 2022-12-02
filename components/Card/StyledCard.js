import styled from "styled-components";

export const StyledCard = styled.li`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 150px;
  font-family: monospace;
  list-style-type: none;
  border: 1px solid black;
  margin-top: 10px;
  margin-right: 50px;
  padding: 10px 10px 10px 10px;
  width: 150px;
  box-shadow: 2px 0px 32px 10px rgba(173, 170, 173, 1);
  border-radius: 5px;

  :hover {
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
    width: auto;
  }
`;
