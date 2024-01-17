import { NextResponse, NextRequest } from "next/server";
// Get
export async function GET(request: Request) {
  return NextResponse.json({
    hola: "mundo",
  });
}
// POST
export async function POST(request: Request) {
  return NextResponse.json({
    hola: "method post",
  });
}
