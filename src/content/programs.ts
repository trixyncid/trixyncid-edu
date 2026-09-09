import { curriculaByProgramId } from "@/content/curricula";
import type { CurriculumBlock, CurriculumSession } from "@/content/curricula/types";

export type { CurriculumBlock, CurriculumSession };

export type Program = {
  id: string;
  tier: string;
  name: string;
  shortName: string;
  stack: string[];
  audience: string;
  ages: string;
  sessions: number;
  hours: number;
  classSize: string;
  price: string;
  priceNote?: string;
  vibe: string;
  summary: string;
  tools: string;
  prerequisites: string;
  outcomes: string[];
  phases: { title: string; focus: string; sessions: string }[];
  curriculum: CurriculumBlock[];
  sessionStructure?: { time: string; activity: string }[];
  accent: "emerald" | "sky" | "violet" | "amber" | "rose" | "cyan";
};

export const programs: Program[] = [
  {
    id: "junior-explorer",
    tier: "Tier 1 · Primary (SD)",
    name: "Junior Explorer: Python",
    shortName: "Junior Explorer",
    stack: ["Python"],
    audience: "Primary 4–6",
    ages: "Age 9–12",
    sessions: 16,
    hours: 32,
    classSize: "Max 3 students",
    price: "Rp 4.800.000",
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
    curriculum: curriculaByProgramId["junior-explorer"],
    accent: "emerald",
  },
  {
    id: "explorer",
    tier: "Tier 2 · Junior High (SMP)",
    name: "Explorer: Python",
    shortName: "Explorer",
    stack: ["Python", "Git"],
    audience: "Grade 7–9",
    ages: "Age 12–15",
    sessions: 20,
    hours: 40,
    classSize: "Max 3 students",
    price: "Rp 6.000.000",
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
      {
        sessions: "10–12",
        title: "Functions & Scope",
        focus: "def, parameters, return, scope, lambda",
      },
      { sessions: "13–15", title: "OOP Basics", focus: "Classes, objects, attributes, __init__" },
      {
        sessions: "16–18",
        title: "File I/O & Modules",
        focus: "Files, import, standard library",
      },
      { sessions: "19–20", title: "Capstone", focus: "Student-chosen project + Demo Day" },
    ],
    curriculum: curriculaByProgramId.explorer,
    accent: "sky",
  },
  {
    id: "builder-python-core",
    tier: "Tier 3 · Senior High (SMA)",
    name: "Builder: Python Core",
    shortName: "Python Core",
    stack: ["Python", "Git", "APIs"],
    audience: "Grade 10–12",
    ages: "Age 15–18",
    sessions: 8,
    hours: 16,
    classSize: "Max 3 students",
    price: "Rp 2.400.000",
    priceNote:
      "Standalone, or bundled with Path A (FastAPI) / Path B (JS/TS Full-stack) for Rp 6.000.000 total.",
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
    curriculum: curriculaByProgramId["builder-python-core"],
    accent: "violet",
  },
  {
    id: "builder-fastapi",
    tier: "Tier 3 · Senior High (SMA)",
    name: "Builder: Python Backend (FastAPI)",
    shortName: "FastAPI Backend",
    stack: ["Python", "FastAPI", "PostgreSQL", "JWT"],
    audience: "Grade 10–12",
    ages: "Age 15–18",
    sessions: 20,
    hours: 40,
    classSize: "Max 3 students",
    price: "Rp 6.000.000",
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
      {
        sessions: "9–20",
        title: "FastAPI Path",
        focus: "Endpoints, DB, auth, testing, deploy, Demo Day",
      },
    ],
    curriculum: curriculaByProgramId["builder-fastapi"],
    accent: "violet",
  },
  {
    id: "builder-fullstack",
    tier: "Tier 3 · Senior High (SMA)",
    name: "Builder: JavaScript / TypeScript Full-stack",
    shortName: "JS/TS Full-stack",
    stack: ["JavaScript", "TypeScript", "React", "Next.js", "Express", "NestJS"],
    audience: "Grade 10–12",
    ages: "Age 15–18",
    sessions: 20,
    hours: 40,
    classSize: "Max 3 students",
    price: "Rp 6.000.000",
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
    curriculum: curriculaByProgramId["builder-fullstack"],
    accent: "rose",
  },
  {
    id: "pro-track",
    tier: "Tier 4 · Work Prep",
    name: "Pro Track: Job-Ready Developer",
    shortName: "Pro Track",
    stack: ["Portfolio", "Career", "Interviews"],
    audience: "Fresh grads & job seekers",
    ages: "Any background",
    sessions: 16,
    hours: 32,
    classSize: "Max 3 participants",
    price: "Rp 4.800.000",
    vibe: "Open entry + skills assessment. Portfolio, resume, interviews, industry exposure.",
    summary:
      "For graduates and job seekers: polish your GitHub and LinkedIn, ship deployable projects, and prep for interviews.",
    tools: "GitHub, LinkedIn, deployed portfolio projects, mock interviews.",
    prerequisites:
      "Open entry. All applicants complete the Trixync Skills Assessment (coding test, portfolio review if any, short interview).",
    outcomes: [
      "Polished GitHub profile with at least 1 deployed project",
      "ATS-friendly tech resume + optimized LinkedIn",
      "Mock technical interview experience",
      "Alumni network access",
    ],
    phases: [
      { sessions: "1–2", title: "Developer Identity", focus: "GitHub, LinkedIn, personal branding" },
      {
        sessions: "3–5",
        title: "Portfolio Sprint",
        focus: "Build or polish 1–2 deployable projects",
      },
      {
        sessions: "6–8",
        title: "Resume & Applications",
        focus: "Tech resume, job boards, ATS basics",
      },
      {
        sessions: "9–11",
        title: "Interview Prep",
        focus: "DSA patterns, mock interviews, STAR method",
      },
      {
        sessions: "12–13",
        title: "Soft Skills",
        focus: "Team communication, agile, English at work",
      },
      {
        sessions: "14–15",
        title: "Industry Exposure",
        focus: "Guest practitioners, code review, real workflows",
      },
      {
        sessions: "16",
        title: "Demo Day",
        focus: "Portfolio presentation, alumni invite",
      },
    ],
    curriculum: curriculaByProgramId["pro-track"],
    accent: "amber",
  },
  {
    id: "study-abroad-prep",
    tier: "Partnership · Study Abroad",
    name: "Study Abroad Prep",
    shortName: "Study Abroad Prep",
    stack: ["Python", "Web", "Data", "SQL"],
    audience: "Students preparing to study abroad",
    ages: "Senior high & gap year · young adults",
    sessions: 32,
    hours: 64,
    classSize: "",
    price: "",
    vibe: "Curriculum collaboration with Yanks and Brits in Medan — not Explorer or Python Core.",
    summary:
      "Syllabus reference for study-abroad prep with Yanks and Brits. Curriculum details only on this site.",
    tools: "Python, HTML/CSS/JavaScript, pandas, SQL, Git, academic English write-ups.",
    prerequisites:
      "Through Yanks and Brits Study Abroad Program.",
    outcomes: [
      "Python Fundamentals I & II ready for overseas coding labs",
      "A small full-stack web project with an English README",
      "A presentable basic data pipeline (Python + SQL)",
      "A study-abroad portfolio pack + English showcase presentation",
    ],
    phases: [
      {
        sessions: "1–8",
        title: "Python Fundamentals I",
        focus: "Syntax, control flow, functions, collections, capstone lab",
      },
      {
        sessions: "9–16",
        title: "Python Fundamentals II",
        focus: "Dicts/sets, modules, debugging, OOP, data files, capstone",
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
    curriculum: curriculaByProgramId["study-abroad-prep"],
    accent: "cyan",
  },
];

export function getProgram(id: string) {
  return programs.find((p) => p.id === id);
}

export function getProgramIds() {
  return programs.map((p) => p.id);
}

export const pricingRows = [
  {
    program: "Junior Explorer: Python",
    tier: "Primary (SD)",
    sessions: "16 · 32 hrs",
    price: "Rp 4.800.000",
    href: "/programs/junior-explorer",
  },
  {
    program: "Explorer: Python",
    tier: "Junior High (SMP)",
    sessions: "20 · 40 hrs",
    price: "Rp 6.000.000",
    href: "/programs/explorer",
  },
  {
    program: "Builder: Python Core only",
    tier: "Senior High (SMA)",
    sessions: "8 · 16 hrs",
    price: "Rp 2.400.000",
    href: "/programs/builder-python-core",
  },
  {
    program: "Builder: Core + FastAPI Backend",
    tier: "Senior High (SMA)",
    sessions: "20 · 40 hrs",
    price: "Rp 6.000.000",
    href: "/programs/builder-fastapi",
  },
  {
    program: "Builder: Core + JS/TS Full-stack",
    tier: "Senior High (SMA)",
    sessions: "20 · 40 hrs",
    price: "Rp 6.000.000",
    href: "/programs/builder-fullstack",
  },
  {
    program: "Pro Track: Job-Ready Developer",
    tier: "Work Prep",
    sessions: "16 · 32 hrs",
    price: "Rp 4.800.000",
    href: "/programs/pro-track",
  },
] as const;

export const principles = [
  {
    title: "Every session is live",
    body: "2 hours, instructor-led. No slide decks pretending to be education.",
  },
  {
    title: "Cohort-based, not self-paced",
    body: "You learn with peers, ship together, and present on Demo Day.",
  },
  {
    title: "Python foundation, then specialize",
    body: "Start with Python — then FastAPI backend or JavaScript/TypeScript full-stack.",
  },
  {
    title: "Portfolio from day one",
    body: "From Builder onward, projects are real, shareable, and deployable.",
  },
] as const;

export const enrollmentWindows = [
  {
    window: "Monday–Friday",
    months: "Weekdays",
    duration: "9:00 AM – 5:00 PM",
  },
  {
    window: "Saturday",
    months: "Weekend",
    duration: "9:00 AM – 3:00 PM",
  },
  {
    window: "Sunday",
    months: "Closed",
    duration: "No sessions",
  },
] as const;

export const faqs = [
  {
    q: "Do students need prior coding experience?",
    a: "Tier 1 and Tier 2 are open entry. Tier 3 can waive Python Core with an assessment pass. Pro Track is open entry with a skills assessment to place you correctly.",
  },
  {
    q: "Is there a JavaScript / TypeScript course?",
    a: "Yes. Builder Path B is a full JavaScript/TypeScript track: React & Next.js on the frontend, then Express or NestJS on the backend — after Python Core (or an assessment waiver).",
  },
  {
    q: "What language is used in class?",
    a: "Instruction is in Bahasa Indonesia. Code, docs, and tooling are in English — the same bilingual setup used in real developer work.",
  },
  {
    q: "Where are classes held?",
    a: "In-person in Medan, North Sumatra (venue confirmed per cohort). Online via Google Meet / Zoom is available for overflow or remote students. Hours: Mon–Fri 9:00 AM–5:00 PM, Saturday 9:00 AM–3:00 PM, closed Sunday.",
  },
  {
    q: "How big are the cohorts?",
    a: "Small by design: roughly 8–12 for Primary, 8–15 for SMP, and 6–12 for Pro Track — enough peer energy, enough instructor attention.",
  },
  {
    q: "When can we enroll?",
    a: "Anytime. Enrollment is not limited to school holidays. Sessions are scheduled within operating hours (Mon–Fri 9:00 AM–5:00 PM, Saturday 9:00 AM–3:00 PM; closed Sunday).",
  },
  {
    q: "What do students walk away with?",
    a: "Working projects, Demo Day presentation experience, and — for Pro Track — a polished GitHub, resume, LinkedIn, and alumni network access.",
  },
] as const;
