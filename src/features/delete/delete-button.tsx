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

  return (
    <button
      onClick={handleDelete}
      className="mobile:w-8 w-12 flex-none bg-red-400 hover:bg-red-500 text-white mobile:p-0 p-1 rounded-md transition-colors duration-200 mobile:text-[10px] text-sm"
    >
      삭제
    </button>
  );
};

export default DeleteButton;
