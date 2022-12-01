import { useState } from "react";
import styled from "styled-components";

export default function Form() {
  function handleFormSubmit(event) {
    event.preventDefault();

    event.target.reset();
  }
  return (
    <>
      <StyledForm onSubmit={handleFormSubmit}>
        <textarea
          placeholder="thought goes here"
          name="thoughts"
          required
        ></textarea>
        <input placeholder="owner goes here" name="owner" required></input>
        <button type="submit">Submit your thoughts</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100vw;

  input,
  textarea {
    align-items: center;
    border: 1px solid darkgray;
    gap: 20px;
  }
  button {
    padding: 10px;
    border: none;
    color: orangered;
  }
`;
