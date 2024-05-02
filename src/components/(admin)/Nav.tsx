"use client";

import React from "react";
import { cn } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import ModMobileSidebar from "./mobile";
import { usePathname } from "next/navigation";
import { Add, HambergerMenu } from "iconsax-react";

const NavBar = () => {
  const { ShowAdminSidebar, setShowAdminSidebar } = useStateCtx();

  const pathname = usePathname();

  const currentPath = pathname?.replace(/^\/([^\/]+).*$/, "$1");

  return (
    <header
      className={cn(
        "lg:px-9 px-3 border-b border-gray-200 h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white-main/80 backdrop-blur-lg w-full",
        {
          "md:overflow-hidden": ShowAdminSidebar,
        }
      )}
    >
      <button
        tabIndex={0}
        aria-haspopup
        aria-expanded={ShowAdminSidebar}
        type="button"
        className={cn("md:hidden rounded-full focus-visible:bg-black-main/5", {
          "rotate-45 absolute right-1 top-1 z-[9999] text-white":
            ShowAdminSidebar,
        })}
        onClick={() => setShowAdminSidebar(!ShowAdminSidebar)}
      >
        {ShowAdminSidebar ? (
          <Add size={60} className="text-black-main " />
        ) : (
          <HambergerMenu size={32} className="text-black-main " />
        )}
      </button>
      <div
        className={cn("flex items-center gap-x-4", {
          "w-full ": ShowAdminSidebar,
        })}
      >
        <div className="flex gap-x-2 sm:gap-x-4 items-center">
          {currentPath === "dashboard" ? (
            <h2 className="hidden md:inline sm:text-3xl capitalize font-medium text-black-main   ">
              Welcome back! Admin
            </h2>
          ) : (
            <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl capitalize font-medium text-black-main  ">
              {currentPath === "add-blog" ? "add content" : currentPath}
            </h2>
          )}
        </div>
      </div>
      <ModMobileSidebar />
    </header>
  );
};

export default NavBar;
