import { StyledCard } from "./StyledCard";

export default function Card({ owner, thought, onDelete, id }) {
  console.log(id);
  return (
    <StyledCard>
      <p>{thought}</p>
      <p>{owner}</p>
      <div>
        <button onClick={() => onDelete(id)}>🗑</button>
        <button>📝</button>
      </div>
    </StyledCard>
  );
}
