import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/shared/Container";
import { EnrollButton } from "@/features/enrollment";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as "id" | "en";
  const year = new Date().getFullYear();
  const hours = siteConfig.hours;

  const navLinks = [
    { label: tNav("programs"), href: "/programs" as const },
    { label: tNav("tutors"), href: "/tutors" as const },
    { label: tNav("approach"), href: "/#approach" as const },
    { label: tNav("pricing"), href: "/#pricing" as const },
    { label: tNav("collaboration"), href: "/#collaboration" as const },
    { label: tNav("faq"), href: "/#faq" as const },
  ];

  return (
    <footer className="relative border-t border-border/60">
      <div className="section-glow absolute inset-0" aria-hidden />
      <Container size="wide" className="relative py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-[2rem]">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <EnrollButton className="inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light">
              {t("whatsapp")}
            </EnrollButton>
            <a
              href={`mailto:${siteConfig.email}?subject=Trixync%20Education`}
              className="inline-flex rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-foreground/30 hover:bg-foreground/[0.03]"
            >
              {t("email")} {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="section-divider mx-auto mt-14 max-w-4xl" />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-heading text-lg font-semibold text-foreground">
              {siteConfig.productName}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t("blurb")}</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              {siteConfig.lockup}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {t("navigate")}
              </p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {t("contact")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.location}</li>
                <li>{hours.weekdays[locale]}</li>
                <li>{hours.saturday[locale]}</li>
                <li>{hours.sunday[locale]}</li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    {siteConfig.social.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {t("studio")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/80">
                <li>
                  <a
                    href={siteConfig.studioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    trixync.id
                  </a>
                </li>
                <li>{siteConfig.tagline}</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {year} {siteConfig.name}. {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
