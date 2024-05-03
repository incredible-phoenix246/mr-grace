// @ts-nocheck

"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import { DotButton } from "./SliderBtn";
import Autoplay from "embla-carousel-autoplay";
import "./slider.scss";
import { cn } from "@/utils";
import { Card } from "./card";
import useInView from "@/hooks/useInView";
import { post } from "@prisma/client";
import { useFetch } from "@/hooks/useFetch";

const Slider = () => {
  const slideRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(slideRef);
  const options: EmblaOptionsType = { loop: true, duration: 10 };
  const baseurl = process.env.NEXT_PUBLIC_BASEURL;
  const { isLoading, data, error } = useFetch(`${baseurl}/api/blog`);

  const [posts, setPosts] = useState<post[]>();

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

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
        "w-full flex flex-col justify-center items-center md:h-[400px] xl:h-[500px] relative p-8 embla overflow-hidden py-4 lg:py-8  xl:py-12 pb-8",
        isInView
          ? "opacity-100 translate-y-0 delay-300 duration-1000"
          : " opacity-0 translate-y-36"
      )}
    >
      <div className="overflow-hidden w-full " ref={emblaRef}>
        <div className="embla__container flex touch-pan-y w-full ">
          {posts?.map((slide) => (
            <Card currIdx={selectedIndex} key={slide.id} {...slide} />
          ))}
        </div>
      </div>
      <div className="embla__dots w-full justify-center items-center  flex mt-4 lg:mt-12 gap-x-4 absolute bottom-3 z-[1] left-0 right-0">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={cn("h-[16px] w-[16px] embla__dot items-center", {
              "embla__dot--selected flex": index === selectedIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
};

export { Slider };
