"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import PostCard from "@/components/cards/Draft";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import { useFetch } from "@/hooks/useFetch";
import { post } from "@prisma/client";
import { encryptString } from "@/utils";
import { HeroSkel } from "./skelton";

export const GridPost = () => {
  const RecentPostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(RecentPostRef);
  const [displayedPostsCount, setDisplayedPostsCount] = useState(6);
  const [posts, setPosts] = useState<post[]>();
  const visiblePosts = posts?.slice(0, displayedPostsCount);
  const baseurl = process.env.NEXT_PUBLIC_BASEURL;
  const { isLoading, data, error } = useFetch(`${baseurl}/api/blog`);
  const [featuredPost, setFeaturedPost] = useState<post>();

  useEffect(() => {
    if (data) {
      const filteredPosts =
        data.post?.filter((post: post) => !post.draft) || [];
      setPosts(filteredPosts);
      const firstNonDraftPost = filteredPosts[0];
      setFeaturedPost(firstNonDraftPost);
    }
  }, [data]);

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
          <Link href="/blog?path=blog">View All</Link>
        </Button>
      </div>
      <IndexCard {...featuredPost!} />
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          <HeroSkel />
          <HeroSkel />
          <HeroSkel />
          <HeroSkel />
          <HeroSkel />
          <HeroSkel />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {visiblePosts?.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
      {posts && posts.length > displayedPostsCount && (
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

function IndexCard({ title, createdAt, src, desc, id, cart, isvideo }: post) {
  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formattedDate = createdAt ? formatDate(new Date(createdAt)) : "";

  const encryptTitle = encryptString(title ?? "");
  return (
    <div className="flex flex-col md:flex-row rounded-lg shadow-lg">
      <div className="md:w-1/2 max-h-[300px]">
        {isvideo ? (
          <>
            <iframe
              className="w-full min-h-[300px] object-cover rounded-lg transition-all duration-300"
              src={src}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
              allowFullScreen
            />
          </>
        ) : (
          <Image
            src={src}
            alt="VR Gaming"
            className="rounded-lg object-cover h-full"
            width={712}
            height={456}
          />
        )}
      </div>
      <div className="md:w-1/2 flex flex-col justify-between p-4">
        <div>
          <div className="p-4 flex gap-x-3 items-center w-full h-fit">
            <div className="text-white text-xs uppercase font-bold text-black-main">
              {cart}
            </div>
            <div className="text-white text-sm text-black-main/90">
              {formattedDate}
            </div>
          </div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <div
            className="ProseMirror whitespace-pre-line text-zinc-300 mt-2 line-clamp-3"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        <Button
          asChild
          className="text-white-main px-4 py-2 mt-4 rounded-lg transition duration-300"
        >
          <Link href={`/blog/content?id=${id}&post_title=${encryptTitle}`}>
            Read More
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function PopularPost() {
  const PopularPostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PopularPostRef);
  const [posts, setPosts] = useState<post[]>();
  const baseurl = process.env.NEXT_PUBLIC_BASEURL;
  const { isLoading, data, error } = useFetch(`${baseurl}/api/blog`);

  useEffect(() => {
    if (data) {
      const filteredPosts =
        data.post?.filter((post: post) => !post.draft) || [];
      setPosts(filteredPosts);
    }
  }, [data]);

  const popularPosts = posts?.filter((post) => post.views && post.views > 15);

  if (!popularPosts) {
    return <></>;
  }
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
          <Link href="/blog?path=blog">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {popularPosts?.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
