import { setRequestLocale } from "next-intl/server";
import {
  ApproachSection,
  CollaborationSection,
  EnrollmentSection,
  FaqSection,
  HeroSection,
  PricingSection,
  ProgramsSection,
} from "@/features/home";

type Props = { params: Promise<{ locale: string }> };

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <ApproachSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <ProgramsSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <PricingSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <CollaborationSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <EnrollmentSection />
      <div className="section-divider mx-auto max-w-4xl" />
      <FaqSection />
    </>
  );
}
