import styled from "styled-components";

export default function Form({ onSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <input placeholder="thought goes here" name="thoughts" required></input>
        <input placeholder="owner goes here" name="owner" required></input>
        <button type="submit">Submit your thoughts</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  text-align: center;

  input {
    align-items: center;
    border: 1px solid darkgray;
    gap: 20px;
    height: 30px;
    margin: 10px;
  }
  button {
    padding: 10px;
    border: none;
    color: orangered;
    height: 35px;
  }
`;
