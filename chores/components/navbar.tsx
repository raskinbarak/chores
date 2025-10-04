"use client";

import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { resolvedTheme } = useTheme();

  return (
    <nav className="w-full border-b border-b-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {resolvedTheme === "dark" ? (
            <Image src="/darkicon.png" width={40} height={40} alt="dark icon" />
          ) : (
            <Image
              src="/lighticon.png"
              width={40}
              height={40}
              alt="light icon"
            />
          )}
          <Link href={"/"} className="text-lg font-semibold tracking-tight">
            Trying To Code
          </Link>
          <span className="hidden sm:inline text-xs text-foreground/70">
            with naama libi dolev
          </span>
        </div>
        <div className="flex items-center gap-3"></div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
