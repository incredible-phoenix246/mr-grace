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
  others: any;
  cart: string;
  links: Links;
}

// model post {
//   id        String    @id @default(auto()) @map("_id") @db.ObjectId
//   src       String //image or video url
//   createdAt DateTime  @default(now())
//   updatedAt DateTime  @updatedAt
//   title     String // post tittle
//   desc      String // description
//   others    String? // other relevant details
//   comment   comment[]
//   views     Int? // how many people viewed it
//   draft     Boolean? // wethered is draft or not {published or pending}
//   isvideo   Boolean?
//   quote     String?
//   cart      String?   @default("art") // category
//   links     links[] // sharable link

//   @@map("Posts")
// }

export async function POST(req: Request) {
  try {
    const {} = await req.json();
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      message: "something went wrong",
    });
  }
}
