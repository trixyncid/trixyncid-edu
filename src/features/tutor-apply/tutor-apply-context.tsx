"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type TutorApplyContextValue = {
  open: boolean;
  openTutorApply: () => void;
  closeTutorApply: () => void;
};

const TutorApplyContext = createContext<TutorApplyContextValue | null>(null);

export function TutorApplyProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openTutorApply = useCallback(() => setOpen(true), []);
  const closeTutorApply = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openTutorApply, closeTutorApply }),
    [open, openTutorApply, closeTutorApply],
  );

  return (
    <TutorApplyContext.Provider value={value}>{children}</TutorApplyContext.Provider>
  );
}

export function useTutorApply() {
  const context = useContext(TutorApplyContext);
  if (!context) {
    throw new Error("useTutorApply must be used within TutorApplyProvider");
  }
  return context;
}
