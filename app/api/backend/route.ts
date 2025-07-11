import { NextRequest, NextResponse } from "next/server";

const url = "http://localhost:8000/";

export async function GET(request: NextRequest) {
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
  console.log(data);
  
}