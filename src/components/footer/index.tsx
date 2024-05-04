import React from "react";
import Image from "next/image";
import { NAV_LINKS, Social_Links } from "@/constants";
import Link from "next/link";
import { cn } from "@/utils";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center min-h-[397px] max-h-[397px] font-poppins">
      <div className="flex flex-col items-center justify-center w-full h-full space-y-3 lg:space-y-7 2xl:space-y-9">
        <Image src="/logo.png" alt="logo" width={155} height={55} />
        <div className="flex items-center  gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
          {NAV_LINKS.map((link) => (
            <Link
              href={
                link.link === "home"
                  ? "/?path=home"
                  : `${link.link}?path=${link.link}`
              }
              key={link.id}
              className={cn(
                " w-full text-black-main flex justify-center capitalize text-base relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 "
              )}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center  gap-x-5 w-full justify-center max-w-[208px]">
          {Social_Links.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              target="_blank"
              className={cn(
                "bg-yellow-main rounded-full  flex justify-center text-sm md:text-base relative font-medium w-[28px] h-[28px] md:w-[40px] md:h-[40px] text-[16px] items-center text-white-main"
              )}
            >
              <link.icon aria-hidden variant={"Bold"} />
            </Link>
          ))}
        </div>
        <div className="w-[80%] bg-black-main h-0.5" />
        <div className="flex items-center w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
          <p className="text-sm font-semibold text-black-main text-center">
            &copy; {currentYear} Mr Grace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
