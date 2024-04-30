import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

interface Links {
  platform: string;
  url: string;
}

interface BlogContent {
  title: string;
  desc: string;
  src: string;
  others?: any;
  cart: string;
  links?: Links[];
  draft: boolean;
  isvideo: boolean;
  quote?: string;
}

export async function POST(req: Request) {
  try {
    const {
      title,
      desc,
      src,
      others,
      cart,
      links,
      draft,
      isvideo,
      quote,
    }: BlogContent = await req.json();
    const post = await prisma.post.create({
      data: {
        title,
        desc,
        src,
        others,
        cart,
        draft,
        isvideo,
        quote,
      },
    });

    if (links && links.length > 0) {
      const createLinks = links.map(async (link) => {
        await prisma.links.create({
          data: {
            ...link,
            postId: post.id,
          },
        });
      });

      await Promise.all(createLinks);
    }

    return NextResponse.json({
      status: 200,
      message: "Post created successfully",
    });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "something went wrong",
    });
  }
}
