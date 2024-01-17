import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  //   Remember ?? = byDefault
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";
  if (isNaN(+take) || isNaN(+skip)) {
    return NextResponse.json(
      {
        message: "Take and Skip should be a number",
      },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({
    // +take converts to number
    take: +take,
    skip: +skip,
  });

  return NextResponse.json(todos);
}
// yup for validation library(object)
const postSchema = yup.object({
  description: yup.string().required(), //! TODO show something interesting
  complete: yup.boolean().optional(),
});

export async function POST(request: Request) {
  try {
    const { description, complete } = await postSchema.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({ data: { complete, description } });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
