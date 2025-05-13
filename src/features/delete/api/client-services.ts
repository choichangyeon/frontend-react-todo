import { API_METHOD, API_ROUTE_HANDLER_PATH } from "@/constants/api";

const { DELETE } = API_ROUTE_HANDLER_PATH;
const { DELETE: DELETE_METHOD } = API_METHOD;

export const deleteTodo = async (id: string) => {
  const url = DELETE(id);
  const res = await fetch(url, {
    method: DELETE_METHOD,
  });
  const { data } = await res.json();
  return data;
};
