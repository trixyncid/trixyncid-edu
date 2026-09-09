"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/Container";
import { getLocalizedPrograms, type Locale } from "@/content/programs-i18n";
import {
  getLocalizedTutor,
  getLocalizedTutors,
  type LocalizedTutor,
} from "@/content/tutors-i18n";
import { tutorInitials } from "@/content/tutors";
import { siteConfig } from "@/content/site";
import { EnrollButton } from "@/features/enrollment";
import { TutorApplyButton } from "@/features/tutor-apply";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </h2>
  );
}

export function TutorDetail({ tutor }: { tutor: LocalizedTutor }) {
  const t = useTranslations("tutorDetail");
  const tPage = useTranslations("tutorsPage");
  const locale = useLocale() as Locale;

  const taughtPrograms = getLocalizedPrograms(locale).filter((p) =>
    tutor.teaches.includes(p.id),
  );
  const others = getLocalizedTutors(locale).filter((item) => item.id !== tutor.id);

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
            <Link href="/tutors" className="transition-colors hover:text-foreground">
              {tPage("breadcrumbTutors")}
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="text-foreground/80">{tutor.name}</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-14">
            <div>
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border/70 bg-brand/10 font-heading text-3xl font-semibold text-brand shadow-sm dark:bg-brand/15 dark:text-brand-light dark:shadow-none">
                {tutorInitials(tutor.name)}
              </div>
              <h1 className="mt-6 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {tutor.name}
              </h1>
              <p className="mt-2 text-sm text-brand dark:text-brand-light">{tutor.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{tutor.location}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tutor.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-border/70 bg-card px-3 py-1 text-xs text-muted-foreground shadow-sm dark:bg-transparent dark:shadow-none"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm">
                {tutor.email && (
                  <a
                    href={`mailto:${tutor.email}`}
                    className="text-foreground/85 transition-colors hover:text-brand dark:hover:text-brand-light"
                  >
                    {tutor.email}
                  </a>
                )}
                {tutor.website && (
                  <a
                    href={tutor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tutor.website.replace(/^https?:\/\//, "")}
                  </a>
                )}
                {tutor.social?.instagram && (
                  <a
                    href={tutor.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Instagram {siteConfig.social.instagramHandle}
                  </a>
                )}
                {tutor.social?.linkedin && (
                  <a
                    href={tutor.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                )}
                {tutor.social?.github && (
                  <a
                    href={tutor.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                )}
              </div>

              <EnrollButton
                programId={taughtPrograms[0]?.id}
                className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-light"
              >
                {t("askAbout")}
              </EnrollButton>
              <TutorApplyButton className="mt-3 inline-flex rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand/40 hover:bg-brand/[0.04]">
                {t("applyButton")}
              </TutorApplyButton>
            </div>

            <div className="space-y-10">
              <p className="text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed">
                {tutor.headline}
              </p>

              <div>
                <SectionHeading>{t("background")}</SectionHeading>
                <div className="mt-4 space-y-4">
                  {tutor.bio.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-sm leading-relaxed text-foreground/85 md:text-[0.975rem] md:leading-[1.75]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading>{t("focus")}</SectionHeading>
                <ul className="mt-4 space-y-2">
                  {tutor.focus.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-foreground/85">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand dark:bg-brand-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionHeading>{t("programsTaught")}</SectionHeading>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {taughtPrograms.map((program) => (
                    <Link
                      key={program.id}
                      href={`/programs/${program.id}`}
                      className="rounded-2xl border border-border/70 bg-card px-4 py-3 shadow-sm transition-colors hover:border-brand/30 dark:bg-card/15 dark:shadow-none"
                    >
                      <p className="font-heading text-sm font-semibold text-foreground">
                        {program.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {program.sessions} · {t("viewCurriculum")} →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {others.length > 0 && (
        <>
          <div className="section-divider mx-auto max-w-4xl" />
          <Container size="wide" className="py-12 md:py-16">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              {t("otherTutors")}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/tutors/${other.id}`}
                  className="group rounded-3xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-brand/30 dark:bg-card/15 dark:shadow-none"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-brand/10 font-heading text-sm font-semibold text-brand dark:bg-brand/15 dark:text-brand-light">
                    {tutorInitials(other.name)}
                  </div>
                  <p className="mt-4 font-heading text-base font-semibold text-foreground">
                    {other.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{other.role}</p>
                  <p className="mt-3 text-sm font-medium text-brand group-hover:text-brand-light dark:text-brand-light">
                    {t("viewProfile")} →
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </>
      )}
    </article>
  );
}

/** Keep helper available for server pages that resolve by id */
export function resolveTutor(locale: Locale, id: string) {
  return getLocalizedTutor(locale, id);
}
