"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Post } from "@/constants";
import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import { Button } from "@ui/button";
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";
import { post } from "@prisma/client";
import { encryptString } from "@/utils";

const Hero = () => {
  const HomePageRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(HomePageRef);
  const [featuredPost, setFeaturedPost] = useState<post | undefined>();
  const baseurl = process.env.NEXT_PUBLIC_BASEURL;
  const { isLoading, data, error } = useFetch(`${baseurl}/api/blog`);

  useEffect(() => {
    if (data) {
      const filteredPosts =
        data.post?.filter((post: post) => !post.draft) || [];
      const firstNonDraftPost = filteredPosts[0];
      setFeaturedPost(firstNonDraftPost);
    }
  }, [data]);

  const encryptTitle = encryptString(featuredPost?.title ?? "");

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
            {/* <p className=" line-clamp-6">{featuredPost?.desc}</p> */}
            <div
              className="ProseMirror whitespace-pre-line mt-4 text-lg text-white-200 line-clamp-6"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{ __html: featuredPost?.desc! }}
            />
            <Button
              asChild
              className="mt-6 inline-block bg-yellow-main hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out text-white-200"
            >
              <Link
                href={`/blog/content?id=${featuredPost?.id}&post_title=${encryptTitle}`}
              >
                Read More
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            {featuredPost?.isvideo ? (
              <>
                <iframe
                  className="w-full min-h-[300px] object-cover rounded-lg transition-all duration-300"
                  src={featuredPost.src}
                  title="Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
                  allowFullScreen
                />
              </>
            ) : (
              <Image
                width={608}
                height={576}
                src={featuredPost?.src!}
                alt="Client"
                className="rounded-lg shadow-xl max-h-[400px] object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
