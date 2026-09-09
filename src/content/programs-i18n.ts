import { getCurriculum } from "@/content/curricula";
import type { CurriculumBlock } from "@/content/curricula/types";
import { siteConfig } from "@/content/site";
import { formatIdr, pricingBreakdown, splitClassPrice, classPriceFromSessions } from "@/lib/pricing";

export type Locale = "id" | "en";

export type LocalizedProgram = {
  id: string;
  tier: string;
  name: string;
  shortName: string;
  audience: string;
  ages: string;
  classSize: string;
  /** Public class fee label. Empty when pricing is handled by a partner. */
  price: string;
  priceNote?: string;
  /** When set, public pricing is hidden; enrollment/pricing goes to the partner. */
  partnerPricing?: {
    partnerName: string;
    url: string;
  };
  vibe: string;
  summary: string;
  tools: string;
  prerequisites: string;
  outcomes: string[];
  phases: { title: string; focus: string; sessions: string }[];
  sessionStructure?: { time: string; activity: string }[];
  stack: string[];
  sessions: number;
  hours: number;
  accent: "emerald" | "sky" | "violet" | "amber" | "rose" | "cyan";
  curriculum: CurriculumBlock[];
};

export type LocalizedPricingRow = {
  program: string;
  tier: string;
  sessions: string;
  /** Full class fee (may be split among up to 3 students). */
  price: string;
  pricePer2: string;
  pricePer3: string;
  href: string;
  sessionCount: number;
};

const shared = {
  "junior-explorer": {
    id: "junior-explorer",
    stack: ["Python"],
    sessions: 16,
    hours: 32,
    accent: "emerald" as const,
    price: "Rp 4.800.000",
  },
  explorer: {
    id: "explorer",
    stack: ["Python", "Git"],
    sessions: 20,
    hours: 40,
    accent: "sky" as const,
    price: "Rp 6.000.000",
  },
  "builder-python-core": {
    id: "builder-python-core",
    stack: ["Python", "Git", "APIs"],
    sessions: 8,
    hours: 16,
    accent: "violet" as const,
    price: "Rp 2.400.000",
  },
  "builder-fastapi": {
    id: "builder-fastapi",
    stack: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    sessions: 20,
    hours: 40,
    accent: "violet" as const,
    price: "Rp 6.000.000",
  },
  "builder-fullstack": {
    id: "builder-fullstack",
    stack: ["JavaScript", "TypeScript", "React", "Next.js", "Express", "NestJS"],
    sessions: 20,
    hours: 40,
    accent: "rose" as const,
    price: "Rp 6.000.000",
  },
  "pro-track": {
    id: "pro-track",
    stack: ["Portfolio", "Career", "Interviews"],
    sessions: 16,
    hours: 32,
    accent: "amber" as const,
    price: "Rp 4.800.000",
  },
  "study-abroad-prep": {
    id: "study-abroad-prep",
    stack: ["Python", "Web", "Data", "SQL"],
    sessions: 32,
    hours: 64,
    accent: "cyan" as const,
    partnerPricing: {
      partnerName: siteConfig.partners.yanksAndBrits.name,
      url: siteConfig.partners.yanksAndBrits.url,
    },
  },
};

const localizedByLocale: Record<
  Locale,
  Record<string, Omit<LocalizedProgram, keyof typeof shared["junior-explorer"] | "curriculum">>
