"use client";

import type { ReactNode } from "react";
import { EnrollmentProvider } from "./enrollment-context";
import { EnrollmentDialog } from "./enrollment-dialog";

export function EnrollmentRoot({ children }: { children: ReactNode }) {
  return (
    <EnrollmentProvider>
      {children}
      <EnrollmentDialog />
    </EnrollmentProvider>
  );
}
