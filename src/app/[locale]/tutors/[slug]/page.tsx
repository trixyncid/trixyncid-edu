import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { TutorDetail } from "@/features/tutors/tutor-detail";
import { getLocalizedTutor, getLocalizedTutors } from "@/content/tutors-i18n";
import type { Locale } from "@/content/programs-i18n";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const ids = getLocalizedTutors("id").map((t) => t.id);
  return routing.locales.flatMap((locale) => ids.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tutor = getLocalizedTutor(locale as Locale, slug);
  if (!tutor) return { title: "Not found" };
  return { title: tutor.name, description: tutor.headline };
}

export default async function TutorPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tutor = getLocalizedTutor(locale as Locale, slug);
  if (!tutor) notFound();

  return <TutorDetail tutor={tutor} />;
}