> = {
  id: {
    "junior-explorer": {
      tier: "Tingkat 1 · SD",
      name: "Junior Explorer: Python",
      shortName: "Junior Explorer",
      audience: "SD kelas 4–6",
      ages: "Usia 9–12",
      classSize: "Maks. 3 siswa",
      vibe: "Seru dulu, berbasis proyek, cukup terstruktur agar orang tua tenang.",
      summary:
        "Pengenalan programming yang lembut dan hands-on. Anak menulis Python nyata di browser, membuat game dan gambar, lalu presentasi di Demo Day.",
      tools: "Python 3 via Replit — di browser, tanpa instalasi.",
      prerequisites: "Tidak ada. Terbuka untuk semua siswa kelas 4–6.",
      outcomes: [
        "Menulis dan menjalankan program Python secara mandiri",
        "Menggunakan variabel, kondisi, loop, dan fungsi",
        "Membaca dan memperbaiki pesan error dasar",
        "Membangun dan mempresentasikan mini proyek di Demo Day",
      ],
      phases: [
        { sessions: "1–3", title: "Hello, Computer!", focus: "print(), variabel, input(), if/else" },
        { sessions: "4–6", title: "Loop & Logika", focus: "for, while, break, FizzBuzz" },
        { sessions: "7–9", title: "Mengatur Data", focus: "list, fungsi, return value" },
        {
          sessions: "10–13",
          title: "Proyek Seru",
          focus: "Mad Libs, Quiz Game, Rock Paper Scissors, Turtle",
        },
        { sessions: "14–16", title: "Showcase", focus: "debugging, proyek akhir, Demo Day" },
      ],
      sessionStructure: [
        { time: "0:00–0:15", activity: "Warm-up / ringkasan" },
        { time: "0:15–0:40", activity: "Konsep baru (maks. 15 menit penjelasan)" },
        { time: "0:40–1:30", activity: "Coding hands-on terpandu" },
        { time: "1:30–1:50", activity: "Mini proyek mandiri" },
        { time: "1:50–2:00", activity: "Sharing + preview sesi berikutnya" },
      ],
    },
    explorer: {
      tier: "Tingkat 2 · SMP",
      name: "Explorer: Python",
      shortName: "Explorer",
      audience: "SMP kelas 7–9",
      ages: "Usia 12–15",
      classSize: "Maks. 3 siswa",
      vibe: "Terstruktur dengan hasil proyek nyata; dipandu praktisi.",
      summary:
        "Python lebih dalam untuk SMP — alur kontrol, struktur data, OOP, file, dan capstone pilihan siswa dengan Demo Day.",
      tools: "Python 3, VS Code atau Thonny, Git dasar diperkenalkan di akhir.",
      prerequisites: "Tidak ada. Lulusan Tingkat 1 siap lanjut; siswa baru juga boleh.",
      outcomes: [
        "Menulis program Python terstruktur dengan OOP",
        "Bekerja dengan file dan modul eksternal",
        "Memecah masalah menjadi fungsi dan kelas",
        "Membangun, mendokumentasikan, dan mempresentasikan proyek lengkap",
      ],
      phases: [
        { sessions: "1–3", title: "Fondasi Python", focus: "Variabel, tipe, operator, I/O" },
        { sessions: "4–6", title: "Alur Kontrol", focus: "if/elif/else, for/while, logika bersarang" },
        { sessions: "7–9", title: "Struktur Data", focus: "List, tuple, dictionary, set" },
        { sessions: "10–12", title: "Fungsi & Scope", focus: "def, parameter, return, scope, lambda" },
        { sessions: "13–15", title: "Dasar OOP", focus: "Kelas, objek, atribut, __init__" },
        { sessions: "16–18", title: "File I/O & Modul", focus: "File, import, standard library" },
        { sessions: "19–20", title: "Capstone", focus: "Proyek pilihan siswa + Demo Day" },
      ],
    },
    "builder-python-core": {
      tier: "Tingkat 3 · SMA",
      name: "Builder: Python Core",
      shortName: "Python Core",
      audience: "SMA kelas 10–12",
      ages: "Usia 15–18",
      classSize: "Maks. 3 siswa",
      priceNote:
        "Berdiri sendiri, atau bundel dengan Jalur A (FastAPI) / Jalur B (JS/TS Full-stack) total Rp 6.000.000 per kelas (bisa dibagi maks. 3 siswa).",
      vibe: "Fase prasyarat sebelum spesialisasi backend atau full-stack.",
      summary:
        "Delapan sesi untuk meningkatkan Python, Git, dan dasar API — lalu pilih FastAPI backend atau JavaScript/TypeScript full-stack.",
      tools: "VS Code, venv, pip, Git, library requests.",
      prerequisites:
        "Lulusan Tingkat 2 (Explorer) melewati fase ini. Siswa berpengalaman bisa waiver dengan lulus Trixync Python Assessment.",
      outcomes: [
        "Python percaya diri dengan OOP, error handling, dan file data",
        "Mengonsumsi REST API dengan library requests",
        "Menggunakan branching Git, PR, dan README yang rapi",
        "Lulus assessment praktis untuk membuka jalur spesialisasi",
      ],
      phases: [
        { sessions: "1–2", title: "Setup & fungsi lanjutan", focus: "VS Code, venv, *args, decorators" },
        { sessions: "3–5", title: "OOP, error & data", focus: "Inheritance, exceptions, JSON/CSV" },
        { sessions: "6–8", title: "API, Git & assessment", focus: "HTTP, kolaborasi, tes praktis" },
      ],
    },
    "builder-fastapi": {
      tier: "Tingkat 3 · SMA",
      name: "Builder: Python Backend (FastAPI)",
      shortName: "FastAPI Backend",
      audience: "SMA kelas 10–12",
      ages: "Usia 15–18",
      classSize: "Maks. 3 siswa",
      priceNote: "Bundel dengan Python Core (8 + 12 sesi). Jalur saja 12 sesi setelah Core.",
      vibe: "Membangun dan deploy REST API production-ready dengan auth dan database nyata.",
      summary:
        "Setelah Python Core, spesialisasi FastAPI — Pydantic, SQLAlchemy, JWT auth, testing, dan deploy ke Railway atau Render.",
      tools: "FastAPI, uvicorn, SQLAlchemy, PostgreSQL, pytest, Railway / Render.",
      prerequisites:
        "Selesaikan Builder: Python Core, atau waiver Core via Trixync Python Assessment. Lulusan Tingkat 2 otomatis melewati Core.",
      outcomes: [
        "Membangun REST API production-ready dengan FastAPI",
        "Mengimplementasikan JWT authentication dan role-based access",
        "Terhubung ke PostgreSQL via SQLAlchemy",
        "Deploy backend ke Railway atau Render",
        "Mempresentasikan dan menjelaskan arsitektur API di Demo Day",
      ],
      phases: [
        { sessions: "1–8", title: "Python Core", focus: "Setup, OOP, API, Git, assessment" },
        { sessions: "9–20", title: "Jalur FastAPI", focus: "Endpoint, DB, auth, testing, deploy, Demo Day" },
      ],
    },
    "builder-fullstack": {
      tier: "Tingkat 3 · SMA",
      name: "Builder: JavaScript / TypeScript Full-stack",
      shortName: "JS/TS Full-stack",
      audience: "SMA kelas 10–12",
      ages: "Usia 15–18",
      classSize: "Maks. 3 siswa",
      priceNote:
        "Bundel dengan Python Core (8 + 12 sesi). Frontend (React/Next.js) lalu backend (Express atau NestJS).",
      vibe: "Ship aplikasi full-stack nyata — frontend TypeScript, backend Node, auth, dan dual deploy.",
      summary:
        "Setelah Python Core, spesialisasi web modern: JavaScript/TypeScript, React, Next.js, lalu Express atau NestJS dengan Prisma — terhubung, terautentikasi, dan di-deploy.",
      tools: "JS/TS, React, Next.js, Tailwind, Express atau NestJS, Prisma, PostgreSQL, Vercel + Railway.",
      prerequisites:
        "Selesaikan Builder: Python Core, atau waiver Core via Trixync Python Assessment. Lulusan Tingkat 2 otomatis melewati Core.",
      outcomes: [
        "Membangun aplikasi full-stack dengan React / Next.js",
        "Membangun REST API dengan Express atau NestJS",
        "Menghubungkan frontend dan backend dengan alur auth yang benar",
        "Deploy frontend (Vercel) dan backend (Railway) secara terpisah",
        "Mempresentasikan keputusan arsitektur di Demo Day",
      ],
      phases: [
        { sessions: "1–8", title: "Python Core", focus: "Setup, OOP, API, Git, assessment" },
        {
          sessions: "9–14",
          title: "Frontend — React / Next.js",
          focus: "JS/TS, React, App Router, data fetching, Tailwind",
        },
        {
          sessions: "15–20",
          title: "Backend — Express atau NestJS",
          focus: "Prisma, CRUD, JWT auth, integrasi full-stack, Demo Day",
        },
      ],
    },
    "pro-track": {
      tier: "Tingkat 4 · Persiapan Kerja",
      name: "Pro Track: Job-Ready Developer",
      shortName: "Pro Track",
      audience: "Fresh graduate & pencari kerja",
      ages: "Semua latar belakang",
      classSize: "Maks. 3 peserta",
      vibe: "Terbuka + assessment skill. Portofolio, resume, interview, exposure industri.",
      summary:
        "Untuk lulusan dan pencari kerja: rapikan GitHub dan LinkedIn, ship proyek yang bisa di-deploy, persiapan interview, dan lulus dengan sertifikat.",
      tools: "GitHub, LinkedIn, proyek portofolio ter-deploy, mock interview.",
      prerequisites:
        "Terbuka untuk semua. Semua pendaftar menyelesaikan Trixync Skills Assessment (tes coding, review portofolio jika ada, wawancara singkat).",
      outcomes: [
        "Profil GitHub rapi dengan minimal 1 proyek ter-deploy",
        "Resume tech ramah ATS + LinkedIn yang dioptimalkan",
        "Pengalaman mock technical interview",
        "Sertifikat Trixync + akses jaringan alumni",
      ],
      phases: [
        { sessions: "1–2", title: "Identitas Developer", focus: "GitHub, LinkedIn, personal branding" },
        { sessions: "3–5", title: "Sprint Portofolio", focus: "Bangun atau rapikan 1–2 proyek ter-deploy" },
        { sessions: "6–8", title: "Resume & Lamaran", focus: "Resume tech, job board, dasar ATS" },
        { sessions: "9–11", title: "Persiapan Interview", focus: "Pola DSA, mock interview, metode STAR" },
        { sessions: "12–13", title: "Soft Skills", focus: "Komunikasi tim, agile, Bahasa Inggris di kerja" },
        { sessions: "14–15", title: "Exposure Industri", focus: "Praktisi tamu, code review, workflow nyata" },
        { sessions: "16", title: "Demo Day", focus: "Presentasi portofolio, sertifikat, undangan alumni" },
      ],
    },
    "study-abroad-prep": {
      tier: "Kolaborasi · Study Abroad",
      name: "Study Abroad Prep",
      shortName: "Study Abroad Prep",
      audience: "Calon mahasiswa study abroad",
      ages: "SMA & gap year · muda dewasa",
      classSize: "",
      vibe: "Kolaborasi kurikulum dengan Yanks and Brits Study Abroad Program di Medan — bukan jalur Explorer / Python Core Trixync.",
      summary:
        "Silabus coding untuk siswa study abroad bersama Yanks and Brits: Python Fundamentals I & II (foundation year / CS intro luar negeri), Web Programming, dan Data Analytics and Engineering. Halaman ini hanya referensi kurikulum.",
      tools: "Python, HTML/CSS/JavaScript, pandas, SQL, Git, academic English write-ups.",
      prerequisites:
        "Melalui jalur Yanks and Brits Study Abroad Program. Target: siswa yang akan kuliah di luar negeri.",
      outcomes: [
        "Python Fundamentals I & II bergaya foundation-year / CS intro luar negeri",
        "Mini proyek web dengan dokumentasi akademik berbahasa Inggris",
        "Pipeline analisis data dasar (Python + SQL) siap dipresentasikan",
        "Paket portofolio study-abroad + showcase presentasi Inggris",
      ],
      phases: [
        {
          sessions: "1–8",
          title: "Python Fundamentals I",
          focus: "CS intro akademik: formal problem sets, lab reports, English briefs",
        },
        {
          sessions: "9–16",
          title: "Python Fundamentals II",
          focus: "Abstraksi, testing, data files, OOP untuk assessment luar negeri",
        },
        {
          sessions: "17–24",
          title: "Web Programming",
          focus: "HTML/CSS/JS, API dasar, mini app full-stack, demo",
        },
        {
          sessions: "25–32",
          title: "Data Analytics and Engineering",
          focus: "pandas, visualisasi, cleaning, SQL, pipeline, showcase",
        },
      ],
    },
  },
  en: {
    "junior-explorer": {
      tier: "Tier 1 · Primary (SD)",
      name: "Junior Explorer: Python",
      shortName: "Junior Explorer",
      audience: "Primary 4–6",
      ages: "Age 9–12",
      classSize: "Max 3 students",
      vibe: "Fun-first, project-driven, structured enough for parents to trust.",
      summary:
        "A gentle, hands-on introduction to programming. Kids write real Python in the browser, build games and drawings, and present on Demo Day.",
      tools: "Python 3 via Replit — browser-based, zero install.",
      prerequisites: "None. Open to all P4–P6 students.",
      outcomes: [
        "Write and run Python programs independently",
        "Use variables, conditions, loops, and functions",
        "Read and fix basic error messages",
        "Build and present a mini project on Demo Day",
      ],
      phases: [
        { sessions: "1–3", title: "Hello, Computer!", focus: "print(), variables, input(), if/else" },
        { sessions: "4–6", title: "Loops & Logic", focus: "for, while, break, FizzBuzz" },
        { sessions: "7–9", title: "Organising Things", focus: "lists, functions, return values" },
        {
          sessions: "10–13",
          title: "Fun Projects",
          focus: "Mad Libs, Quiz Game, Rock Paper Scissors, Turtle",
        },
        { sessions: "14–16", title: "Showcase", focus: "debugging, final project, Demo Day" },
      ],
      sessionStructure: [
        { time: "0:00–0:15", activity: "Warm-up / recap" },
        { time: "0:15–0:40", activity: "New concept (max 15 min of talking)" },
        { time: "0:40–1:30", activity: "Guided hands-on coding" },
        { time: "1:30–1:50", activity: "Independent mini project" },
        { time: "1:50–2:00", activity: "Share-out + preview next session" },
      ],
    },
    explorer: {
      tier: "Tier 2 · Junior High (SMP)",
      name: "Explorer: Python",
      shortName: "Explorer",
      audience: "Grade 7–9",
      ages: "Age 12–15",
      classSize: "Max 3 students",
      vibe: "Structured with real project outcomes; practitioner-led.",
      summary:
        "Deeper Python for junior high — control flow, data structures, OOP, files, and a student-chosen capstone with Demo Day.",
      tools: "Python 3, VS Code or Thonny, Git basics introduced late.",
      prerequisites: "None. Tier 1 graduates are naturally ready; new students welcome.",
      outcomes: [
        "Write structured Python programs using OOP",
        "Work with files and external modules",
        "Break problems into functions and classes",
        "Build, document, and present a complete project",
      ],
      phases: [
        { sessions: "1–3", title: "Python Foundations", focus: "Variables, types, operators, I/O" },
        { sessions: "4–6", title: "Control Flow", focus: "if/elif/else, for/while, nested logic" },
        { sessions: "7–9", title: "Data Structures", focus: "Lists, tuples, dictionaries, sets" },
        { sessions: "10–12", title: "Functions & Scope", focus: "def, parameters, return, scope, lambda" },
        { sessions: "13–15", title: "OOP Basics", focus: "Classes, objects, attributes, __init__" },
        { sessions: "16–18", title: "File I/O & Modules", focus: "Files, import, standard library" },
        { sessions: "19–20", title: "Capstone", focus: "Student-chosen project + Demo Day" },
      ],
    },
    "builder-python-core": {
      tier: "Tier 3 · Senior High (SMA)",
      name: "Builder: Python Core",
      shortName: "Python Core",
      audience: "Grade 10–12",
      ages: "Age 15–18",
      classSize: "Max 3 students",
      priceNote:
        "Standalone, or bundled with Path A (FastAPI) / Path B (JS/TS Full-stack) for Rp 6.000.000 per class (can be split among up to 3 students).",
      vibe: "The prerequisite phase before specializing into backend or full-stack.",
      summary:
        "Eight sessions to level up Python, Git, and API basics — then choose FastAPI backend or JavaScript/TypeScript full-stack.",
      tools: "VS Code, venv, pip, Git, requests library.",
      prerequisites:
        "Tier 2 (Explorer) graduates skip this phase. Students with prior coding experience may waive it by passing the Trixync Python Assessment.",
      outcomes: [
        "Confident Python with OOP, error handling, and data files",
        "Consume REST APIs with the requests library",
        "Use Git branching, PRs, and README hygiene",
        "Pass the practical assessment to unlock a specialization path",
      ],
      phases: [
        { sessions: "1–2", title: "Setup & advanced functions", focus: "VS Code, venv, *args, decorators" },
        { sessions: "3–5", title: "OOP, errors & data", focus: "Inheritance, exceptions, JSON/CSV" },
        { sessions: "6–8", title: "APIs, Git & assessment", focus: "HTTP, collaboration, practical test" },
      ],
    },
    "builder-fastapi": {
      tier: "Tier 3 · Senior High (SMA)",
      name: "Builder: Python Backend (FastAPI)",
      shortName: "FastAPI Backend",
      audience: "Grade 10–12",
      ages: "Age 15–18",
      classSize: "Max 3 students",
      priceNote: "Bundled with Python Core (8 + 12 sessions). Path alone is 12 sessions after Core.",
      vibe: "Build and deploy a production-ready REST API with auth and a real database.",
      summary:
        "After Python Core, specialize in FastAPI — Pydantic, SQLAlchemy, JWT auth, testing, and cloud deployment on Railway or Render.",
      tools: "FastAPI, uvicorn, SQLAlchemy, PostgreSQL, pytest, Railway / Render.",
      prerequisites:
        "Complete Builder: Python Core, or waive Core via the Trixync Python Assessment. Tier 2 graduates skip Core automatically.",
      outcomes: [
        "Build a production-ready REST API with FastAPI",
        "Implement JWT authentication and role-based access",
        "Connect to PostgreSQL via SQLAlchemy",
        "Deploy a backend to Railway or Render",
        "Present and explain API architecture on Demo Day",
      ],
      phases: [
        { sessions: "1–8", title: "Python Core", focus: "Setup, OOP, APIs, Git, assessment" },
        { sessions: "9–20", title: "FastAPI Path", focus: "Endpoints, DB, auth, testing, deploy, Demo Day" },
      ],
    },
    "builder-fullstack": {
      tier: "Tier 3 · Senior High (SMA)",
      name: "Builder: JavaScript / TypeScript Full-stack",
      shortName: "JS/TS Full-stack",
      audience: "Grade 10–12",
      ages: "Age 15–18",
      classSize: "Max 3 students",
      priceNote:
        "Bundled with Python Core (8 + 12 sessions). Frontend (React/Next.js) then backend (Express or NestJS).",
      vibe: "Ship a real full-stack app — TypeScript frontend, Node backend, auth, and dual deploy.",
      summary:
        "After Python Core, specialize in modern web: JavaScript/TypeScript, React, Next.js, then Express or NestJS with Prisma — connected, authenticated, and deployed.",
      tools: "JS/TS, React, Next.js, Tailwind, Express or NestJS, Prisma, PostgreSQL, Vercel + Railway.",
      prerequisites:
        "Complete Builder: Python Core, or waive Core via the Trixync Python Assessment. Tier 2 graduates skip Core automatically.",
      outcomes: [
        "Build a full-stack application with React / Next.js",
        "Build a REST API with Express or NestJS",
        "Connect frontend and backend with a proper auth flow",
        "Deploy frontend (Vercel) and backend (Railway) separately",
        "Present and explain architecture decisions on Demo Day",
      ],
      phases: [
        { sessions: "1–8", title: "Python Core", focus: "Setup, OOP, APIs, Git, assessment" },
        {
          sessions: "9–14",
          title: "Frontend — React / Next.js",
          focus: "JS/TS, React, App Router, data fetching, Tailwind",
        },
        {
          sessions: "15–20",
          title: "Backend — Express or NestJS",
          focus: "Prisma, CRUD, JWT auth, full-stack integration, Demo Day",
        },
      ],
    },
    "pro-track": {
      tier: "Tier 4 · Work Prep",
      name: "Pro Track: Job-Ready Developer",
      shortName: "Pro Track",
      audience: "Fresh grads & job seekers",
      ages: "Any background",
      classSize: "Max 3 participants",
      vibe: "Open entry + skills assessment. Portfolio, resume, interviews, industry exposure.",
      summary:
        "For graduates and job seekers: polish your GitHub and LinkedIn, ship deployable projects, prep interviews, and graduate with a certificate.",
      tools: "GitHub, LinkedIn, deployed portfolio projects, mock interviews.",
      prerequisites:
        "Open entry. All applicants complete the Trixync Skills Assessment (coding test, portfolio review if any, short interview).",
      outcomes: [
        "Polished GitHub profile with at least 1 deployed project",
        "ATS-friendly tech resume + optimized LinkedIn",
        "Mock technical interview experience",
        "Trixync certificate + alumni network access",
      ],
      phases: [
        { sessions: "1–2", title: "Developer Identity", focus: "GitHub, LinkedIn, personal branding" },
        { sessions: "3–5", title: "Portfolio Sprint", focus: "Build or polish 1–2 deployable projects" },
        { sessions: "6–8", title: "Resume & Applications", focus: "Tech resume, job boards, ATS basics" },
        { sessions: "9–11", title: "Interview Prep", focus: "DSA patterns, mock interviews, STAR method" },
        { sessions: "12–13", title: "Soft Skills", focus: "Team communication, agile, English at work" },
        { sessions: "14–15", title: "Industry Exposure", focus: "Guest practitioners, code review, real workflows" },
        { sessions: "16", title: "Demo Day", focus: "Portfolio presentation, certificate, alumni invite" },
      ],
    },
    "study-abroad-prep": {
      tier: "Partnership · Study Abroad",
      name: "Study Abroad Prep",
      shortName: "Study Abroad Prep",
      audience: "Students preparing to study abroad",
      ages: "Senior high & gap year · young adults",
      classSize: "",
      vibe: "Curriculum collaboration with Yanks and Brits Study Abroad Program in Medan — not Trixync Explorer or Python Core.",
      summary:
        "Coding syllabus for students preparing to study abroad with Yanks and Brits: Python Fundamentals I & II (foundation-year / CS-intro style), Web Programming, and Data Analytics and Engineering. This page is curriculum reference only.",
      tools: "Python, HTML/CSS/JavaScript, pandas, SQL, Git, academic English write-ups.",
      prerequisites:
        "Through Yanks and Brits Study Abroad Program. Built for students headed overseas.",
      outcomes: [
        "Python Fundamentals I & II in a foundation-year / overseas CS-intro style",
        "A small web project with academic English documentation",
        "A presentable basic data pipeline (Python + SQL)",
        "A study-abroad portfolio pack + English showcase presentation",
      ],
      phases: [
        {
          sessions: "1–8",
          title: "Python Fundamentals I",
          focus: "Academic CS intro: formal problem sets, lab reports, English briefs",
        },
        {
          sessions: "9–16",
          title: "Python Fundamentals II",
          focus: "Abstraction, testing, data files, OOP for overseas assessments",
        },
        {
          sessions: "17–24",
          title: "Web Programming",
          focus: "HTML/CSS/JS, basic APIs, full-stack mini app, demo",
        },
        {
          sessions: "25–32",
          title: "Data Analytics and Engineering",
          focus: "pandas, visualization, cleaning, SQL, pipeline, showcase",
        },
      ],
    },
  },
};

