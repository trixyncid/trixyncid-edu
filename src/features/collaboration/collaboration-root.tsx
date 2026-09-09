"use client";

import type { ReactNode } from "react";
import { CollaborationProvider } from "./collaboration-context";
import { CollaborationDialog } from "./collaboration-dialog";

export function CollaborationRoot({ children }: { children: ReactNode }) {
  return (
    <CollaborationProvider>
      {children}
      <CollaborationDialog />
    </CollaborationProvider>
  );
}
