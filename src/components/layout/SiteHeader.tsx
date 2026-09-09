"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { EnrollButton } from "@/features/enrollment";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: t("programs"), href: "/programs" },
    { label: t("tutors"), href: "/tutors" },
    { label: t("approach"), href: "/#approach" },
    { label: t("pricing"), href: "/#pricing" },
    { label: t("collaboration"), href: "/#collaboration" },
    { label: t("faq"), href: "/#faq" },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20">
        <div
          className={cn(
            "site-header-glass absolute inset-0 transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          aria-hidden
        />
        <div className="relative mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/logo-icon.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 dark:hidden"
              priority
            />
            <Image
              src="/brand/logo-icon-white.svg"
              alt=""
              width={32}
              height={32}
              className="hidden h-8 w-8 dark:block"
              priority
            />
            <span className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
              {siteConfig.productName}
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:text-foreground hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 flex items-center justify-end gap-2 sm:gap-3">
            <LanguageSwitcher className="hidden sm:inline-flex" />
            <ThemeToggle className="hidden sm:inline-flex" />
            <EnrollButton className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light sm:inline-flex">
              {t("enroll")}
            </EnrollButton>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t("closeMenu") : t("openMenu")}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-nav"
          className="mobile-nav-root fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/85 backdrop-blur-sm"
            aria-label={t("closeMenu")}
            onClick={() => setOpen(false)}
          />
          <div className="mobile-nav-panel absolute inset-x-0 top-20 border-b border-border/60 bg-background px-4 pb-8 pt-4 shadow-sm sm:px-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-heading rounded-xl px-3 py-3 text-2xl font-semibold text-foreground transition-colors hover:bg-card"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-3">
              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <EnrollButton
                className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light"
                onClick={() => setOpen(false)}
              >
                {t("enroll")}
              </EnrollButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
