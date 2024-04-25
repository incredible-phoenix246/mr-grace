"use client";

import React from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import { Post } from "@/constants";
import { Button } from "@/components/ui/button";

const Card = () => {
  const SliderRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(SliderRef);
  const featuredPost = Post[1];
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
        <Image
          className="w-full h-[576px] object-cover object-center"
          src={featuredPost.image}
          alt="VR Gaming"
          width={1232}
          height={576}
        />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="max-w-[920px] h-[300px] mx-auto bg-white rounded-br-lg rounded-t-lg shadow-md overflow-hidden absolute bottom-0 right-0 bg-white-main">
            <div className="p-4 flex gap-x-3 items-center">
              <div className="text-white text-xs uppercase font-bold text-black-main">
                Development
              </div>
              <div className="text-white text-sm text-black-200">
                16 March 2023
              </div>
            </div>
            <div className="p-5">
              <h3 className="md:text-2xl text-sm font-bold mb-3 text-center">
                {featuredPost.title}
              </h3>
              <p className="text-zinc-700 text-sm mb-4">{featuredPost.desc}</p>
            </div>
            <div className="px-5">
              <Button
                variant="outline"
                className="absolute border border-yellow-400 text-yellow-400  py-2 px-4 rounded hover:text-white transition-colors"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Card };
