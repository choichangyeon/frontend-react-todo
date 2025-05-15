import { API_HEADER, API_URL } from "@/constants/api";
import { NextResponse } from "next/server";

const { JSON_HEADER } = API_HEADER;

export const GET = async () => {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
      headers: JSON_HEADER,
    });
    const data = await res.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
