import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors px-1 py-0.5", className)}>
      {children}
    </span>
  );
};
