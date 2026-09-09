"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Avoid SSR/client mismatch for prefers-reduced-motion. */
export function useHydrationSafeReducedMotion() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return false;
  return reduced === true;
}
