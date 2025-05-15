"use client";

import { useCreateMutation } from "@/features/create/hooks/use-create-mutation";
import type { Todo } from "@/types/todo";

type Props = Pick<Todo, "title"> & {
  onSetTitle: (title: string) => void;
};

const CreateButton = ({ title, onSetTitle }: Props) => {
  const { mutateAsync: createTodo } = useCreateMutation();

  const handleCreate = async () => {
    if (!title) {
      return;
    }
    try {
      await createTodo(title);
      onSetTitle("");
      alert("Todo가 추가되었습니다.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <button
      onClick={handleCreate}
      className="bg-blue-500 text-white p-2 rounded-md mobile:text-xs"
    >
      추가
    </button>
  );
};

export default CreateButton;
