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
    <li className="flex flex-row items-center justify-between w-full">
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full desktop:max-w-[600px] border border-gray-300 rounded-md p-2 mr-2"
        />
      ) : completed ? (
        <s className="text-gray-500 text-lg text-ellipsis overflow-hidden">
          {title}
        </s>
      ) : (
        <span className="font-bold text-lg text-ellipsis overflow-hidden">
          {title}
        </span>
      )}
      <div className="flex flex-row gap-2">
        <CompleteButton id={id} completed={completed} />
        <DeleteButton id={id} />
        <EditButton
          id={id}
          isEditing={isEditing}
          onSetEditing={setIsEditing}
          editTitle={editTitle}
          title={title}
        />
      </div>
    </li>
  );
};

export default TodoComponent;
