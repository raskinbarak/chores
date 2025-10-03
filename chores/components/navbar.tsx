import Link from "next/link";
import React from "react";
import { AuthButton } from "@/components/auth-button";

export const Navbar = () => {
  return (
    <nav className="w-full border-b border-b-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/"} className="text-lg font-semibold tracking-tight">
            Chores App
          </Link>
          <span className="hidden sm:inline text-xs text-foreground/70">
            simple, focused task management
          </span>
        </div>
        <div className="flex items-center gap-3">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
