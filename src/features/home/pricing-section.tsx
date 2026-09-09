"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionShell } from "@/components/shared/SectionShell";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { getLocalizedPricingRows, type Locale } from "@/content/programs-i18n";
import { EnrollButton } from "@/features/enrollment";

export function PricingSection() {
  const t = useTranslations("pricing");
  const locale = useLocale() as Locale;
  const rows = getLocalizedPricingRows(locale);

  return (
    <SectionShell id="pricing" variant="brand">
      <ScrollReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t("eyebrow")}
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
          {t("subtitle")}
        </p>
      </ScrollReveal>

      <ScrollReveal
        delay={0.05}
        className="mt-10 overflow-x-auto rounded-2xl border border-border/60 bg-card p-2 shadow-sm dark:bg-card/20 dark:shadow-none md:p-4"
      >
        <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border/60 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <th className="pb-3 pr-4 font-medium">{t("colProgram")}</th>
              <th className="pb-3 pr-4 font-medium">{t("colStage")}</th>
              <th className="pb-3 pr-4 font-medium">{t("colSessions")}</th>
              <th className="pb-3 pr-4 font-medium">{t("colPrice")}</th>
              <th className="pb-3 pr-4 font-medium">{t("colPer2")}</th>
              <th className="pb-3 font-medium">{t("colPer3")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.program} className="border-b border-border/40 last:border-0">
                <td className="py-4 pr-4">
                  <Link
                    href={row.href}
                    className="font-medium text-foreground transition-colors hover:text-brand dark:hover:text-brand-light"
                  >
                    {row.program}
                  </Link>
                </td>
                <td className="py-4 pr-4 text-muted-foreground">{row.tier}</td>
                <td className="py-4 pr-4 text-muted-foreground">{row.sessions}</td>
                <td className="py-4 pr-4 font-heading font-semibold text-foreground">{row.price}</td>
                <td className="py-4 pr-4 text-foreground/85">{row.pricePer2}</td>
                <td className="py-4 font-medium text-brand dark:text-brand-light">{row.pricePer3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollReveal>

      <ScrollReveal
        delay={0.1}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{t("note")}</p>
        <EnrollButton className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light">
          {t("cta")}
        </EnrollButton>
      </ScrollReveal>
    </SectionShell>
  );
}
