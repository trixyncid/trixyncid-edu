import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

export const htmlLangMap: Record<Locale, string> = {
  id: "id",
  en: "en",
};

export const ogLocaleMap: Record<Locale, string> = {
  id: "id_ID",
  en: "en_US",
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
