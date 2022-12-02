import { useState } from "react";
import EditForm from "../EditForm/EditForm";

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
      {isEditing ? <EditForm thought={thought} /> : null}
    </StyledCard>
  );
}

/*
<input value={thought}
*/
