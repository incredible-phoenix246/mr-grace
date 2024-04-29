"use client";

import React from "react";
import Image from "next/image";
import { Post } from "@/constants";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import { Button } from "@ui/button";

const Hero = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  const featuredPost = Post[0];
  return (
    <section
      ref={HomePageRef}
      className={cn(
        "w-full font-poppins bg-yellow-main",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="px-4 sm:px-8 xl:px-16 2xl:px-24 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-white-main">
              Featured Post
            </div>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight">
              {featuredPost?.title}
            </h1>
            <p className="mt-4 text-lg text-white-200 line-clamp-6">
              {featuredPost.desc}
            </p>
            <Button className="mt-6 inline-block bg-yellow-main hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out text-white-200">
              Read More
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src={featuredPost.image}
              alt=""
              width={608}
              height={576}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
