"use client";

import React, { useState } from "react";
import { Post } from "@/constants";
import Image from "next/image";
import PostCard from "@/components/cards/Draft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { PostProps } from "@/types";
import { cn } from "@/utils";

export const GridPost = () => {
  const RecentPostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(RecentPostRef);
  const featuredPost = Post[1];
  const [displayedPostsCount, setDisplayedPostsCount] = useState(6);
  const visiblePosts = Post.slice(0, displayedPostsCount);

  const handleViewMore = () => {
    setDisplayedPostsCount((prevCount) => prevCount + 6);
  };
  return (
    <section
      ref={RecentPostRef}
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Our Recent Post
        </h1>
        <Button asChild variant="default" className="text-white-main">
          <Link href="#">View All</Link>
        </Button>
      </div>
      <IndexCard {...featuredPost} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {visiblePosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      {displayedPostsCount < Post.length && (
        <div className="flex justify-center">
          <Button
            variant="default"
            className="text-white-main"
            onClick={handleViewMore}
          >
            View More
          </Button>
        </div>
      )}
    </section>
  );
};

function IndexCard({ title, date, image, desc, id, cart }: PostProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-lg">
      <div className="md:w-1/2">
        <Image
          src={image}
          alt="VR Gaming"
          className="rounded-lg object-cover h-full"
          width={712}
          height={456}
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between p-4">
        <div>
          <div className="p-4 flex gap-x-3 items-center w-full h-fit">
            <div className="text-white text-xs uppercase font-bold text-black-main">
              {cart}
            </div>
            <div className="text-white text-sm text-black-main/90">{date}</div>
          </div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <p className="text-zinc-300 mt-4 line-clamp-4">{desc}</p>
        </div>
        <Button className="text-white-main px-4 py-2 mt-4 rounded-lg transition duration-300">
          Read More
        </Button>
      </div>
    </div>
  );
}

export function PopularPost() {
  const PopularPostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PopularPostRef);

  const popularPosts = Post.filter(
    (post) => post.readcount && post.readcount > 15
  );
  return (
    <section
      ref={PopularPostRef}
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Popular Post
        </h1>
        <Button asChild variant="default" className="text-white-main">
          <Link href="#">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {popularPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
