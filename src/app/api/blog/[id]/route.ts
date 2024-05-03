import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export type Params = {
  id: string;
};

interface comment {
  author: string;
  comment: string;
}

export async function GET(req: Request, context: { params: Params }) {
  const id = context.params.id;
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: { comment: true },
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

export async function POST(req: Request, context: { params: Params }) {
  const id = context.params.id;
  try {
    const { author, comment }: comment = await req.json();
    const NewComment = await prisma.comment.create({
      data: {
        author,
        comment,
        postId: id,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "Post created successfully",
      NewComment,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
