"use client";

import { useGetTodosQuery } from "@/features/read/hooks/use-get-todos-query";
import TodoComponent from "@/features/todo/todo-component";

const TodoList = () => {
  const { data: todos, isPending, isError } = useGetTodosQuery();

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>todos 요청 오류</div>;

  console.log(todos);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <TodoComponent key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
