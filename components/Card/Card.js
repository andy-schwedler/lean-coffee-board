import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import { StyledCard } from "./StyledCard";

export default function Card({ owner, thought, onDelete, id, onChange }) {
  const [isEditing, setEditing] = useState(false);

  function toggleEdit() {
    setEditing(!isEditing);
  }

  return (
    <StyledCard>
      <div>
        <p>{thought}</p>
      </div>
      <p>{owner}</p>
      <div>
        <button onClick={onDelete}>🗑</button>
        <button onClick={toggleEdit}>🖊</button>
      </div>
      {isEditing ? (
        <EditForm
          onToggle={toggleEdit}
          id={id}
          onChange={onChange}
          thought={thought}
        />
      ) : null}
    </StyledCard>
  );
}
