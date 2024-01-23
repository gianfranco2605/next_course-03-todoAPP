export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
// import { useEffect } from "react";

export const metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};

export default async function RestTodosPage() {
  // NO NEED TO USE THIS FUNCTION "USEFFECT" WE CAN USE SERVER COMPONENT
  // remember i can't use await inside a useEffect, we use fetch()
  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((resp) => resp.json())
  //     .then(console.log);
  // }, []);
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
