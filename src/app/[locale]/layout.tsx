import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { DocumentLang } from "@/components/layout/DocumentLang";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { EnrollmentRoot } from "@/features/enrollment";
import { TutorApplyRoot } from "@/features/tutor-apply";
import { CollaborationRoot } from "@/features/collaboration";
import { siteConfig } from "@/content/site";
import { routing, type Locale } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    icons: {
      icon: [
        { url: "/brand/logo-icon.svg", media: "(prefers-color-scheme: light)" },
        { url: "/brand/logo-icon-white.svg", media: "(prefers-color-scheme: dark)" },
      ],
      apple: "/brand/logo-icon.svg",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: siteConfig.url,
      siteName: siteConfig.productName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("nav");

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <EnrollmentRoot>
          <TutorApplyRoot>
            <CollaborationRoot>
              <DocumentLang />
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
              >
                {t("skipToContent")}
              </a>
              <div className="pointer-events-none fixed inset-0 -z-10 bg-ambient-wash" aria-hidden />
              <SiteHeader />
              <main id="main" className="flex-1 pt-20">
                {children}
              </main>
              <SiteFooter />
              <FloatingWhatsApp />
            </CollaborationRoot>
          </TutorApplyRoot>
        </EnrollmentRoot>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
