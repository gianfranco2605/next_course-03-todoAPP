"use server";

import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

// timeout function onclick
const sleep = async (seconds: number = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const toogleTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  await sleep(3);

  const todo = await prisma.todo.findFirst({ where: { id: id } });

  if (!todo) {
    throw new Error(`Todo with id ${id} not find it`);
  }

  const updateTodo = await prisma.todo.update({
    where: { id: id },
    data: { complete: complete },
  });

  revalidatePath("/dashboard/server-todos");

  return updateTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (error) {
    return {
      message: `Error creating todo`,
    };
  }
};

export const deleteCompleted = async (): Promise<void> => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath("/dashboard/server-todos");
};
