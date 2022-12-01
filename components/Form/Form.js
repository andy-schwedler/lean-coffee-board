import { StyledForm } from "./StyledForm";

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
