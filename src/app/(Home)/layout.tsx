import React from "react";
import { Header } from "@/components/navigations/Header";
import SkeletonNavbar from "@/components/Skeleton/SkeletonNavbar";
import { Suspense } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Header />
      </Suspense>
      <main className="px-4 sm:px-8 xl:px-16 2xl:px-24">{children}</main>
    </>
  );
}
