import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { collegeSchema } from "@/lib/validators";

export async function GET() {
  const colleges = await prisma.college.findMany({ orderBy: { ranking: "asc" } });
  return NextResponse.json(colleges);
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user || user.role !== "ADMIN")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const data = collegeSchema.parse(body);
    const college = await prisma.college.create({ data });
    return NextResponse.json(college, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}