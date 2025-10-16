import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, amount } = await req.json();
    if (!name || !email || !amount || amount <= 0) {
      return NextResponse.json(
        { ok: false, message: "Missing or invalid fields" },
        { status: 400 }
      );
    }
    // In production, create a payment intent via Stripe/Razorpay here
    return NextResponse.json({ ok: true, message: "Donation recorded" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
