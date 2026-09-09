"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";
import { htmlLangMap, type Locale } from "@/i18n/routing";

export function DocumentLang() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    document.documentElement.lang = htmlLangMap[locale] ?? locale;
  }, [locale]);

  return null;
}
