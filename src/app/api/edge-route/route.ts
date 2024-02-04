import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export function GET(_requst: NextRequest) {
  return Response.json(
    {
      message: "hello from edge runtime",
      rand: Math.random(),
    },
    { status: 200 }
  );
}
