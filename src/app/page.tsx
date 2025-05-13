import { QUERY_KEY } from "@/constants/query-key";
import { getTodos } from "@/features/read/api/server-services";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const { TODOS } = QUERY_KEY;

export const Home = async () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: [TODOS],
    queryFn: getTodos,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>Hello World</div>
    </HydrationBoundary>
  );
};

export default Home;
