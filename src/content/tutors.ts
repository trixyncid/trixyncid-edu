export type Tutor = {
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

export const tutors: Tutor[] = [
  {
    id: "winsten-coellins",
    name: "Winsten Coellins",
    role: "Fullstack Software Engineer · Lead Instructor",
    location: "Remote · Medan, Indonesia",
    headline:
      "I develop reliable software from concept through launch—focused on clear architecture, thoughtful user experiences, and outcomes teams can measure and trust.",
    bio: [
      "Winsten leads Trixync Education and founded Trixync, a technology & systems studio in Medan. He teaches the same standards used to ship production software: clear architecture, live problem-solving, and projects students can show.",
      "He is a fullstack software engineer at Wilmar Consultancy Services, leading teams on modern Next.js and NestJS systems, with earlier roles at Umify, Collaboration For Good, and the University of Wisconsin–Madison (USA). He holds a B.S. in Data Science and a Computer Science certificate from UW–Madison.",
      "His work spans production systems for logistics, scheduling, property, and education. Stack includes Next.js, React, TypeScript, NestJS, Elysia, Python, FastAPI, PostgreSQL, and cloud deployment. Classes are bilingual: Bahasa Indonesia in the room, English for code and tooling.",
    ],
    focus: [
      "Python foundations through FastAPI backends",
      "JavaScript / TypeScript, React, and Next.js",
      "REST APIs, auth, databases, and deployment",
      "Portfolio, Git workflows, and Demo Day coaching",
    ],
    teaches: [
      "junior-explorer",
      "explorer",
      "builder-python-core",
      "builder-fastapi",
      "builder-fullstack",
      "pro-track",
      "study-abroad-prep",
    ],
    languages: ["Bahasa Indonesia", "English"],
    email: "winstencoellins13@gmail.com",
    website: "https://winstencoellins.dev",
    social: {
      linkedin: "https://linkedin.com/in/winsten-coellins",
      github: "https://github.com/winstencoellins",
      instagram: "https://instagram.com/trixync.id",
    },
  },
  {
    id: "randy-brilliant-chandra",
    name: "Randy Brilliant Chandra",
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
    teaches: [
      "explorer",
      "builder-python-core",
      "builder-fullstack",
      "pro-track",
      "study-abroad-prep",
    ],
    languages: ["Bahasa Indonesia", "English"],
  },
];

export function getTutor(id: string) {
  return tutors.find((t) => t.id === id);
}

export function getTutorIds() {
  return tutors.map((t) => t.id);
}

export function getTutorsForProgram(programId: string) {
  return tutors.filter((t) => t.teaches.includes(programId));
}

export function tutorInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
