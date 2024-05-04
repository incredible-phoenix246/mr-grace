// @ts-nocheck

"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn, encryptString } from "@/utils";
import { post } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Card = ({ id, title, desc, isvideo, src, cart, createdAt }: post) => {
  const SliderRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SliderRef);
  const encryptTitle = encryptString(title);

  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formattedDate = createdAt ? formatDate(new Date(createdAt)) : "";
  return (
    <section
      ref={SliderRef}
      className={cn(
        "py-12 relative px-4 sm:px-8 xl:px-16 2xl:px-24",

        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="max-w-[1232px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg relative">
        {isvideo ? (
          <iframe
            className="w-full h-[576px] object-cover object-center"
            src={src}
            title="Video Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <Image
            className="w-full h-[576px] object-cover object-center"
            src={src}
            alt="VR Gaming"
            width={1232}
            height={576}
          />
        )}

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="max-w-[920px] h-[300px] mx-auto bg-white rounded-br-lg rounded-t-lg shadow-md overflow-hidden absolute bottom-0 right-0 bg-white-main">
            <div className="p-4 flex flex-col w-full md:hidden">
              <div className="flex gap-x-3 items-center w-full h-fit justify-between ">
                <div className="text-white text-xs uppercase font-bold text-black-main">
                  {cart}
                </div>
                <Button
                  variant="ghost"
                  asChild
                  className="px-4 hover:underline md:hidden rounded hover:text-white transition-colors text-xs"
                >
                  <Link
                    href={`/blog/content?id=${id}&post_title=${encryptTitle}`}
                  >
                    Read More
                  </Link>
                </Button>
              </div>
              <div className="text-white text-sm text-black-200">
                {formattedDate}
              </div>
            </div>
            <div className="p-4 md:flex gap-x-3 items-center w-full h-fit hidden">
              <div className="text-white text-xs uppercase font-bold text-black-main">
                {cart}
              </div>
              <div className="text-white text-sm text-black-main/90">
                {formattedDate}
              </div>
            </div>

            <div className="p-5">
              <h3 className="md:text-2xl text-sm font-bold mb-3 text-center md:text-start">
                {title}
              </h3>

              <div
                className="ProseMirror whitespace-pre-line mt-2 text-zinc-700 text-sm md:text-base mb-4 line-clamp-3"
                style={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
            <div className="px-5">
              <Button
                asChild
                variant="outline"
                className="absolute border border-yellow-400 text-yellow-400  py-2 px-4 rounded hover:text-white transition-colors"
              >
                <Link
                  href={`/blog/content?id=${id}&post_title=${encryptTitle}`}
                >
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Card };
