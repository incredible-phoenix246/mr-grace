import React from "react";
import Hero from "@/modules/Home/Hero";
import { GridPost, PopularPost } from "@/modules/Home/post";
import { HomeSlider } from "@/modules/Home/slider/NewSlider";

const Home = () => {
  return (
    <>
      <Hero />
      <GridPost />
      <PopularPost />
    </>
  );
};

export default Home;
