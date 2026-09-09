"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { siteConfig } from "@/content/site";
import { buildCollaborationMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { useCollaboration } from "./collaboration-context";

const COLLABORATION_TYPES = [
  "school",
  "corporate",
  "curriculum",
  "community",
  "other",
] as const;

type CollaborationType = (typeof COLLABORATION_TYPES)[number];

const fieldClass =
  "w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand/40 focus:ring-2 focus:ring-brand/15";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground/90";

export function CollaborationDialog() {
  const { open, closeCollaboration } = useCollaboration();
  const t = useTranslations("collaborationForm");
  const locale = useLocale() as "id" | "en";
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  const [organization, setOrganization] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [collaborationType, setCollaborationType] = useState<CollaborationType>("school");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setOrganization("");
    setContactName("");
    setPhone("");
    setEmail("");
    setCity("");
    setCollaborationType("school");
    setNotes("");
    setError("");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      firstFieldRef.current?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCollaboration();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeCollaboration]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!organization.trim() || !contactName.trim() || !phone.trim()) {
      setError(t("errorRequired"));
      return;
    }

    const typeLabel = t(`types.${collaborationType}`);

    const message = buildCollaborationMessage({
      locale,
      organization: organization.trim(),
      contactName: contactName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city.trim(),
      collaborationType: typeLabel,
      notes: notes.trim(),
    });

    const url = buildWhatsAppUrl(siteConfig.whatsapp, message);
    window.open(url, "_blank", "noopener,noreferrer");
    closeCollaboration();
  }

  if (!mounted || !open) return null;

  return createPortal(
    <div className="enrollment-dialog-backdrop fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label={t("close")}
        onClick={closeCollaboration}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={cn(
          "enrollment-dialog-panel relative z-10 flex max-h-[min(92vh,44rem)] w-full max-w-lg flex-col overflow-hidden",
          "rounded-t-3xl border border-border/70 bg-background shadow-xl sm:rounded-3xl",
        )}
      >
        <div className="shrink-0 border-b border-border/60 px-5 pb-4 pt-5 sm:px-6 sm:pt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {t("eyebrow")}
              </p>
              <h2
                id={titleId}
                className="mt-1.5 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                {t("title")}
              </h2>
              <p id={descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("subtitle")}
              </p>
            </div>
            <button
              type="button"
              onClick={closeCollaboration}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
              aria-label={t("close")}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
            <div>
              <label htmlFor="collab-org" className={labelClass}>
                {t("organization")}
              </label>
              <input
                ref={firstFieldRef}
                id="collab-org"
                name="organization"
                autoComplete="organization"
                value={organization}
                onChange={(event) => setOrganization(event.target.value)}
                placeholder={t("organizationPlaceholder")}
                className={fieldClass}
                required
              />
            </div>

            <div>
              <label htmlFor="collab-contact" className={labelClass}>
                {t("contactName")}
              </label>
              <input
                id="collab-contact"
                name="contactName"
                autoComplete="name"
                value={contactName}
                onChange={(event) => setContactName(event.target.value)}
                placeholder={t("contactNamePlaceholder")}
                className={fieldClass}
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="collab-phone" className={labelClass}>
                  {t("phone")}
                </label>
                <input
                  id="collab-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={t("phonePlaceholder")}
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="collab-email" className={labelClass}>
                  {t("email")}
                </label>
                <input
                  id="collab-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t("emailPlaceholder")}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="collab-city" className={labelClass}>
                  {t("city")}
                </label>
                <input
                  id="collab-city"
                  name="city"
                  autoComplete="address-level2"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  placeholder={t("cityPlaceholder")}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="collab-type" className={labelClass}>
                  {t("type")}
                </label>
                <select
                  id="collab-type"
                  name="collaborationType"
                  value={collaborationType}
                  onChange={(event) =>
                    setCollaborationType(event.target.value as CollaborationType)
                  }
                  className={fieldClass}
                >
                  {COLLABORATION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {t(`types.${type}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="collab-notes" className={labelClass}>
                {t("notes")}
              </label>
              <textarea
                id="collab-notes"
                name="notes"
                rows={4}
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                placeholder={t("notesPlaceholder")}
                className={cn(fieldClass, "resize-y")}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
          </div>

          <div className="shrink-0 border-t border-border/60 px-5 py-4 sm:px-6">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light"
            >
              {t("submit")}
            </button>
            <p className="mt-2 text-center text-xs text-muted-foreground">{t("submitHint")}</p>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}
