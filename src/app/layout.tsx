import type { Metadata } from "next";
import "../styles/globals.scss";
import { montserrat, poppins } from "@/fonts";

export const metadata: Metadata = {
  title: "Mr Grace",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
