import React from "react";
import SideBar from "@/components/(admin)/sidebar";
import NavBar from "@/components/(admin)/Nav";
import Admin from "@/modules/login/admin";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Admin>
      <SideBar />
      <section className="w-full md:pl-[96px] min-[1140px]:pl-[270px]">
        <NavBar />
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          {children}
        </div>
      </section>
    </Admin>
  );
}
