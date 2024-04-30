import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(req: Request) {
  try {
    const { email }: { email: string } = await req.json();

    if (!email) {
      return new NextResponse(
        JSON.stringify({
          message: "email is required",
          status: 400,
        })
      );
    }
    const existingUser = await prisma.subscribers.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        status: 400,
        message: "email already exists",
      });
    }

    await prisma.subscribers.create({
      data: {
        email,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "registration suscessfull",
        status: 201,
      })
    );
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "something went wrong",
    });
  }
}
