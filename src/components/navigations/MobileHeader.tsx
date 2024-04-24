"use client";

import { useStateCtx } from "@/context/StateCtx";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import { CloseSquare } from "iconsax-react";

export const MobileHeader = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();

  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu]);

  return (
    <>
      <div
        className={cn(
          "lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300",
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <nav
        className={cn(
          "pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] justify-between items-center bg-white-main/90 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0",
          showMobileMenu
            ? "translate-x-0 duration-1000 opacity-100"
            : "translate-x-full duration-300"
        )}
      >
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none text-yellow-main text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 flex justify-center items-center"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <CloseSquare variant="Bulk" />
        </button>
        <div className="flex-col flex justify-between h-full w-full ">
          <div className="flex flex-col  items-start h-full gap-y-10 ">
            {NAV_LINKS.map((link) => (
              <Link
                tabIndex={0}
                aria-label={link.label}
                href={
                  link.link === "home"
                    ? "/?path=home"
                    : `${link.link}?path=${link.link}`
                }
                key={link.id}
                onClick={() => {
                  setIsActive(link.link);
                  setShowMobileMenu(false);
                }}
                className={cn(
                  " focus-visible:rounded-md focus-visible:border-2 outline-none focus-visible:p-1 focus-visible:border-primary   text-black  flex justify-center capitalize relative font-medium  before:bg-yellow-main before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 text-lg",
                  isActive === link.link ? "text-yellow-dark before:w-full" : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
