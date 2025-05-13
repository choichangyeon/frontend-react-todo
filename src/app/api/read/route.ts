import { API_URL } from "@/constants/api";
import { Todo } from "@/types/todo";

export const GET = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL);
  const data: Todo[] = await res.json();

  return data;
};
