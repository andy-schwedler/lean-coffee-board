import { useState } from "react";

import { StyledCard } from "./StyledCard";

export default function Card({ owner, thought, onDelete, id }) {
  const [isEditing, setEditing] = useState(false);

  function toggleEdit() {
    setEditing(!isEditing);
  }

  return (
    <StyledCard>
      <p>{thought}</p>
      <p>{owner}</p>
      <div>
        <button onClick={() => onDelete(id)}>🗑</button>
        <button onClick={toggleEdit}>📝</button>
      </div>
      {isEditing ? <input defaultValue={thought} /> : null}
    </StyledCard>
  );
}

/*
<input value={thought}
*/
