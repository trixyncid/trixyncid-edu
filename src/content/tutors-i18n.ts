import type { Locale } from "@/content/programs-i18n";
import type { Tutor } from "@/content/tutors";
import { tutors } from "@/content/tutors";

export type LocalizedTutor = {
  id: string;
  name: string;
  role: string;
  location: string;
  headline: string;
  bio: string[];
  focus: string[];
  teaches: string[];
  languages: string[];
  email?: string;
  website?: string;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
};

type LocalizedFields = {
  role: string;
  location: string;
  headline: string;
  bio: string[];
  focus: string[];
};

const localizedByLocale: Record<Locale, Record<string, LocalizedFields>> = {
  id: {
    "winsten-coellins": {
      role: "Fullstack Software Engineer · Lead Instructor",
      location: "Remote · Medan, Indonesia",
      headline:
        "Saya mengembangkan software yang andal dari konsep hingga peluncuran—dengan fokus pada arsitektur yang jelas, pengalaman pengguna yang matang, dan hasil yang bisa diukur serta dipercaya tim.",
      bio: [
        "Winsten memimpin Trixync Education dan mendirikan Trixync, studio teknologi & sistem di Medan. Ia mengajar standar yang sama dipakai untuk ship software production: arsitektur jelas, problem-solving live, dan proyek yang bisa ditunjukkan siswa.",
        "Ia adalah fullstack software engineer di Wilmar Consultancy Services, memimpin tim pada sistem Next.js dan NestJS modern, dengan pengalaman sebelumnya di Umify, Collaboration For Good, dan University of Wisconsin–Madison. Ia meraih B.S. in Data Science dan sertifikat Computer Science dari UW–Madison.",
        "Karyanya mencakup sistem production untuk logistik, penjadwalan, properti, dan pendidikan. Stack mencakup Next.js, React, TypeScript, NestJS, Elysia, Python, FastAPI, PostgreSQL, dan deployment cloud. Kelas bilingual: Bahasa Indonesia di ruang kelas, Bahasa Inggris untuk kode dan tools.",
      ],
      focus: [
        "Fondasi Python hingga backend FastAPI",
        "JavaScript / TypeScript, React, dan Next.js",
        "REST API, auth, database, dan deployment",
        "Portofolio, workflow Git, dan coaching Demo Day",
      ],
    },
    "randy-brilliant-chandra": {
      role: "Fullstack Software Engineer · Lead Instructor",
      location: "Medan, Sumatera Utara",
      headline:
        "Full-stack engineer dan dosen Database Systems — pengalaman web production dipadukan dengan ketelitian ruang kelas.",
      bio: [
        "Randy adalah full-stack software engineer dengan lebih dari lima tahun membangun aplikasi web production-grade. Ia mengajar Database Systems di Program Studi Digital Business, Institut Bisnis IT&B Medan, dan juga bertugas sebagai IT Staff & Dosen sejak 2018.",
        "Ia meraih M.Kom. dari Universitas Mikroskil (Summa Cum Laude) dan S.S.I. dari Institut Bisnis IT&B (Cum Laude). Sebagai freelance full-stack developer sejak 2020, ia telah mengirim 10+ proyek production dengan Python, Django, Next.js, PostgreSQL, Docker, dan Flutter.",
      ],
      focus: [
        "Backend Python & Django",
        "Aplikasi web full-stack Next.js",
        "PostgreSQL dan sistem basis data",
        "Docker, deployment, dan workflow production",
      ],
    },
  },
  en: {
    "winsten-coellins": {
      role: "Fullstack Software Engineer · Lead Instructor",
      location: "Remote · Medan, Indonesia",
      headline:
        "I develop reliable software from concept through launch—focused on clear architecture, thoughtful user experiences, and outcomes teams can measure and trust.",
      bio: [
        "Winsten leads Trixync Education and founded Trixync, a technology & systems studio in Medan. He teaches the same standards used to ship production software: clear architecture, live problem-solving, and projects students can show.",
        "He is a fullstack software engineer at Wilmar Consultancy Services, leading teams on modern Next.js and NestJS systems, with earlier roles at Umify, Collaboration For Good, and the University of Wisconsin–Madison. He holds a B.S. in Data Science and a Computer Science certificate from UW–Madison.",
        "His work spans production systems for logistics, scheduling, property, and education. Stack includes Next.js, React, TypeScript, NestJS, Elysia, Python, FastAPI, PostgreSQL, and cloud deployment. Classes are bilingual: Bahasa Indonesia in the room, English for code and tooling.",
      ],
      focus: [
        "Python foundations through FastAPI backends",
        "JavaScript / TypeScript, React, and Next.js",
        "REST APIs, auth, databases, and deployment",
        "Portfolio, Git workflows, and Demo Day coaching",
      ],
    },
    "randy-brilliant-chandra": {
      role: "Fullstack Software Engineer · Lead Instructor",
      location: "Medan, North Sumatra",
      headline:
        "Full-stack engineer and Database Systems lecturer — production web experience paired with classroom rigor.",
      bio: [
        "Randy is a full-stack software engineer with more than five years building production-grade web applications. He teaches Database Systems in the Digital Business program at Institut Bisnis IT&B Medan, where he has also served as IT Staff & Dosen since 2018.",
        "He holds an M.Kom. from Universitas Mikroskil (Summa Cum Laude) and an S.S.I. from Institut Bisnis IT&B (Cum Laude). As a freelance full-stack developer since 2020, he has shipped 10+ production projects across Python, Django, Next.js, PostgreSQL, Docker, and Flutter.",
      ],
      focus: [
        "Python & Django backends",
        "Next.js full-stack web apps",
        "PostgreSQL and database systems",
        "Docker, deployment, and production workflows",
      ],
    },
  },
};

function buildTutor(locale: Locale, tutor: Tutor): LocalizedTutor {
  const localized = localizedByLocale[locale][tutor.id];
  return {
    id: tutor.id,
    name: tutor.name,
    role: tutor.role,
    location: tutor.location,
    headline: tutor.headline,
    bio: tutor.bio,
    focus: tutor.focus,
    teaches: tutor.teaches,
    languages: tutor.languages,
    email: tutor.email,
    website: tutor.website,
    social: tutor.social,
    ...localized,
  };
}

export function getLocalizedTutors(locale: Locale): LocalizedTutor[] {
  return tutors.map((tutor) => buildTutor(locale, tutor));
}

export function getLocalizedTutor(locale: Locale, id: string): LocalizedTutor | undefined {
  const tutor = tutors.find((t) => t.id === id);
  if (!tutor) return undefined;
  return buildTutor(locale, tutor);
}
