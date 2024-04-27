"use client";

import React from "react";
import { cn } from "@/utils";
import useInView from "@/hooks/useInView";
import { Call } from "iconsax-react";
import { Mail, Pentagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/cards/Draft";
import { Post } from "@/constants";

const BlogHero = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  return (
    <section
      ref={HomePageRef}
      className={cn(
        "w-full font-poppins bg-white-300 py-16",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-2">
            Our Exclusive Contents
          </p>
          <h1 className="text-4xl font-bold text-zinc-800 mb-4">
            Find our all Contents from here
          </h1>
          <p className="text-zinc-600">
            our contents are written from very research research and well known
            writers writers so that we can provide you the best blogs and
            articles articles for you to read them all along
          </p>
        </div>
      </div>
    </section>
  );
};

const PostSection = () => {
  const PostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PostRef);
  return (
    <section
      ref={PostRef}
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white-300 flex items-center w-full justify-center",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex items-center justify-center self-center max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {Post.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogHero, PostSection };
