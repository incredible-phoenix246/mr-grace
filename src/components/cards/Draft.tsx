"use client";

import { PostProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/button";
import { encryptString } from "@/utils";
import { usePathname } from "next/navigation";

export default function PostCard({
  title,
  date,
  image,
  desc,
  id,
  cart,
}: PostProps) {
  const encryptTitle = encryptString(title);
  return (
    <div className="max-w-[400px] max-h-[630px] mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
      <Image
        className="w-full h-64 object-cover object-center rounded-t-xl"
        src={image}
        alt="VR Gaming"
        width={400}
        height={360}
      />
      <div className="p-6">
        <p className="text-xs text-yellow-main uppercase ">{cart}</p>
        <p className="text-xs text-zinc-600 ">{date}</p>
        <h1 className="block mt-2 text-xl font-semibold text-zinc-800">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 line-clamp-5">{desc}</p>
        <div className="mt-4">
          <Button asChild className="text-white-main">
            <Link href={`/blog/content?id=${id}&post_title=${encryptTitle}`}>
              Read More
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
