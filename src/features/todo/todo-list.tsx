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
    <section className="flex flex-col items-center w-3/4 desktop:max-w-[1024px]">
      {todos.length === 0 && (
        <span className="mobile:text-sm text-lg font-bold">
          Todo가 없습니다. 추가해주세요.
        </span>
      )}
      {todos.length > 0 && (
        <div className="flex flex-col w-full p-4 items-end">
          <FilterSelectBox filter={filter} setFilter={setFilter} />
          <ul className="flex flex-col gap-2 w-full">
            {filter === "all"
              ? todos.map((todo) => <TodoComponent key={todo.id} {...todo} />)
              : todos
                  .filter((todo) => todo.completed)
                  .map((todo) => <TodoComponent key={todo.id} {...todo} />)}
          </ul>
        </div>
      )}
    </section>
  );
};

export default TodoList;
