import React from "react";
import { BlogDetails, BlogComment } from "@/modules/blog";

export interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const BlogContent = ({ searchParams: { post_title, id } }: PageProps) => {
  return (
    <main className="bg-white-300">
      <BlogDetails id={id} />;
      <BlogComment id={id} />;
    </main>
  );
};

export default BlogContent;
