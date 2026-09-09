"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useTutorApply } from "./tutor-apply-context";

type TutorApplyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function TutorApplyButton({
  children,
  className,
  type = "button",
  onClick,
  ...props
}: TutorApplyButtonProps) {
  const { openTutorApply } = useTutorApply();

  return (
    <button
      type={type}
      className={cn(className)}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openTutorApply();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
