import React, { Suspense } from "react";
import { Header } from "@/components/navigations/Header";
import { Footer } from "@/components/footer";
import SkeletonNavbar from "@/components/Skeleton/SkeletonNavbar";
import { Button } from "@ui/button";
import Sub from "@/components/general/sub";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Header />
      </Suspense>
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-12 text-white-main flex flex-col items-center justify-center">
        <Widget />
      </div>
      <Sub />
      <Footer />
    </>
  );
};

export default NotFound;

export function Widget() {
  return (
    <>
      <div className="bg-yellow-main text-white rounded-lg shadow-xl overflow-hidden max-w-lg w-full">
        <div className="p-8 flex items-center justify-center h-full w-full relative">
          <div className="flex flex-col items-center">
            <p className="text-6xl font-bold">404</p>

            <p className="text-xl mt-3">Sorry!</p>
            <p className="text-sm mt-2">
              The link is broken, try to refresh or go to home
            </p>
            <Button
              asChild
              className="bg-white-main text-yellow-main mt-4 py-2 px-4"
            >
              <Link href="/"> Go to Home</Link>
            </Button>
          </div>
        </div>

        <div
          className="bg-yellow-main bg-opacity-10 h-24 w-full"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/wavecut.png')",
          }}
        />
      </div>
    </>
  );
}
