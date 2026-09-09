"use client";

import { motion } from "motion/react";
import { useHydrationSafeReducedMotion } from "@/hooks/use-hydration-safe-reduced-motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.15,
}: ScrollRevealProps) {
  const reduced = useHydrationSafeReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: reduced ? 0 : 0.28,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type ScrollStaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
};

export function ScrollStagger({
  children,
  className,
  stagger = 0.05,
  amount = 0.12,
}: ScrollStaggerProps) {
  const reduced = useHydrationSafeReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useHydrationSafeReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduced ? { opacity: 1 } : { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type HeroRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function HeroReveal({ children, className, delay = 0 }: HeroRevealProps) {
  const reduced = useHydrationSafeReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: reduced ? 0 : 0.35,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
