import { API_METHOD, API_URL } from "@/constants/api";
import { NextResponse } from "next/server";

const { POST: METHOD_POST } = API_METHOD;

export const POST = async (request: Request) => {
  try {
    const { title } = await request.json();
    if (!title) {
      return NextResponse.json({ error: "제목이 없습니다." }, { status: 400 });
    }
    const res = await fetch(API_URL, {
      method: METHOD_POST,
      body: JSON.stringify({ title, completed: false }),
    });
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
