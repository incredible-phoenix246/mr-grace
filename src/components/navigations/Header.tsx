"use client";

import React, { Suspense, useEffect, useState } from "react";
import { cn } from "@/utils";
import { Menu, Search } from "lucide-react";
import { Button } from "@ui/button";
import { useSearchParams } from "next/navigation";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { MobileHeader } from "./MobileHeader";
import SkeletonNavbar from "../Skeleton/SkeletonNavbar";

export const Header = () => {
  const { setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav
      className={cn(
        " max-[500px]:py-2   px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-white-main/50 py-2 border-b border-gray-200 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-white-main/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px] font-montserrat",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/logo.png" alt="logo" width={155} height={55} />
      </Link>
      <div className="hidden lg:flex gap-x-3 xl:gap-x-5 [&>Button:last-child]:border [&>Button:last-child]:px-4 [&>Button:last-child]::py-2 [&>Button:last-child]::rounded-md [&>Button:last-child]::font-medium items-center">
        <div className="flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
          {NAV_LINKS.map((link) => (
            <Link
              href={
                link.link === "home"
                  ? "/?path=home"
                  : `/${link.link}?path=${link.link}`
              }
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
              }}
              className={cn(
                " w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
                isActive === link.link ? "text-yellow-main" : ""
              )}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        <Button
          type="button"
          className="text-black-main bg-transparent text-center border-none shadow-none hover:bg-transparent"
        >
          <Search className="w-[22.5px] h-[22.5px]" />
        </Button>
        <Button
          type="button"
          asChild
          className="text-white-main w-[180px] h-[56px] text-[16px] text-center"
        >
          <Link href="/?path=home">Contact Us</Link>
        </Button>
      </div>
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer text-yellow-main"
        onClick={() => setShowMobileMenu(true)}
      >
        <Menu />
      </div>
      <Suspense fallback={<SkeletonNavbar />}>
        <MobileHeader />
      </Suspense>
    </nav>
  );
};
