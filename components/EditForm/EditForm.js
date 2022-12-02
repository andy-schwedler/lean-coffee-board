import styled from "styled-components";

export default function EditForm({ thought, onChange, id, onToggle }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.input.value);
    onChange(id, event.target.elements.input.value);
    onToggle();
  }
  return (
    <form onSubmit={handleSubmit}>
      <StyledInput name="input" defaultValue={thought}></StyledInput>
      <button>add</button>
    </form>
  );
}

const StyledInput = styled.input`
  width: 50%;
`;
