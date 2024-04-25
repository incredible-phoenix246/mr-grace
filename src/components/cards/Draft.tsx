import { PostProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/button";

export default function PostCard({
  title,
  date,
  image,
  desc,
  id,
  cart,
}: PostProps) {
  return (
    <div className="max-w-[400px] max-h-[630px] mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <Image
        className="w-full h-64 object-cover object-center"
        src={image}
        alt="VR Gaming"
        width={400}
        height={360}
      />
      <div className="p-6">
        <p className="text-xs text-blue-600 uppercase dark:text-blue-400">
          {cart}
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">{date}</p>
        <h1 className="block mt-2 text-xl font-semibold text-zinc-800 dark:text-white hover:text-zinc-600 hover:underline">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
