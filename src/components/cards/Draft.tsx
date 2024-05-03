"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/button";
import { encryptString } from "@/utils";
import { post } from "@prisma/client";

export default function PostCard({
  title,
  createdAt,
  src,
  desc,
  id,
  cart,
  isvideo,
}: post) {
  const encryptTitle = encryptString(title);

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formattedDate = createdAt ? formatDate(new Date(createdAt)) : "";
  return (
    <div className="max-w-[400px] max-h-[630px] mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
      {isvideo ? (
        <>
          <iframe
            className="w-full min-h-[250px] max-h-64 object-cover rounded-lg transition-all duration-300"
            src={src}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
            allowFullScreen
          />
        </>
      ) : (
        <Image
          className="w-full h-64 object-cover object-center rounded-t-xl"
          src={src}
          alt="VR Gaming"
          width={400}
          height={360}
        />
      )}

      <div className="p-6">
        <p className="text-xs text-yellow-main uppercase ">{cart}</p>
        <p className="text-xs text-zinc-600 ">{formattedDate}</p>
        <h1 className="block mt-2 text-xl font-semibold text-zinc-800">
          {title}
        </h1>
        <div
          className="ProseMirror whitespace-pre-line mt-2 text-sm text-zinc-600 line-clamp-5"
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
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
