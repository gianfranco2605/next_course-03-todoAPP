import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  // delete all
  await prisma.todo.deleteMany();

  //   const todo = await prisma.todo.create({
  //     data: { description: "Soul Stone", complete: true },
  //   });
  //   console.log(todo);

  await prisma.todo.createMany({
    data: [
      { description: "Soul Stone", complete: true },
      { description: "Power Stone " },
      { description: "Time Stone " },
      { description: "Space Stone " },
      { description: "Reality Stone " },
    ],
  });

  return NextResponse.json({
    message: "Seed Executed",
  });
}
