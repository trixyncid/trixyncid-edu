import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ProgramDetail } from "@/features/programs/program-detail";
import { getLocalizedProgram, getLocalizedPrograms, type Locale } from "@/content/programs-i18n";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getLocalizedPrograms(locale as Locale).map((program) => ({
      locale,
      slug: program.id,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const program = getLocalizedProgram(locale as Locale, slug);
  if (!program) return { title: "Not found" };
  return {
    title: program.name,
    description: program.summary,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const program = getLocalizedProgram(locale as Locale, slug);
  if (!program) notFound();

  return <ProgramDetail program={program} />;
}
