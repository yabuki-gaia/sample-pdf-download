import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  console.log("verify");
  const { token } = await request.json();
  const secret = process.env.JWT_SECRET!;

  try {
    const decoded = jwt.verify(token, secret);
    return NextResponse.json({ valid: true, payload: decoded });
  } catch {
    return NextResponse.json({ valid: false, error: "Invalid token" });
  }
}