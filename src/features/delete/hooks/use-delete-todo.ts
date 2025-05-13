import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "@/features/delete/api/client-services";
import { QUERY_KEY } from "@/constants/query-key";
import { useQueryClient } from "@tanstack/react-query";
import { Todo } from "@/types/todo";

const { TODOS } = QUERY_KEY;

type Props = Pick<Todo, "id">;

export const useDeleteTodo = ({ id }: Props) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTodo(id),
    onError: (error) => {
      throw new Error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TODOS] });
    },
  });
};
