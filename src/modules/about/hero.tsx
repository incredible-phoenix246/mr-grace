"use client";

import useInView from "@/hooks/useInView";
import { cn } from "@/utils";
import React from "react";
import Image from "next/image";
import { AboutContent } from "@/constants";
import { AboutCardProps } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutHero = () => {
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
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-sm uppercase tracking-wide text-zinc-500 text-center w-full">
          About Us
        </div>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 self-center text-center w-full">
          Creative Blog Writing and Publishing Site
        </h1>
        <p className="mt-4 text-zinc-600 text-center">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
        <div className="mt-6">
          <Image
            src="/about.png"
            alt=""
            width={1232}
            height={608}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

const AboutMid = () => {
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">How We Work</h2>
          <p className="mt-4 text-xl">I will show you how our team works</p>
          <p className="mt-2 text-sm text-zinc-500">
            Bring to the table win-win market strategies to ensure perfect
            articles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {AboutContent.map((content) => (
            <AboutCard key={content.id} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { AboutHero, AboutMid };

function AboutCard({ id, title, desc }: AboutCardProps) {
  const formattedId = id < 10 ? `0${id}` : id;
  return (
    <div className="relative hover:bg-yellow-main text-black-main bg-white-200 p-6 max-w-sm rounded-lg shadow-lg h-[408px] w-[400px] transition-colors hover-bg">
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-[72px] font-bold mr-2 transition-colorsn">
          {formattedId}
        </h1>
        <h2 className="text-xl font-semibold transition-colors text-yellow-100">
          {title}
        </h2>
      </div>
      <p className="text-sm mb-4 transition-colors">{desc}</p>
      <Link href="" className="text-yellow-main check">
        Learn More
      </Link>
    </div>
  );
}
