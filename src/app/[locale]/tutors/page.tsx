import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/shared/Container";
import { getLocalizedTutors } from "@/content/tutors-i18n";
import type { Locale } from "@/content/programs-i18n";
import { tutorInitials } from "@/content/tutors";
import { EnrollButton } from "@/features/enrollment";
import { TutorApplyButton } from "@/features/tutor-apply";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tutorsPage" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function TutorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("tutorsPage");
  const tutors = getLocalizedTutors(locale as Locale);

  return (
    <div className="pb-16 pt-10 md:pb-24 md:pt-14">
      <Container size="wide">
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            {t("breadcrumbHome")}
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-foreground/80">{t("breadcrumbTutors")}</span>
        </nav>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl md:leading-tight">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("subtitle")}
            </p>
          </div>
          <TutorApplyButton className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:bg-brand/[0.04]">
            {t("applyButton")}
          </TutorApplyButton>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {tutors.map((tutor) => (
            <Link
              key={tutor.id}
              href={`/tutors/${tutor.id}`}
              className="group flex h-full flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md dark:bg-card/15 dark:shadow-none"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-brand/10 font-heading text-xl font-semibold text-brand dark:bg-brand/15 dark:text-brand-light">
                {tutorInitials(tutor.name)}
              </div>
              <h2 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {tutor.name}
              </h2>
              <p className="mt-1 text-sm text-brand dark:text-brand-light">{tutor.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{tutor.location}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {tutor.headline}
              </p>
              <p className="mt-6 text-sm font-medium text-brand transition-colors group-hover:text-brand-light dark:text-brand-light">
                {t("viewProfile")} →
              </p>
            </Link>
          ))}
        </div>

        <div className="section-divider mx-auto mt-16 max-w-4xl" />

        <div className="mx-auto mt-12 grid max-w-4xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {t("applyEyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-xl font-semibold text-foreground md:text-2xl">
              {t("applyTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("applyBody")}</p>
            <TutorApplyButton className="mt-6 inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light">
              {t("applyButton")}
            </TutorApplyButton>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground md:text-2xl">
              {t("ctaTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t("ctaBody")}</p>
            <EnrollButton className="mt-6 inline-flex rounded-full border border-border bg-background/70 px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/40 hover:bg-brand/[0.04]">
              {t("ctaButton")}
            </EnrollButton>
          </div>
        </div>
      </Container>
    </div>
  );
}
