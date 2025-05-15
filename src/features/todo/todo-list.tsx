"use client";

import { useGetTodosQuery } from "@/features/read/hooks/use-get-todos-query";
import TodoComponent from "@/features/todo/todo-component";
import { useState } from "react";
import FilterSelectBox from "@/features/read/filter-select-box";

const TodoList = () => {
  const { data: todos, isPending, isError } = useGetTodosQuery();
  const [filter, setFilter] = useState<"all" | "completed">("all");

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>todos 요청 오류</div>;

  return (
    <section>
      <FilterSelectBox filter={filter} setFilter={setFilter} />
      <ul>
        {filter === "all"
          ? todos.map((todo) => <TodoComponent key={todo.id} {...todo} />)
          : todos
              .filter((todo) => todo.completed)
              .map((todo) => <TodoComponent key={todo.id} {...todo} />)}
      </ul>
    </section>
  );
};

export default TodoList;
