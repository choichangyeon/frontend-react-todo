import {
  API_HEADER,
  API_METHOD,
  API_ROUTE_HANDLER_PATH,
} from "@/constants/api";
import type { Todo } from "@/types/todo";

const { READ } = API_ROUTE_HANDLER_PATH;
const { GET } = API_METHOD;
const { JSON_HEADER } = API_HEADER;

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(READ, {
    method: GET,
    headers: JSON_HEADER,
  });
  const { data } = await res.json();

  return data as Todo[];
};
