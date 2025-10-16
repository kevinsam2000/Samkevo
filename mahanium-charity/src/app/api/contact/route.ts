import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // In production, send email or persist to database/CRM
    return NextResponse.json({ ok: true, message: "Message received" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
