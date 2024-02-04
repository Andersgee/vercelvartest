//import random from 'random';
//import shishua from 'shishua';
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export function GET(_requst: NextRequest) {
  return Response.json(
    {
      message: "hello from nodejs runtime",
      rand: Math.random(),
    },
    { status: 200 }
  );
}
