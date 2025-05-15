"use client";

import { useCompleteMutation } from "@/features/update/hooks/use-complete-mutation";
import type { Todo } from "@/types/todo";

type Props = Omit<Todo, "title">;

const CompleteButton = ({ id, completed }: Props) => {
  const { mutateAsync: updateTodo } = useCompleteMutation({ id });
  const handleComplete = async () => {
    try {
      await updateTodo(!completed);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <button
      onClick={handleComplete}
      className="w-14 flex-none bg-green-300 hover:bg-green-400 text-white px-3 py-1 rounded-md transition-colors duration-200 font-medium"
    >
      {completed ? "미완료" : "완료"}
    </button>
  );
};

export default CompleteButton;
