"use client";

import { useTranslations } from "next-intl";
import { SectionShell } from "@/components/shared/SectionShell";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/scroll-reveal";

export function ApproachSection() {
  const t = useTranslations("approach");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <SectionShell id="approach" variant="ambient">
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

      <ScrollStagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <ScrollStaggerItem key={item.title}>
            <div className="relative pl-4 before:absolute before:left-0 before:top-1 before:h-8 before:w-px before:bg-brand/40 dark:before:bg-brand-light/50">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand dark:text-brand-light/90">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-heading text-base font-semibold text-foreground md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStagger>
    </SectionShell>
  );
}
