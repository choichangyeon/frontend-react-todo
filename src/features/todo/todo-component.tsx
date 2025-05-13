import { Todo } from "@/types/todo";

type Props = Omit<Todo, "id">;

const TodoComponent = ({ completed, title }: Props) => {
  return <li>{title}</li>;
};

export default TodoComponent;
