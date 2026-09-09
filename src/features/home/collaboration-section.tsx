"use client";

import { useTranslations } from "next-intl";
import { SectionShell } from "@/components/shared/SectionShell";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/shared/scroll-reveal";
import { CollaborationButton } from "@/features/collaboration";
import { siteConfig } from "@/content/site";

export function CollaborationSection() {
  const t = useTranslations("collaboration");
  const items = t.raw("items") as { title: string; body: string }[];

  const partners = [
    {
      id: "yanksAndBrits" as const,
      name: siteConfig.partners.yanksAndBrits.name,
      url: siteConfig.partners.yanksAndBrits.url,
    },
  ];

  return (
    <SectionShell id="collaboration" variant="ambient">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
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

          <div className="mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("partnersEyebrow")}
            </p>
            <ul className="mt-4 space-y-3">
              {partners.map((partner) => (
                <li key={partner.id}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-border/70 bg-card px-4 py-4 shadow-sm transition-colors hover:border-brand/30 dark:bg-card/15 dark:shadow-none"
                  >
                    <p className="font-heading text-sm font-semibold text-foreground group-hover:text-brand dark:group-hover:text-brand-light">
                      {partner.name}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {t(`partners.${partner.id}`)}
                    </p>
                    <p className="mt-3 text-xs font-medium text-brand dark:text-brand-light">
                      {t("partnerVisit")} →
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ScrollStagger className="mt-10 space-y-6">
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
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm dark:bg-card/20 dark:shadow-none sm:p-8 lg:sticky lg:top-28">
            <p className="font-heading text-lg font-semibold text-foreground md:text-xl">
              {t("ctaTitle")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("ctaBody")}</p>
            <CollaborationButton className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light sm:w-auto">
              {t("ctaButton")}
            </CollaborationButton>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
