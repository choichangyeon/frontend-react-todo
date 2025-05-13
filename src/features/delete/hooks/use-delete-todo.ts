import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "@/features/delete/api/client-services";
import { QUERY_KEY } from "@/constants/query-key";
import { useQueryClient } from "@tanstack/react-query";

const { TODOS } = QUERY_KEY;

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onError: (error) => {
      throw new Error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TODOS] });
    },
  });
};
