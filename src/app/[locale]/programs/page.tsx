import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/Container";
import { getLocalizedPrograms, type Locale } from "@/content/programs-i18n";
import { cn } from "@/lib/utils";

const accentText = {
  emerald: "text-emerald-700 dark:text-emerald-400/90",
  sky: "text-sky-700 dark:text-sky-400/90",
  violet: "text-violet-700 dark:text-violet-400/90",
  amber: "text-amber-700 dark:text-amber-400/90",
  rose: "text-rose-700 dark:text-rose-400/90",
  cyan: "text-cyan-700 dark:text-cyan-400/90",
} as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "programsPage" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProgramsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programsPage");
  const programs = getLocalizedPrograms(locale as Locale);
  const hoursUnit = locale === "en" ? "hrs" : "jam";

  return (
    <div className="pb-16 pt-10 md:pb-24 md:pt-14">
      <Container size="wide">
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            {t("breadcrumbHome")}
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-foreground/80">{t("breadcrumbPrograms")}</span>
        </nav>

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-tight">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-12 space-y-4">
          {programs.map((program) => (
            <Link
              key={program.id}
              href={`/programs/${program.id}`}
              className="group flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-150 hover:border-brand/30 hover:shadow-md dark:bg-card/15 dark:shadow-none sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-6"
            >
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.18em]",
                    accentText[program.accent],
                  )}
                >
                  {program.tier}
                </p>
                <h2 className="mt-1 font-heading text-lg font-semibold text-foreground md:text-xl">
                  {program.name}
                </h2>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {program.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {program.summary}
                </p>
              </div>
              <div className="flex shrink-0 flex-row items-center justify-between gap-6 sm:flex-col sm:items-end sm:text-right">
                <div>
                  {program.partnerPricing ? (
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {t("partnerPricing")}
                    </p>
                  ) : (
                    <>
                      <p className="text-xs text-muted-foreground">
                        {program.sessions} · {program.hours} {hoursUnit}
                      </p>
                      <p className="mt-1 font-heading text-sm font-semibold text-foreground">
                        {program.price}
                      </p>
                    </>
                  )}
                </div>
                <span className="text-sm font-medium text-brand group-hover:text-brand-light dark:text-brand-light">
                  {t("viewCurriculum")} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
