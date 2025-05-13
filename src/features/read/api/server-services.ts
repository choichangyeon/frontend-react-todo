"use server";

import { Todo } from "@/types/todo";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("http://localhost:3000/todos");
  const data: Todo[] = await res.json();

  return data;
};
