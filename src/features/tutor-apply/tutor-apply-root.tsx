"use client";

import type { ReactNode } from "react";
import { TutorApplyProvider } from "./tutor-apply-context";
import { TutorApplyDialog } from "./tutor-apply-dialog";

export function TutorApplyRoot({ children }: { children: ReactNode }) {
  return (
    <TutorApplyProvider>
      {children}
      <TutorApplyDialog />
    </TutorApplyProvider>
  );
}
