import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "@/features/update/api/client-services";
import type { Todo } from "@/types/todo";
import { QUERY_KEY } from "@/constants/query-key";

const { TODOS } = QUERY_KEY;
type Props = Pick<Todo, "id">;

export const useCompleteMutation = ({ id }: Props) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (completed: boolean) =>
      updateTodo({ id, type: "completed", completed }),
    onMutate: async (completed) => {
      await queryClient.cancelQueries({ queryKey: [TODOS] });
      const previousTodos = queryClient.getQueryData<Todo[]>([TODOS]) ?? [];

      queryClient.setQueryData(
        [TODOS],
        previousTodos.map((todo) =>
          todo.id === id ? { ...todo, completed } : todo
        )
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
