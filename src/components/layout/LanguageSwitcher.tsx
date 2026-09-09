"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const locales = [
  { code: "id" as const, short: "ID" },
  { code: "en" as const, short: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-background/80 p-0.5",
        className,
      )}
    >
      {locales.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            aria-pressed={active}
            onClick={() => router.replace(pathname, { locale: item.code })}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
              active
                ? "bg-brand text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.short}
          </button>
        );
      })}
    </div>
  );
}
