import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 0px;

  input {
    align-items: center;
    border: 1px solid darkgray;
    margin: 10px;
    height: 5vh;
    width: 50vw;
    background-color: whitesmoke;
    border-color: white;
    border-radius: 5px;
  }

  input:placeholder-shown {
    font-style: italic;
    text-align: center;
    font-family: monospace;
    text-transform: capitalize;
  }

  button {
    padding: 10px;
    font-family: monospace;
    border: none;
    color: white;
    background-color: orangered;
    font-size: large;
    border-radius: 5px;
  }
`;
