import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(req: Request) {
  try {
    const { name, password } = await req.json();

    const user = await prisma.admin.findFirst({
      where: {
        name,
      },
    });

    if (!user) {
      return NextResponse.json({
        status: 401,
        message: "Invalid username or password",
      });
    }

    const passwordMatches = user.password === password;

    if (!passwordMatches) {
      return NextResponse.json({
        status: 401,
        message: "Invalid username or password",
      });
    }

    return NextResponse.json({
      status: 200,
      message: "Authentication successful",
      user,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
