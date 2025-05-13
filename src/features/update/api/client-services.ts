import {
  API_HEADER,
  API_METHOD,
  API_ROUTE_HANDLER_PATH,
} from "@/constants/api";
import { Todo } from "@/types/todo";

const { UPDATE } = API_ROUTE_HANDLER_PATH;
const { PATCH } = API_METHOD;
const { JSON_HEADER } = API_HEADER;

type Props = Pick<Todo, "id"> & {
  type: "completed" | "title";
  completed?: boolean;
  title?: string;
};

export const updateTodo = async ({
  id,
  completed,
  title,
  type,
}: Props): Promise<Todo> => {
  const url = UPDATE(id);
  const body = {
    [type]: type === "completed" ? completed : title,
  };

  const res = await fetch(url, {
    method: PATCH,
    body: JSON.stringify(body),
    headers: JSON_HEADER,
  });
  const { data } = await res.json();
  return data;
};
