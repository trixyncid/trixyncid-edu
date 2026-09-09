"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/Container";
import type { LocalizedProgram } from "@/content/programs-i18n";
import { getLocalizedPrograms, getProgramPriceSplits, type Locale } from "@/content/programs-i18n";
import { getLocalizedTutors } from "@/content/tutors-i18n";
import { EnrollButton } from "@/features/enrollment";
import { cn } from "@/lib/utils";

const accentText = {
  emerald: "text-emerald-700 dark:text-emerald-400/90",
  sky: "text-sky-700 dark:text-sky-400/90",
  violet: "text-violet-700 dark:text-violet-400/90",
  amber: "text-amber-700 dark:text-amber-400/90",
  rose: "text-rose-700 dark:text-rose-400/90",
  cyan: "text-cyan-700 dark:text-cyan-400/90",
} as const;

export function ProgramDetail({ program }: { program: LocalizedProgram }) {
  const t = useTranslations("programDetail");
  const tPage = useTranslations("programsPage");
  const locale = useLocale() as Locale;
  const hoursUnit = locale === "en" ? "hrs" : "jam";
  const splits = program.partnerPricing
    ? null
    : getProgramPriceSplits(program.sessions);
  const partner = program.partnerPricing;

  const others = getLocalizedPrograms(locale).filter((p) => p.id !== program.id);
  const tutors = getLocalizedTutors(locale).filter((tutor) =>
    tutor.teaches.includes(program.id),
  );

  return (
    <article>
      <section className="relative overflow-hidden pb-12 pt-10 md:pb-16 md:pt-14">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(56,102,242,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(56,102,242,0.1),transparent_70%)]"
          aria-hidden
        />
        <Container size="wide" className="relative">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              {tPage("breadcrumbHome")}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <Link href="/programs" className="transition-colors hover:text-foreground">
              {tPage("breadcrumbPrograms")}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-foreground/80">{program.shortName}</span>
          </nav>

          <p
            className={cn(
              "mt-8 text-xs font-medium uppercase tracking-[0.2em]",
              accentText[program.accent],
            )}
          >
            {program.tier}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-tight">
            {program.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {program.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {program.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-foreground/85 shadow-sm dark:bg-card/30 dark:shadow-none"
              >
                {tech}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t("audience")}
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {program.audience} · {program.ages}
              </dd>
            </div>
            {!partner && (
              <>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t("sessions")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {program.sessions} × 2 {hoursUnit === "hrs" ? "hrs" : "jam"} · {program.hours}{" "}
                    {hoursUnit}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t("classSize")}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">{program.classSize}</dd>
                </div>
              </>
            )}
            <div className={partner ? "sm:col-span-2 lg:col-span-3" : "sm:col-span-2 lg:col-span-2"}>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {partner ? t("partnerPricingLabel") : t("investment")}
              </dt>
              {partner ? (
                <dd className="mt-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("partnerPricingBody", { partner: partner.partnerName })}
                  </p>
                </dd>
              ) : (
                <>
                  <dd className="mt-1 font-heading text-base font-semibold text-foreground">
                    {program.price}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {t("priceSplitHint")}
                    </span>
                  </dd>
                  {splits && (
                    <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                      <li className="rounded-xl border border-border/60 bg-card/50 px-3 py-2 dark:bg-card/20">
                        <p className="text-xs text-muted-foreground">{t("priceSolo")}</p>
                        <p className="mt-0.5 font-medium text-foreground">{splits.per1}</p>
                      </li>
                      <li className="rounded-xl border border-border/60 bg-card/50 px-3 py-2 dark:bg-card/20">
                        <p className="text-xs text-muted-foreground">{t("priceDuo")}</p>
                        <p className="mt-0.5 font-medium text-foreground">{splits.per2}</p>
                      </li>
                      <li className="rounded-xl border border-brand/30 bg-brand/[0.06] px-3 py-2">
                        <p className="text-xs text-muted-foreground">{t("priceTrio")}</p>
                        <p className="mt-0.5 font-medium text-brand dark:text-brand-light">
                          {splits.per3}
                        </p>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </div>
          </dl>

          {program.priceNote && !partner && (
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{program.priceNote}</p>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {partner ? (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light"
              >
                {t("partnerPricingCta", { partner: partner.partnerName })}
              </a>
            ) : (
              <EnrollButton
                programId={program.id}
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light"
              >
                {t("enroll")}
              </EnrollButton>
            )}
            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:border-foreground/25"
            >
              {t("allPrograms")}
            </Link>
          </div>
        </Container>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      <Container size="wide" className="py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,20rem)_1fr]">
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">{t("overview")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{program.vibe}</p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                {t("prerequisites")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {program.prerequisites}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">{t("tools")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.tools}</p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">{t("byTheEnd")}</h2>
              <ul className="mt-3 space-y-2">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-brand-light" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            {program.sessionStructure && !partner && (
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  {t("sessionStructure")}
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">{t("sessionStructureNote")}</p>
                <ul className="mt-3 space-y-2">
                  {program.sessionStructure.map((row) => (
                    <li key={row.time} className="flex gap-3 text-sm">
                      <span className="w-24 shrink-0 font-medium text-brand dark:text-brand-light/90">
                        {row.time}
                      </span>
                      <span className="text-foreground/85">{row.activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tutors.length > 0 && (
              <div>
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  {t("yourTutor")}
                </h2>
                <ul className="mt-3 space-y-3">
                  {tutors.map((tutor) => (
                    <li key={tutor.id}>
                      <Link
                        href={`/tutors/${tutor.id}`}
                        className="block rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-sm transition-colors hover:border-brand/30 dark:bg-card/20 dark:shadow-none"
                      >
                        <p className="font-heading text-sm font-semibold text-foreground">
                          {tutor.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{tutor.role}</p>
                        <p className="mt-2 text-xs font-medium text-brand dark:text-brand-light">
                          {t("viewProfile")} →
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
              {t("fullCurriculum")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[0.975rem]">
              {t("curriculumIntro")}
            </p>

            <div className="mt-8 space-y-12">
              {program.curriculum.map((block) => (
                <section key={block.title}>
                  <h3 className="font-heading text-base font-semibold text-foreground md:text-lg">
                    {block.title}
                  </h3>
                  {block.note && (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{block.note}</p>
                  )}

                  <div className="mt-5 space-y-3">
                    {block.sessions.map((session) => (
                      <details
                        key={`${block.title}-${session.number}-${session.title}`}
                        className="group rounded-2xl border border-border/70 bg-card shadow-sm open:bg-card dark:bg-card/15 dark:shadow-none dark:open:bg-card/25"
                      >
                        <summary className="flex cursor-pointer list-none items-start gap-4 px-4 py-4 sm:px-5 [&::-webkit-details-marker]:hidden">
                          <span className="mt-0.5 w-8 shrink-0 font-heading text-sm font-semibold text-brand dark:text-brand-light">
                            {session.number}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="font-heading text-sm font-semibold text-foreground sm:text-base">
                              {session.title}
                            </span>
                            <span className="mt-1 block text-sm text-muted-foreground">
                              {session.topics}
                            </span>
                          </span>
                          <span
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-transform group-open:rotate-45"
                            aria-hidden
                          >
                            +
                          </span>
                        </summary>
                        <div className="border-t border-border/40 px-4 pb-5 pt-4 sm:px-5 sm:pl-[3.75rem]">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                            {t("whatYouLearn")}
                          </p>
                          <ul className="mt-3 space-y-2">
                            {session.youWillLearn.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand dark:bg-brand-light" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          {session.deliverable && (
                            <p className="mt-4 rounded-xl border border-brand/25 bg-brand/[0.06] px-3 py-2.5 text-sm text-foreground/90">
                              <span className="font-medium text-brand dark:text-brand-light">
                                {t("deliverable")}:{" "}
                              </span>
                              {session.deliverable}
                            </p>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="section-divider mx-auto max-w-4xl" />

      <Container size="wide" className="py-12 md:py-16">
        <h2 className="font-heading text-xl font-semibold text-foreground">{t("otherPrograms")}</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.id}
              href={`/programs/${other.id}`}
              className="rounded-2xl border border-border/70 bg-card px-4 py-4 shadow-sm transition-colors hover:border-brand/30 dark:bg-card/15 dark:shadow-none"
            >
              <p className={cn("text-[11px] font-medium uppercase tracking-[0.16em]", accentText[other.accent])}>
                {other.tier}
              </p>
              <p className="mt-1 font-heading text-sm font-semibold text-foreground">{other.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {other.partnerPricing
                  ? t("partnerPricingShort")
                  : `${other.sessions} · ${other.price}`}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </article>
  );
}
