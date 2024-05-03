"use client";

import { cn } from "@/utils";
import { Card } from "./card";
import useInView from "@/hooks/useInView";
import { post } from "@prisma/client";
import { useFetch } from "@/hooks/useFetch";
import "./slider.scss";
import { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  PrevButton,
  NextButton,
} from "@ui/slide";

export const HomeSlider = () => {
  const slideRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(slideRef);
  const baseurl = process.env.NEXT_PUBLIC_BASEURL;
  const { isLoading, data, error } = useFetch(`${baseurl}/api/blog`);
  const [posts, setPosts] = useState<post[]>();
  useEffect(() => {
    if (data) {
      const filteredPosts =
        data.post?.filter((post: post) => !post.draft) || [];
      setPosts(filteredPosts);
    }
  }, [data]);

  return (
    <div
      ref={slideRef}
      className={cn(
        "w-full flex flex-col justify-center items-center h-full relative p-8 embla overflow-hidden py-4 lg:py-8  xl:py-12 pb-8",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="overflow-hidden w-full ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-sm"
        >
          <CarouselContent className="embla__container flex touch-pan-y w-full ">
            {posts?.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card {...slide} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full justify-center  flex mt-4 lg:mt-8 gap-x-4">
        <PrevButton />
        <NextButton />
      </div>
    </div>
  );
};
