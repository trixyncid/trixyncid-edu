"use client";

import { useTranslations } from "next-intl";
import { SectionShell } from "@/components/shared/SectionShell";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/scroll-reveal";

export function EnrollmentSection() {
  const t = useTranslations("enrollment");
  const ladder = t.raw("ladder") as { label: string; stage: string; next: string }[];
  const windows = t.raw("windows") as { window: string; months: string; duration: string }[];
  const deliveryItems = t.raw("deliveryItems") as string[];

  return (
    <SectionShell id="enrollment" variant="ambient">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
            {t("subtitle")}
          </p>

          <ol className="mt-8 space-y-0">
            {ladder.map((step, i) => (
              <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
                {i < ladder.length - 1 && (
                  <span
                    className="absolute left-[0.9rem] top-8 h-[calc(100%-1.25rem)] w-px bg-gradient-to-b from-brand/40 to-border dark:from-brand-light/50"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-background text-xs font-semibold text-brand dark:text-brand-light">
                  {i + 1}
                </span>
                <div>
                  <p className="font-heading font-semibold text-foreground">{step.label}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{step.stage}</p>
                  <p className="mt-1 text-sm text-foreground/80">{step.next}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t("windowsEyebrow")}
          </p>
          <h3 className="mt-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
            {t("windowsTitle")}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t("windowsSubtitle")}
          </p>

          <ScrollStagger className="mt-8 space-y-4">
            {windows.map((window) => (
              <ScrollStaggerItem key={window.window}>
                <div className="flex flex-col gap-1 border-l-2 border-brand/40 py-1 pl-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <div>
                    <p className="font-heading font-semibold text-foreground">{window.window}</p>
                    <p className="text-sm text-muted-foreground">{window.months}</p>
                  </div>
                  <p className="text-sm text-foreground/85">{window.duration}</p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>

          <div className="mt-10 rounded-2xl border border-border/70 bg-card p-5 shadow-sm dark:bg-card/20 dark:shadow-none">
            <p className="text-sm font-medium text-foreground">{t("deliveryTitle")}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {deliveryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