const pricingByLocale: Record<
  Locale,
  Array<Omit<LocalizedPricingRow, "pricePer2" | "pricePer3" | "price"> & { sessionCount: number }>
> = {
  id: [
    {
      program: "Junior Explorer: Python",
      tier: "SD",
      sessions: "16 · 32 jam",
      sessionCount: 16,
      href: "/programs/junior-explorer",
    },
    {
      program: "Explorer: Python",
      tier: "SMP",
      sessions: "20 · 40 jam",
      sessionCount: 20,
      href: "/programs/explorer",
    },
    {
      program: "Builder: Python Core saja",
      tier: "SMA",
      sessions: "8 · 16 jam",
      sessionCount: 8,
      href: "/programs/builder-python-core",
    },
    {
      program: "Builder: Core + FastAPI Backend",
      tier: "SMA",
      sessions: "20 · 40 jam",
      sessionCount: 20,
      href: "/programs/builder-fastapi",
    },
    {
      program: "Builder: Core + JS/TS Full-stack",
      tier: "SMA",
      sessions: "20 · 40 jam",
      sessionCount: 20,
      href: "/programs/builder-fullstack",
    },
    {
      program: "Pro Track: Job-Ready Developer",
      tier: "Persiapan Kerja",
      sessions: "16 · 32 jam",
      sessionCount: 16,
      href: "/programs/pro-track",
    },
  ],
  en: [
    {
      program: "Junior Explorer: Python",
      tier: "Primary (SD)",
      sessions: "16 · 32 hrs",
      sessionCount: 16,
      href: "/programs/junior-explorer",
    },
    {
      program: "Explorer: Python",
      tier: "Junior High (SMP)",
      sessions: "20 · 40 hrs",
      sessionCount: 20,
      href: "/programs/explorer",
    },
    {
      program: "Builder: Python Core only",
      tier: "Senior High (SMA)",
      sessions: "8 · 16 hrs",
      sessionCount: 8,
      href: "/programs/builder-python-core",
    },
    {
      program: "Builder: Core + FastAPI Backend",
      tier: "Senior High (SMA)",
      sessions: "20 · 40 hrs",
      sessionCount: 20,
      href: "/programs/builder-fastapi",
    },
    {
      program: "Builder: Core + JS/TS Full-stack",
      tier: "Senior High (SMA)",
      sessions: "20 · 40 hrs",
      sessionCount: 20,
      href: "/programs/builder-fullstack",
    },
    {
      program: "Pro Track: Job-Ready Developer",
      tier: "Work Prep",
      sessions: "16 · 32 hrs",
      sessionCount: 16,
      href: "/programs/pro-track",
    },
  ],
};

