import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={`w-full max-w-5xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
};
