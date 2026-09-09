"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type OpenOptions = {
  programId?: string;
};

type EnrollmentContextValue = {
  open: boolean;
  programId?: string;
  openEnrollment: (options?: OpenOptions) => void;
  closeEnrollment: () => void;
};

const EnrollmentContext = createContext<EnrollmentContextValue | null>(null);

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [programId, setProgramId] = useState<string | undefined>();

  const openEnrollment = useCallback((options?: OpenOptions) => {
    setProgramId(options?.programId);
    setOpen(true);
  }, []);

  const closeEnrollment = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ open, programId, openEnrollment, closeEnrollment }),
    [open, programId, openEnrollment, closeEnrollment],
  );

  return (
    <EnrollmentContext.Provider value={value}>{children}</EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error("useEnrollment must be used within EnrollmentProvider");
  }
  return context;
}
