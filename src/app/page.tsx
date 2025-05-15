import { QUERY_KEY } from "@/constants/query-key";
import { getTodos } from "@/features/read/api/server-services";
import TodoInput from "@/features/todo/todo-input";
import TodoList from "@/features/todo/todo-list";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const { TODOS } = QUERY_KEY;

const Home = async () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: [TODOS],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <h1>Todo List Maker</h1>
      <TodoInput />
      <TodoList />
    </HydrationBoundary>
  );
};

export default Home;
