import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 10vh;
  bottom: 0px;

  input {
    align-items: center;
    border: 1px solid darkgray;
    margin: 10px;
    height: 5vh;
    width: 40vw;
    background-color: whitesmoke;
    border-color: white;
    border-radius: 5px;
  }

  input:placeholder-shown {
    font-style: italic;
    text-align: center;
    font-family: monospace;
  }

  button {
    padding: 10px;
    font-family: monospace;
    border: none;
    color: orangered;
    width: 150px;
    height: 45px;
    font-size: large;
    border-radius: 5px;
  }
`;
