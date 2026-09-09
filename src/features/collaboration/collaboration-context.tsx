"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CollaborationContextValue = {
  open: boolean;
  openCollaboration: () => void;
  closeCollaboration: () => void;
};

const CollaborationContext = createContext<CollaborationContextValue | null>(null);

export function CollaborationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openCollaboration = useCallback(() => setOpen(true), []);
  const closeCollaboration = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openCollaboration, closeCollaboration }),
    [open, openCollaboration, closeCollaboration],
  );

  return (
    <CollaborationContext.Provider value={value}>{children}</CollaborationContext.Provider>
  );
}

export function useCollaboration() {
  const context = useContext(CollaborationContext);
  if (!context) {
    throw new Error("useCollaboration must be used within CollaborationProvider");
  }
  return context;
}
