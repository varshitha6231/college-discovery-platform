import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });

  const { collegeId } = await req.json();
  const saved = await prisma.savedCollege.create({
    data: { userId: user.id, collegeId },
  });
  return NextResponse.json(saved, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });

  const { collegeId } = await req.json();
  await prisma.savedCollege.delete({
    where: { userId_collegeId: { userId: user.id, collegeId } },
  });
  return NextResponse.json({ message: "Removed" });
}