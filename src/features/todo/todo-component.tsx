"use client";

import { useState } from "react";
import CompleteButton from "@/features/update/complete-button";
import DeleteButton from "@/features/delete/delete-button";
import EditButton from "@/features/update/edit-button";
import type { Todo } from "@/types/todo";

type Props = Todo;

const TodoComponent = ({ completed, title, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  return (
    <li className="flex flex-row items-center">
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : completed ? (
        <s>{title}</s>
      ) : (
        <span>{title}</span>
      )}
      <CompleteButton id={id} completed={completed} />
      <DeleteButton id={id} />
      <EditButton
        id={id}
        isEditing={isEditing}
        onSetEditing={setIsEditing}
        editTitle={editTitle}
        title={title}
      />
    </li>
  );
};

export default TodoComponent;
