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
  }
  button {
    padding: 10px;
    border: none;
    color: orangered;
    width: 150px;
    height: 45px;
  }
`;
