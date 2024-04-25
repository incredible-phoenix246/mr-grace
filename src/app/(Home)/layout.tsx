import React from "react";
import { Header } from "@/components/navigations/Header";
import SkeletonNavbar from "@/components/Skeleton/SkeletonNavbar";
import Sub from "@/components/general/sub";
import { Footer } from "@/components/footer";
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
      {children}
      <Sub />
      <Footer />
    </>
  );
}