const programIds = Object.keys(shared) as Array<keyof typeof shared>;

function buildProgram(locale: Locale, id: keyof typeof shared): LocalizedProgram {
  const base = shared[id];
  const localized = localizedByLocale[locale][id];
  const partnerPricing =
    "partnerPricing" in base ? base.partnerPricing : undefined;

  return {
    ...base,
    ...localized,
    price: partnerPricing ? "" : formatIdr(classPriceFromSessions(base.sessions)),
    partnerPricing,
    curriculum: getCurriculum(locale, id),
  };
}

export function getLocalizedPrograms(locale: Locale): LocalizedProgram[] {
  return programIds.map((id) => buildProgram(locale, id));
}

export function getLocalizedProgram(locale: Locale, id: string): LocalizedProgram | undefined {
  if (!(id in shared)) return undefined;
  return buildProgram(locale, id as keyof typeof shared);
}

export function getLocalizedPricingRows(locale: Locale): LocalizedPricingRow[] {
  return pricingByLocale[locale].map((row) => {
    const breakdown = pricingBreakdown(row.sessionCount);
    return {
      ...row,
      price: breakdown.classTotalLabel,
      pricePer2: breakdown.per2,
      pricePer3: breakdown.per3,
    };
  });
}

/** Class fee + per-person splits for a program detail view. */
export function getProgramPriceSplits(sessions: number) {
  return pricingBreakdown(sessions);
}

export { formatIdr, splitClassPrice };
