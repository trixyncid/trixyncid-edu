"use client";

import { useTranslations } from "next-intl";
import { SectionShell } from "@/components/shared/SectionShell";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <SectionShell id="faq" containerSize="narrow">
      <ScrollReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {t("title")}
        </h2>
      </ScrollReveal>

      <div className="mt-10 space-y-3">
        {items.map((item, index) => (
          <ScrollReveal key={item.q} delay={index * 0.04}>
            <details className="group rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-sm open:bg-card dark:bg-card/15 dark:shadow-none dark:open:bg-card/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[0.975rem]">
                {item.a}
              </p>
            </details>
          </ScrollReveal>
        ))}
      </div>
    </SectionShell>
  );
}
