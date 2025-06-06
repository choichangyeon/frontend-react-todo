"use client";

import { useEditMutation } from "@/features/update/hooks/use-edit-mutation";
import type { Todo } from "@/types/todo";

type Props = Omit<Todo, "completed"> & {
  editTitle?: string;
  isEditing: boolean;
  onSetEditing: (isEditing: boolean) => void;
};

const EditButton = ({
  id,
  title,
  isEditing,
  onSetEditing,
  editTitle,
}: Props) => {
  const { mutateAsync: updateTodo } = useEditMutation({ id });

  const handleEdit = async () => {
    if (!isEditing) {
      onSetEditing(true);
      return;
    }
    if (isEditing && title === editTitle) {
      onSetEditing(false);
      return;
    }
    if (isEditing && !editTitle) {
      onSetEditing(false);
      return;
    }
    if (isEditing && editTitle) {
      try {
        await updateTodo(editTitle);
        onSetEditing(false);
        alert("해당 Todo가 수정되었습니다.");
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <button
      onClick={handleEdit}
      className="mobile:w-8 w-12 flex-none bg-blue-400 hover:bg-blue-500 text-white mobile:p-0 p-1 rounded-md transition-colors duration-200 mobile:text-[10px] text-sm"
    >
      수정
    </button>
  );
};

export default EditButton;
