import {
  API_HEADER,
  API_METHOD,
  API_ROUTE_HANDLER_PATH,
} from "@/constants/api";
import type { Todo } from "@/types/todo";

const { DELETE } = API_ROUTE_HANDLER_PATH;
const { DELETE: DELETE_METHOD } = API_METHOD;
const { JSON_HEADER } = API_HEADER;

export const deleteTodo = async (id: string): Promise<Todo> => {
  const url = DELETE(id);
  const res = await fetch(url, {
    method: DELETE_METHOD,
    headers: JSON_HEADER,
  });
  const { data } = await res.json();
  return data as Todo;
};
