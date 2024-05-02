import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export const GET = async () => {
  try {
    const post = await prisma.post.findMany();
    return NextResponse.json({
      status: 200,
      post,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
