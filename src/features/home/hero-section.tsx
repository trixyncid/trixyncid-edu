"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { HeroReveal } from "@/components/shared/scroll-reveal";
import { EnrollButton } from "@/features/enrollment";

function HeroVisual() {
  const lines = [
    "def belajar_dengan_membangun():",
    '    kota = "Medan"',
    "    sesi_jam = 2",
    '    return "Demo Day"',
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(33,56,184,0.12),transparent_62%),radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(33,56,184,0.08),transparent_65%),radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(56,102,242,0.05),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(33,56,184,0.22),transparent_62%),radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(33,56,184,0.2),transparent_65%),radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(56,102,242,0.08),transparent_55%)]" />

      <div className="hero-orb absolute -right-16 top-24 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[110px] max-md:hidden dark:bg-brand-light/15" />
      <div className="hero-orb-delayed absolute -left-20 bottom-10 h-[22rem] w-[22rem] rounded-full bg-brand-light/10 blur-[100px] max-md:hidden dark:bg-brand-light/15" />

      <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <div className="absolute inset-0 bg-[linear-gradient(to_left,transparent,var(--background)_92%)]" />
        <div className="absolute inset-8 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.4] dark:opacity-[0.45]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,102,242,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(56,102,242,0.14) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "linear-gradient(to bottom, black 0%, transparent 90%)",
            }}
          />
          <div className="absolute left-10 top-24 space-y-4 font-mono text-sm text-brand dark:text-brand-light/80 md:text-[0.95rem]">
            {lines.map((line, i) => (
              <p key={line} className="hero-code-line" style={{ animationDelay: `${i * 0.55}s` }}>
                <span className="mr-4 text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent lg:via-background/60" />
      <div className="grain-overlay absolute inset-0 opacity-30 max-md:hidden dark:opacity-40" />
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative -mt-20 min-h-[88vh] overflow-hidden pb-20 pt-[calc(var(--site-header-height)+3rem)] md:pb-28 md:pt-[calc(var(--site-header-height)+4rem)]">
      <HeroVisual />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <HeroReveal delay={0}>
            <p className="mb-5 font-heading text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-[2rem]">
              {t("brand")}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.08}>
            <h1 className="font-heading text-[2.125rem] font-semibold leading-[1.12] tracking-[-0.025em] text-foreground sm:text-[2.75rem] lg:text-[3.5rem] lg:leading-[1.08]">
              {t("headline")}
              <span className="mt-1 block font-normal tracking-[-0.02em] text-muted-foreground lg:text-[3.25rem]">
                {t("headlineMuted")}
              </span>
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.16}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              {t("subheadline")}
            </p>
          </HeroReveal>

          <HeroReveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <EnrollButton className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light">
                {t("ctaPrimary")}
              </EnrollButton>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.03] hover:text-foreground"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
