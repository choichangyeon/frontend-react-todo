"use client";

import useCompleteMutation from "@/features/update/hooks/use-complete-mutation";
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
    <button onClick={handleComplete}>{completed ? "미완료" : "완료"}</button>
  );
};

export default CompleteButton;
