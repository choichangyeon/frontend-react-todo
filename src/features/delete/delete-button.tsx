"use client";

import { useDeleteMutation } from "@/features/delete/hooks/use-delete-mutation";
import type { Todo } from "@/types/todo";

type Props = Pick<Todo, "id">;

const DeleteButton = ({ id }: Props) => {
  const { mutateAsync: deleteTodo } = useDeleteMutation({ id });

  const handleDelete = async () => {
    try {
      await deleteTodo();
      alert("해당 Todo가 삭제되었습니다.");
    } catch (error) {
      alert(`삭제 중 에러! ${error}`);
    }
  };

  return <button onClick={handleDelete}>삭제</button>;
};

export default DeleteButton;
