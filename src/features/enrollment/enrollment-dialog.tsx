"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedPrograms, type Locale } from "@/content/programs-i18n";
import { siteConfig } from "@/content/site";
import { formatIdr, splitClassPrice } from "@/lib/pricing";
import { buildEnrollmentMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { useEnrollment } from "./enrollment-context";

type PartySize = 1 | 2 | 3;

const fieldClass =
  "w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand/40 focus:ring-2 focus:ring-brand/15";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground/90";

export function EnrollmentDialog() {
  const { open, programId, closeEnrollment } = useEnrollment();
  const t = useTranslations("enrollForm");
  const locale = useLocale() as Locale;
  const programs = useMemo(
    () => getLocalizedPrograms(locale).filter((program) => !program.partnerPricing),
    [locale],
  );
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  const [contactName, setContactName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentAgeGrade, setStudentAgeGrade] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProgramId, setSelectedProgramId] = useState("");
  const [partySize, setPartySize] = useState<PartySize>(1);
  const [preferredSchedule, setPreferredSchedule] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setContactName("");
    setStudentName("");
    setStudentAgeGrade("");
    setPhone("");
    setSelectedProgramId(programId ?? programs[0]?.id ?? "");
    setPartySize(1);
    setPreferredSchedule("");
    setNotes("");
    setError("");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      firstFieldRef.current?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnrollment();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, programId, programs, closeEnrollment]);

  const selectedProgram = programs.find((p) => p.id === selectedProgramId);
  const estimatedShare = selectedProgram
    ? formatIdr(splitClassPrice(selectedProgram.sessions, partySize))
    : "—";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!contactName.trim() || !studentName.trim() || !phone.trim() || !selectedProgram) {
      setError(t("errorRequired"));
      return;
    }

    const message = buildEnrollmentMessage({
      locale,
      contactName: contactName.trim(),
      studentName: studentName.trim(),
      studentAgeGrade: studentAgeGrade.trim(),
      phone: phone.trim(),
      programName: selectedProgram.name,
      partySize,
      estimatedShare,
      preferredSchedule: preferredSchedule.trim(),
      notes: notes.trim(),
    });

    const url = buildWhatsAppUrl(siteConfig.whatsapp, message);
    window.open(url, "_blank", "noopener,noreferrer");
    closeEnrollment();
  }

  if (!mounted || !open) return null;

  return createPortal(
    <div className="enrollment-dialog-backdrop fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label={t("close")}
        onClick={closeEnrollment}
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
              onClick={closeEnrollment}
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
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="enroll-contact" className={labelClass}>
                  {t("contactName")}
                </label>
                <input
                  ref={firstFieldRef}
                  id="enroll-contact"
                  name="contactName"
                  autoComplete="name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className={fieldClass}
                  placeholder={t("contactNamePlaceholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="enroll-student" className={labelClass}>
                  {t("studentName")}
                </label>
                <input
                  id="enroll-student"
                  name="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className={fieldClass}
                  placeholder={t("studentNamePlaceholder")}
                  required
                />
              </div>

              <div>
                <label htmlFor="enroll-age" className={labelClass}>
                  {t("studentAgeGrade")}
                </label>
                <input
                  id="enroll-age"
                  name="studentAgeGrade"
                  value={studentAgeGrade}
                  onChange={(e) => setStudentAgeGrade(e.target.value)}
                  className={fieldClass}
                  placeholder={t("studentAgeGradePlaceholder")}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enroll-phone" className={labelClass}>
                  {t("phone")}
                </label>
                <input
                  id="enroll-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={fieldClass}
                  placeholder={t("phonePlaceholder")}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enroll-program" className={labelClass}>
                  {t("program")}
                </label>
                <select
                  id="enroll-program"
                  name="program"
                  value={selectedProgramId}
                  onChange={(e) => setSelectedProgramId(e.target.value)}
                  className={cn(fieldClass, "appearance-none pr-10")}
                  required
                >
                  {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name} · {program.tier}
                    </option>
                  ))}
                </select>
                {selectedProgram && (
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {selectedProgram.sessions} {t("sessions")} · {selectedProgram.price}{" "}
                    {t("classFeeHint")}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <p className={labelClass}>{t("partySize")}</p>
                <p className="-mt-1 mb-2 text-xs text-muted-foreground">{t("partySizeHint")}</p>
                <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={t("partySize")}>
                  {([1, 2, 3] as const).map((size) => {
                    const active = partySize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setPartySize(size)}
                        className={cn(
                          "rounded-xl border px-3 py-3 text-center transition-colors",
                          active
                            ? "border-brand/50 bg-brand/[0.08] text-foreground"
                            : "border-border/60 bg-background/60 text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                        )}
                      >
                        <span className="block font-heading text-sm font-semibold">{size}</span>
                        <span className="mt-0.5 block text-[0.7rem] leading-tight">
                          {size === 1 ? t("partySolo") : t("partySplit", { count: size })}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-sm text-foreground/85">
                  {t("estimatedShare")}:{" "}
                  <span className="font-heading font-semibold text-brand dark:text-brand-light">
                    {estimatedShare}
                  </span>
                </p>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enroll-schedule" className={labelClass}>
                  {t("preferredSchedule")}
                </label>
                <input
                  id="enroll-schedule"
                  name="preferredSchedule"
                  value={preferredSchedule}
                  onChange={(e) => setPreferredSchedule(e.target.value)}
                  className={fieldClass}
                  placeholder={t("preferredSchedulePlaceholder")}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enroll-notes" className={labelClass}>
                  {t("notes")}
                </label>
                <textarea
                  id="enroll-notes"
                  name="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={cn(fieldClass, "resize-none")}
                  placeholder={t("notesPlaceholder")}
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
          </div>

          <div className="shrink-0 border-t border-border/60 bg-card/40 px-5 py-4 sm:px-6 dark:bg-card/10">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t("submit")}
            </button>
            <p className="mt-2.5 text-center text-xs text-muted-foreground">{t("submitHint")}</p>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
