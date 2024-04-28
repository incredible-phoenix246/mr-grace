"use client";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { cn, generateId, commentsTime } from "@/utils";
import useInView from "@/hooks/useInView";
import { Call } from "iconsax-react";
import { Mail, Pentagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/cards/Draft";
import { Post } from "@/constants";
import { PostProps, Comment } from "@/types";
import Image from "next/image";
import { DirectRight } from "iconsax-react";

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

const BlogDetails = ({ id }: { id?: string }) => {
  const PostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PostRef);

  const BlogPost = Post.find((post) => post.id === Number(id));

  if (!BlogPost) {
    return;
  }

  return (
    <section
      ref={PostRef}
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white-300 w-full",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="max-w-7xl mx-auto overflow-hidden self-center">
        <div className="p-6">
          <div className="text-xs uppercase text-zinc-600 ">
            {BlogPost?.cart}
          </div>
          <div className="text-xs text-zinc-500 ">{BlogPost?.date}</div>
          <h2 className="mt-4 text-2xl font-bold text-zinc-800">
            {BlogPost?.title}
          </h2>
        </div>
        <div className="mt-4">
          <Image
            src={BlogPost.image}
            alt={BlogPost.title}
            className="w-full max-h-[400px] object-cover rounded-lg"
            width={1232}
            height={576}
          />
        </div>
        <div className="mt-6">
          <p className="text-zinc-600">{BlogPost?.desc}</p>
        </div>
      </div>
    </section>
  );
};

const BlogComment = ({ id }: { id?: string }) => {
  const PostRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(PostRef);

  const BlogPost = Post.find((post) => post.id === Number(id));

  if (!BlogPost?.comment) {
    return;
  }
  // const [comments, setComments] = useState<Comment>({
  //   id: "",
  //   author: "",
  //   comment: "",
  //   createdAt: new Date(),
  //   postId: id,
  // });

  const handleComment = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      ref={PostRef}
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white-300 w-full",
        isInView
          ? "opacity-100 translate-y-0 md:delay-300 duration-500 relative"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="max-w-7xl mx-auto overflow-hidden self-center">
        <h3 className="text-xl font-medium sm:text-3xl text-black-main max-lg:w-full text-center">
          Comments
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-6 lg:py-8 w-full flex-col gap-y-5 lg:gap-y-8 max-lg:items-center px-1">
            {BlogPost.comment?.length > 0 ? (
              <div className="flex w-full max-w-[600px] py-6 flex-col">
                {BlogPost.comment.map((comment) => (
                  <div
                    className="flex items-start gap-x-2 py-2 w-full border-b border-[#e1e1e1]"
                    key={comment.id}
                  >
                    <Image
                      src={
                        `https://ui-avatars.com/api/?name=${
                          comment.author || "anonymous"
                        }&background=random` ?? "/facemoji.png"
                      }
                      alt="profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col w-full">
                      <div className="flex w-full justify-between">
                        <p className="text-sm lg:text-base font-medium tracking-wide">
                          {comment.author ? comment.author : "anonymous"}
                        </p>

                        <p className="text-xs text-header italic">
                          {comment.createdAt.toLocaleString()}
                        </p>
                      </div>
                      <p className="text-sm ">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="w-full text-center dark:text-gray-200">
                There are no comments yet for this Post
              </p>
            )}
          </div>
          <div className="flex items-start gap-x-2 max-lg:w-full max-lg:justify-center md:py-14">
            <form
              className="flex flex-col w-full max-w-[600px] gap-y-2"
              onSubmit={handleComment}
            >
              <input
                type="text"
                // value={comments.author}
                name="author"
                // onChange={(e) =>
                //   setComments({ ...comments, [e.target.name]: e.target.value })
                // }
                placeholder="enter your name"
                className="w-full  rounded-xl border border-[#e1e1e1] px-4 py-2 h-16 outline-none focus-visible:border-yellow-main transition-all duration-300"
              />
              <textarea
                // onChange={(e) =>
                //   setComments({ ...comments, [e.target.name]: e.target.value })
                // }
                // value={comments.comment}
                name="comment"
                id="comment"
                placeholder="Leave a comment"
                className="w-full resize-none h-[193px] rounded-xl border border-[#e1e1e1] px-4 py-2 sidebar-scroll outline-none focus-visible:border-yellow-main transition-all duration-300"
              />
              <div className="flex w-full justify-end">
                <button
                  // disabled={!(comments.comment.length > 2)}
                  // aria-disabled={!(comments.comment.length > 2)}
                  tabIndex={0}
                  aria-label="comment"
                  type="submit"
                  className="text-sm font-medium mt-2 bg-yellow-main  text-white-main h-[48px] hover:bg-primary rounded-lg px-4 transition-all duration-300 flex items-center gap-x-2 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-yellow-100"
                >
                  Comment
                  <DirectRight size={18} values="Outline" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { BlogHero, PostSection, BlogDetails, BlogComment };
