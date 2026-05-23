import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    return NextResponse.json({
      success: true,
      message: "Registration temporarily disabled for deployment",
      data: body,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        error: e.message ?? "Invalid request",
      },
      {
        status: 400,
      }
    );
  }
}