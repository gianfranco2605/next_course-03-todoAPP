"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "..";

// import * as todosApi from "@/todos/helpers/todos";
// import { useRouter } from "next/navigation";
import { toogleTodo } from "../actions/todo-actions";

// remember ? in typescript means that the variable can be opcional
interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  // use the function to refresh the route
  //USING REST
  // const router = useRouter();
  // const toogleTodo = async (id: string, complete: boolean) => {
  //   const updatedTodo = await todosApi.updateTodo(id, complete);
  //   console.log(updatedTodo);
  //   router.refresh();
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        // toogleTodo from server actions, No rest
        <TodoItem key={todo.id} todo={todo} toggleTodo={toogleTodo} />
      ))}
    </div>
  );
};
