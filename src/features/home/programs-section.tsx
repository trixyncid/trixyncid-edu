"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionShell } from "@/components/shared/SectionShell";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/scroll-reveal";
import { getLocalizedPrograms, getProgramPriceSplits, type Locale } from "@/content/programs-i18n";
import { cn } from "@/lib/utils";

const accentText = {
  emerald: "text-emerald-700 dark:text-emerald-400/90",
  sky: "text-sky-700 dark:text-sky-400/90",
  violet: "text-violet-700 dark:text-violet-400/90",
  amber: "text-amber-700 dark:text-amber-400/90",
  rose: "text-rose-700 dark:text-rose-400/90",
  cyan: "text-cyan-700 dark:text-cyan-400/90",
} as const;

export function ProgramsSection() {
  const t = useTranslations("programsSection");
  const locale = useLocale() as Locale;
  const programs = getLocalizedPrograms(locale);

  return (
    <SectionShell id="programs" containerSize="wide">
      <ScrollReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
          {t("subtitle")}
        </p>
      </ScrollReveal>

      <ScrollStagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {programs.map((program) => (
          <ScrollStaggerItem key={program.id}>
            <Link
              href={`/programs/${program.id}`}
              className={cn(
                "group flex h-full flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-150",
                "hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_12px_40px_rgba(33,56,184,0.1)]",
                "dark:bg-card/20 dark:shadow-none",
              )}
            >
              <p className={cn("text-xs font-medium uppercase tracking-[0.18em]", accentText[program.accent])}>
                {program.tier}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold text-foreground md:text-xl">
                {program.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {program.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/70 bg-background/80 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.summary}
              </p>
              <div className="mt-5 flex items-end justify-between gap-3 border-t border-border/50 pt-4">
                <div>
                  {program.partnerPricing ? (
                    <p className="mt-1 font-heading text-sm font-semibold text-foreground">
                      {t("partnerPricing")}
                    </p>
                  ) : (
                    <>
                      <p className="text-xs text-muted-foreground">
                        {program.sessions} {t("sessionsLabel")} · {program.hours}{" "}
                        {locale === "en" ? "hrs" : "jam"} · {program.classSize}
                      </p>
                      <p className="mt-1 font-heading text-sm font-semibold text-foreground">
                        {program.price}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {locale === "id"
                          ? `dari ${getProgramPriceSplits(program.sessions).per3}/orang (3 siswa)`
                          : `from ${getProgramPriceSplits(program.sessions).per3}/person (3 students)`}
                      </p>
                    </>
                  )}
                </div>
                <span className="text-sm font-medium text-brand transition-colors group-hover:text-brand-light dark:text-brand-light">
                  {t("viewDetails")} →
                </span>
              </div>
            </Link>
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>

      <ScrollReveal delay={0.08} className="mt-8 text-center">
        <Link
          href="/programs"
          className="inline-flex rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/25 hover:bg-foreground/[0.03]"
        >
          {t("viewAll")}
        </Link>
      </ScrollReveal>
    </SectionShell>
  );
}
