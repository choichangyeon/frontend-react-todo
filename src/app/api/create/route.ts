import { API_HEADER, API_METHOD, API_URL } from "@/constants/api";
import { NextResponse } from "next/server";

const { POST: METHOD_POST } = API_METHOD;
const { JSON_HEADER } = API_HEADER;

export const POST = async (request: Request) => {
  try {
    const { title } = await request.json();
    console.log(title);
    console.log(API_URL);
    if (!title) {
      return NextResponse.json({ error: "제목이 없습니다." }, { status: 400 });
    }
    const res = await fetch(API_URL, {
      method: METHOD_POST,
      headers: JSON_HEADER,
      body: JSON.stringify({ title, completed: false }),
    });
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
