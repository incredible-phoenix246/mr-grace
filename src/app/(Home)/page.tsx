import React from "react";
import Hero from "@/modules/Home/Hero";
import { Card } from "@/modules/Home/slider/card";
import { GridPost } from "@/modules/Home/post";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <GridPost />
    </>
  );
};

export default Home;
