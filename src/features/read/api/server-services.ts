"use server";

import { API_URL } from "@/constants/api";
import type { Todo } from "@/types/todo";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(API_URL);
  const data: Todo[] = await res.json();

  return data;
};
