import { API_METHOD, API_ROUTE_HANDLER_PATH } from "@/constants/api";
import type { Todo } from "@/types/todo";

const { CREATE } = API_ROUTE_HANDLER_PATH;
const { POST } = API_METHOD;

export const createTodo = async (title: string): Promise<Todo> => {
  const res = await fetch(CREATE, {
    method: POST,
    body: JSON.stringify({ title }),
  });
  const { data } = await res.json();
  return data;
};
