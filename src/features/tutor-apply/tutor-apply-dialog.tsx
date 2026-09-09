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
import { buildTutorApplyMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { useTutorApply } from "./tutor-apply-context";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ACCEPTED_RESUME =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

const fieldClass =
  "w-full rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand/40 focus:ring-2 focus:ring-brand/15";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground/90";

type Step = "form" | "attach";

export function TutorApplyDialog() {
  const { open, closeTutorApply } = useTutorApply();
  const t = useTranslations("tutorApplyForm");
  const locale = useLocale() as Locale;
  const programs = useMemo(() => getLocalizedPrograms(locale), [locale]);
  const titleId = useId();
  const descId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [submitting, setSubmitting] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [industryBackground, setIndustryBackground] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [teachingApproach, setTeachingApproach] = useState("");
  const [availability, setAvailability] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    setStep("form");
    setSubmitting(false);
    setFullName("");
    setPhone("");
    setEmail("");
    setCity("");
    setLinkedIn("");
    setGithub("");
    setPortfolio("");
    setYearsExperience("");
    setCurrentRole("");
    setIndustryBackground("");
    setSelectedPrograms([]);
    setTeachingApproach("");
    setAvailability("");
    setResume(null);
    setError("");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => {
      firstFieldRef.current?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeTutorApply();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeTutorApply]);

  function toggleProgram(id: string) {
    setSelectedPrograms((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function onResumeChange(fileList: FileList | null) {
    setError("");
    const file = fileList?.[0] ?? null;
    if (!file) {
      setResume(null);
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      setResume(null);
      setError(t("errorResumeSize"));
      return;
    }
    setResume(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !yearsExperience.trim() ||
      !currentRole.trim() ||
      !industryBackground.trim() ||
      !teachingApproach.trim() ||
      selectedPrograms.length === 0 ||
      !resume
    ) {
      setError(t("errorRequired"));
      return;
    }

    const programNames = programs
      .filter((program) => selectedPrograms.includes(program.id))
      .map((program) => program.name);

    const message = buildTutorApplyMessage({
      locale,
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city.trim(),
      linkedIn: linkedIn.trim(),
      github: github.trim(),
      portfolio: portfolio.trim(),
      yearsExperience: yearsExperience.trim(),
      currentRole: currentRole.trim(),
      industryBackground: industryBackground.trim(),
      programs: programNames,
      teachingApproach: teachingApproach.trim(),
      availability: availability.trim(),
      resumeFileName: resume.name,
    });

    setSubmitting(true);

    const shareData: ShareData = {
      title: t("shareTitle"),
      text: message,
      files: [resume],
    };

    try {
      if (
        typeof navigator !== "undefined" &&
        typeof navigator.canShare === "function" &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData);
        closeTutorApply();
        return;
      }
    } catch {
      /* user cancelled or share failed — fall through to WhatsApp */
    }

    window.open(buildWhatsAppUrl(siteConfig.whatsapp, message), "_blank", "noopener,noreferrer");
    setStep("attach");
    setSubmitting(false);
  }

  function downloadResume() {
    if (!resume) return;
    const url = URL.createObjectURL(resume);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = resume.name;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  if (!mounted || !open) return null;

  return createPortal(
    <div className="enrollment-dialog-backdrop fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        aria-label={t("close")}
        onClick={closeTutorApply}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={cn(
          "enrollment-dialog-panel relative z-10 flex max-h-[min(94vh,48rem)] w-full max-w-xl flex-col overflow-hidden",
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
                {step === "attach" ? t("attachTitle") : t("title")}
              </h2>
              <p id={descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step === "attach" ? t("attachSubtitle", { file: resume?.name ?? "" }) : t("subtitle")}
              </p>
            </div>
            <button
              type="button"
              onClick={closeTutorApply}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
              aria-label={t("close")}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        {step === "attach" ? (
          <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
            <ol className="space-y-3 text-sm leading-relaxed text-foreground/90">
              <li className="rounded-2xl border border-border/60 bg-card/50 px-4 py-3 dark:bg-card/20">
                <span className="font-heading font-semibold text-foreground">1.</span>{" "}
                {t("attachStep1")}
              </li>
              <li className="rounded-2xl border border-brand/30 bg-brand/[0.06] px-4 py-3">
                <span className="font-heading font-semibold text-foreground">2.</span>{" "}
                {t("attachStep2", { file: resume?.name ?? "" })}
              </li>
            </ol>
            <div className="mt-auto space-y-3 pt-6">
              <button
                type="button"
                onClick={downloadResume}
                className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/25 hover:bg-foreground/[0.03]"
              >
                {t("downloadResume")}
              </button>
              <button
                type="button"
                onClick={closeTutorApply}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light"
              >
                {t("attachDone")}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              <div className="rounded-2xl border border-border/60 bg-card/40 px-4 py-3 text-sm leading-relaxed text-muted-foreground dark:bg-card/15">
                <p>{t("roleNote")}</p>
                <p className="mt-2">{t("industryNote")}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="tutor-name" className={labelClass}>
                    {t("fullName")}
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="tutor-name"
                    name="fullName"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={fieldClass}
                    placeholder={t("fullNamePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="tutor-phone" className={labelClass}>
                    {t("phone")}
                  </label>
                  <input
                    id="tutor-phone"
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

                <div>
                  <label htmlFor="tutor-email" className={labelClass}>
                    {t("email")}
                  </label>
                  <input
                    id="tutor-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                    placeholder={t("emailPlaceholder")}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tutor-city" className={labelClass}>
                    {t("city")}
                  </label>
                  <input
                    id="tutor-city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={fieldClass}
                    placeholder={t("cityPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="tutor-linkedin" className={labelClass}>
                    {t("linkedIn")}
                  </label>
                  <input
                    id="tutor-linkedin"
                    name="linkedIn"
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    className={fieldClass}
                    placeholder={t("linkedInPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="tutor-github" className={labelClass}>
                    {t("github")}
                  </label>
                  <input
                    id="tutor-github"
                    name="github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    className={fieldClass}
                    placeholder={t("githubPlaceholder")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tutor-portfolio" className={labelClass}>
                    {t("portfolio")}
                  </label>
                  <input
                    id="tutor-portfolio"
                    name="portfolio"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className={fieldClass}
                    placeholder={t("portfolioPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="tutor-years" className={labelClass}>
                    {t("yearsExperience")}
                  </label>
                  <input
                    id="tutor-years"
                    name="yearsExperience"
                    value={yearsExperience}
                    onChange={(e) => setYearsExperience(e.target.value)}
                    className={fieldClass}
                    placeholder={t("yearsExperiencePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="tutor-role" className={labelClass}>
                    {t("currentRole")}
                  </label>
                  <input
                    id="tutor-role"
                    name="currentRole"
                    value={currentRole}
                    onChange={(e) => setCurrentRole(e.target.value)}
                    className={fieldClass}
                    placeholder={t("currentRolePlaceholder")}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tutor-industry" className={labelClass}>
                    {t("industryBackground")}
                  </label>
                  <textarea
                    id="tutor-industry"
                    name="industryBackground"
                    rows={3}
                    value={industryBackground}
                    onChange={(e) => setIndustryBackground(e.target.value)}
                    className={cn(fieldClass, "resize-none")}
                    placeholder={t("industryBackgroundPlaceholder")}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <p className={labelClass}>{t("programs")}</p>
                  <p className="-mt-1 mb-2 text-xs text-muted-foreground">{t("programsHint")}</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {programs.map((program) => {
                      const checked = selectedPrograms.includes(program.id);
                      return (
                        <label
                          key={program.id}
                          className={cn(
                            "flex cursor-pointer items-start gap-2.5 rounded-xl border px-3 py-2.5 text-sm transition-colors",
                            checked
                              ? "border-brand/40 bg-brand/[0.07] text-foreground"
                              : "border-border/60 bg-background/60 text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                          )}
                        >
                          <input
                            type="checkbox"
                            className="mt-0.5"
                            checked={checked}
                            onChange={() => toggleProgram(program.id)}
                          />
                          <span>
                            <span className="block font-medium text-foreground">{program.shortName}</span>
                            <span className="block text-xs text-muted-foreground">{program.tier}</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tutor-approach" className={labelClass}>
                    {t("teachingApproach")}
                  </label>
                  <textarea
                    id="tutor-approach"
                    name="teachingApproach"
                    rows={3}
                    value={teachingApproach}
                    onChange={(e) => setTeachingApproach(e.target.value)}
                    className={cn(fieldClass, "resize-none")}
                    placeholder={t("teachingApproachPlaceholder")}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tutor-availability" className={labelClass}>
                    {t("availability")}
                  </label>
                  <input
                    id="tutor-availability"
                    name="availability"
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className={fieldClass}
                    placeholder={t("availabilityPlaceholder")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="tutor-resume" className={labelClass}>
                    {t("resume")}
                  </label>
                  <p className="-mt-1 mb-2 text-xs text-muted-foreground">{t("resumeHint")}</p>
                  <input
                    id="tutor-resume"
                    name="resume"
                    type="file"
                    accept={ACCEPTED_RESUME}
                    onChange={(e) => onResumeChange(e.target.files)}
                    className="block w-full text-sm text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-brand/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand hover:file:bg-brand/15 dark:file:text-brand-light"
                    required
                  />
                  {resume && (
                    <p className="mt-2 text-xs text-foreground/80">
                      {t("resumeSelected", { file: resume.name })}
                    </p>
                  )}
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
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-light disabled:opacity-70"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {submitting ? t("submitting") : t("submit")}
              </button>
              <p className="mt-2.5 text-center text-xs text-muted-foreground">{t("submitHint")}</p>
            </div>
          </form>
        )}
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
