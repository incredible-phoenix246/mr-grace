import React from "react";
import Hero from "@/modules/Home/Hero";
import { GridPost, PopularPost } from "@/modules/Home/post";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Card /> */}
      <GridPost />
      <PopularPost />
    </>
  );
};

export default Home;
