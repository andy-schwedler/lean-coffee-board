export default function EditForm({ onChange, id, toggleEdit }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.input.value);
    onChange(id, event.target.elements.input.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="input"></input>
      <button>add</button>
    </form>
  );
}
