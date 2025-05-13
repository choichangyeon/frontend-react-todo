import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/features/create/api/client-services";
import { QUERY_KEY } from "@/constants/query-key";

const { TODOS } = QUERY_KEY;

export const useCreateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (title: string) => createTodo(title),
    onError: (error) => {
      throw new Error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TODOS] });
    },
  });
};
