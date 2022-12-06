import styled from "styled-components";

export const StyledCard = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 25vw;
  align-self: center;
  font-family: monospace;
  list-style-type: none;
  border: 1px solid darkgray;
  padding: 10px 10px 10px 10px;
  box-shadow: 2px 0px 32px 10px rgba(173, 170, 173, 1);
  border-radius: 10px;

  :hover {
    box-shadow: 2px 0px 50px 10px rgba(173, 170, 173, 1);
  }

  :last-child {
    margin-bottom: 20px;
  }

  p {
    font-family: monospace;
    font-size: large;
    width: auto;
    color: darkgray;
    text-align: left;
    padding: 15px;
  }

  p:first-child {
    color: black;
  }

  button {
    border: none;
    background-color: transparent;
    width: 50%;
  }
`;
