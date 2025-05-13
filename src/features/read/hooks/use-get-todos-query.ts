import { QUERY_KEY } from "@/constants/query-key";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/features/read/api/client-services";

const { TODOS } = QUERY_KEY;

export const useGetTodosQuery = () => {
  return useQuery({
    queryKey: [TODOS],
    queryFn: getTodos,
  });
};
