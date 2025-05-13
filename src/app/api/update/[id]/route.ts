import { API_METHOD, API_URL } from "@/constants/api";
import { NextResponse } from "next/server";

const { PATCH: METHOD_PATCH } = API_METHOD;

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { title, completed } = await request.json();
    let res;
    if (typeof title === "string") {
      res = await fetch(`${API_URL}/${id}`, {
        method: METHOD_PATCH,
        body: JSON.stringify({ title }),
      });
    }
    if (typeof completed === "boolean") {
      res = await fetch(`${API_URL}/${id}`, {
        method: METHOD_PATCH,
        body: JSON.stringify({ completed }),
      });
    }
    if (!res) {
      return NextResponse.json({ error: "사용자 요청 오류" }, { status: 400 });
    }
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
