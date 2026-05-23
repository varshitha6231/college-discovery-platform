import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { reviewSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });

  try {
    const body = await req.json();
    const { rating, comment, collegeId } = reviewSchema.parse(body);

    const existing = await prisma.review.findFirst({
      where: { userId: user.id, collegeId },
    });
    if (existing) return NextResponse.json({ error: "You already reviewed this college" }, { status: 400 });

    const review = await prisma.review.create({
      data: { rating, comment, userId: user.id, collegeId },
    });
    return NextResponse.json(review, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}