import { API_URL } from "@/constants/api";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
