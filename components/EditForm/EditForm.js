export default function EditForm({ thought }) {
  return (
    <form>
      <input value={thought}></input>
      <button>add</button>
    </form>
  );
}

// for Edit-sbumit-button

// const handleChange = (id, thoughts) => {
//   setCards(
//     cards.map((card) => {
//       if (card.id === id) return { ...card, thoughts };
//       return card;
//     })
//   );
// };
