import styled from "styled-components";

export default function Form({ onSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <input placeholder="any thoughts?" name="thoughts" required></input>
        <input placeholder="Who are you?" name="owner" required></input>
        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  gap: 20px;

  input {
    align-items: center;
    border: 1px solid darkgray;
    height: 30px;
    margin: 10px;
  }
  button {
    padding: 10px;
    border: none;
    width: auto;
    color: orangered;
    height: 30px;
    /* height: 35px; */
  }
`;
