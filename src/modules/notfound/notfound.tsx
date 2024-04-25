import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/navigations/Header";
import { Footer } from "@/components/footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="w-[816px] h-[472px] text-white-main flex flex-col items-center justify-center bg-yellow-main">
        <p className="">404</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
