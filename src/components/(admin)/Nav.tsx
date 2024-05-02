"use client";

import React from "react";
import { cn } from "@/utils";
import { useStateCtx } from "@/context/StateCtx";
import ModMobileSidebar from "./mobile";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { ShowAdminSidebar, setShowAdminSidebar } = useStateCtx();

  const pathname = usePathname();

  const currentPath = pathname?.replace(/^\/([^\/]+).*$/, "$1");

  return (
    <header
      className={cn(
        "lg:px-9 px-3 border-b border-gray-200 h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 backdrop-blur-lg w-full",
        {
          "md:overflow-hidden": ShowAdminSidebar,
        }
      )}
    >
      <div
        className={cn("flex items-center gap-x-4", {
          "w-full ": ShowAdminSidebar,
        })}
      >
        <div className="flex gap-x-2 sm:gap-x-4 items-center">
          {pathname === "dashboard" ? (
            <h2 className="hidden md:inline sm:text-3xl capitalize font-medium text-header dark:text-gray-200  ">
              Welcome back! Admin
            </h2>
          ) : (
            <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl capitalize font-medium text-header  ">
              {pathname === "add-blog" ? "add content" : pathname}
            </h2>
          )}
        </div>
      </div>
      <ModMobileSidebar />
    </header>
  );
};

export default NavBar;
