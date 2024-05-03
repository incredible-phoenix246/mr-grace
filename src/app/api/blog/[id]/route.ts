import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export type Params = {
  id: string;
};

export async function GET(req: Request, context: { params: Params }) {
  const id = context.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });

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
}
