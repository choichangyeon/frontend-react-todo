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
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [TODOS] });
      const previousTodos = queryClient.getQueryData<Todo[]>([TODOS]) ?? [];

      queryClient.setQueryData(
        [TODOS],
        previousTodos.filter((todo) => todo.id !== id)
      );

      return { previousTodos };
    },
    onError: (error, _variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData([TODOS], context.previousTodos);
      }
      throw new Error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TODOS] });
    },
  });
};
