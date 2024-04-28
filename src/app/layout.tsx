import type { Metadata } from "next";
import "../config/globals.css";
import React from "react";
import Link from "next/link";
import { Gothic_A1 } from "next/font/google";
import { Theme } from "@/components/Theme";
import DarkmodeButton from "@/components/Darkmodebutton";

export const metadata: Metadata = {
  title: "PromleeBlog by Nextjs",
  description: "Generated by PROMLEE",
  icons: {
    icon: "/favicon.ico",
  },
};
const noto = Gothic_A1({
  weight: ["100", "500", "900"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${noto.className} scroll-smooth focus:scroll-auto`}>
      <body>
        <Theme>
          <div className={"topbar"}>
            <Link
              href={"/"}
              className={
                "m-5 hover:text-white hover:bg-black bg-white text-black rounded-lg p-1"
              }
            >
              PromleeBlog
            </Link>
            <Link
              href={"/blog"}
              className={
                "text-2xl text-black dark:text-white hover:text-amber-700"
              }
            >
              Categories
            </Link>
            <DarkmodeButton />
          </div>
          <div
            className={
              "dark:bg-slate-950 dark:border-slate-800 w-full md:w-5/6 xl:w-3/5 px-10 pb-40 min-h-[800px]  border-2"
            }
          >
            {children}
          </div>
          <footer
            className={
              "dark:bg-black w-full h-20 flex justify-center items-center border-t-2 dark:border-slate-500"
            }
          >
            <p className={"dark:text-white"}>© 2024 Promlee</p>
          </footer>
        </Theme>
      </body>
    </html>
  );
}
