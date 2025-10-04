import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = () => {
  return (
    <nav className="w-full border-b border-b-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
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
