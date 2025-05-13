import { API_METHOD, API_URL } from "@/constants/api";
import { NextResponse } from "next/server";

const { DELETE: DELETE_METHOD } = API_METHOD;

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const res = await fetch(`${API_URL}/${id}`, {
      method: DELETE_METHOD,
    });
    const data = await res.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
