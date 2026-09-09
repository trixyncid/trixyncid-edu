"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCollaboration } from "./collaboration-context";

type CollaborationButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function CollaborationButton({
  children,
  className,
  type = "button",
  onClick,
  ...props
}: CollaborationButtonProps) {
  const { openCollaboration } = useCollaboration();

  return (
    <button
      type={type}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openCollaboration();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
