"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useEnrollment } from "./enrollment-context";

type EnrollButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  programId?: string;
  children: ReactNode;
};

export function EnrollButton({
  programId,
  children,
  className,
  type = "button",
  onClick,
  ...props
}: EnrollButtonProps) {
  const { openEnrollment } = useEnrollment();

  return (
    <button
      type={type}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openEnrollment({ programId });
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
