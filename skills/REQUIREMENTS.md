# Trixync.id — Coding Education Program
## Full Program Requirements & Curriculum Specification

> **Context for AI:** This document is the single source of truth for designing, scaffolding, and building the Trixync.id coding education platform. All curriculum structure, pricing, prerequisites, session counts, and track logic defined here should be treated as requirements. Use this when generating course content, platform features, enrollment flows, or marketing copy.

---

## Program Philosophy

Trixync.id runs a practitioner-led, cohort-based coding education program in Medan, Indonesia. The model is inspired by Frontend Masters — structured, high-quality, and outcome-focused. Every tier is hands-on and project-first. Students learn by building real things, not by watching slides.

**Core principles:**
- Every session = 2 hours, live, instructor-led
- Cohort-based enrollment (not self-paced)
- Primary enrollment windows: June holiday & December holiday
- Bilingual delivery: Bahasa Indonesia instruction, English code and tooling
- All projects are real, shareable, portfolio-ready from Builder tier onward

---

## Track Architecture

The program is structured as a **learning ladder** across four school/life stages. Python is the universal foundation — all students start here regardless of which specialization they eventually pursue.

```
┌─────────────────────────────────────────────────────────────┐
│  TIER 4 — WORK PREP          │ Fresh Grads & Job Seekers    │
│  Pro Track                   │ Open entry + assessment      │
├─────────────────────────────────────────────────────────────┤
│  TIER 3 — SENIOR HIGH (SMA)  │ Grade 10–12, Age 15–18       │
│  Builder: Python Core        │ then split into:             │
│    ├── Path A: Python Backend (FastAPI)                      │
│    └── Path B: JavaScript/TypeScript Frontend + Backend      │
│              (React / Next.js + Express / NestJS)            │
├─────────────────────────────────────────────────────────────┤
│  TIER 2 — JUNIOR HIGH (SMP)  │ Grade 7–9, Age 12–15         │
│  Explorer: Python            │ Logic, OOP, real projects    │
├─────────────────────────────────────────────────────────────┤
│  TIER 1 — PRIMARY            │ Grade 4–6, Age 9–12          │
│  Junior Explorer: Python     │ Fundamentals, fun-first      │
└─────────────────────────────────────────────────────────────┘
```

---

## Tier 1 — Primary School (SD)
### Junior Explorer: Python
**Target:** Primary 4–6 (Age 9–12), mixed cohort
**Sessions:** 16 sessions × 2 hours = 32 hours total
**Class size:** 8–12 students per cohort
**Vibe:** Fun-first, project-driven, structured enough for parents to trust
**Tools:** Python 3 via Replit (browser-based, zero install)
**Price:** Rp 1.500.000 – Rp 2.000.000 per cohort

### Prerequisites
None. Open to all P4–P6 students.

### Curriculum Structure

| Phase | Sessions | Title | Focus |
|---|---|---|---|
| 1 | 1–3 | Hello, Computer! | print(), variables, input(), if/else |
| 2 | 4–6 | Loops & Logic | for, while, break, FizzBuzz |
| 3 | 7–9 | Organising Things | lists, functions, return values |
| 4 | 10–13 | Fun Projects | Mad Libs, Quiz Game, Rock Paper Scissors, Turtle drawing |
| 5 | 14–16 | Showcase | debugging, final project, Demo Day |

### Session Structure (per meeting)
- 0:00–0:15 — Warm-up / recap
- 0:15–0:40 — New concept (max 15 min of talking)
- 0:40–1:30 — Guided hands-on coding
- 1:30–1:50 — Independent mini project
- 1:50–2:00 — Share-out + preview next session

### Learning Outcomes
By end of program, students can:
- Write and run Python programs independently
- Use variables, conditions, loops, and functions
- Read and fix basic error messages
- Build and present a mini project of their own choosing

---

## Tier 2 — Junior High (SMP)
### Explorer: Python
**Target:** Grade 7–9 (Age 12–15), mixed cohort
**Sessions:** 20 sessions × 2 hours = 40 hours total
**Class size:** 8–15 students per cohort
**Vibe:** Structured with real project outcomes; practitioner-led
**Tools:** Python 3, VS Code or Thonny, Git basics introduced late
**Price:** Rp 2.000.000 – Rp 2.500.000 per cohort

### Prerequisites
None. Students from Tier 1 (Junior Explorer) are naturally ready. New students are welcome.

### Curriculum Structure

| Phase | Sessions | Title | Focus |
|---|---|---|---|
| 1 | 1–3 | Python Foundations | Variables, types, operators, input/output |
| 2 | 4–6 | Control Flow | if/elif/else, for/while, nested logic |
| 3 | 7–9 | Data Structures | Lists, tuples, dictionaries, sets |
| 4 | 10–12 | Functions & Scope | def, parameters, return, scope, lambda basics |
| 5 | 13–15 | OOP Basics | Classes, objects, attributes, methods, `__init__` |
| 6 | 16–18 | File I/O & Modules | Reading/writing files, import, standard library |
| 7 | 19–20 | Capstone Project | Student-chosen project + Demo Day |

### Learning Outcomes
By end of program, students can:
- Write structured Python programs using OOP principles
- Work with files and external modules
- Break a problem into functions and classes
- Build, document, and present a complete Python project

---

## Tier 3 — Senior High (SMA)
### Builder: Python Core (Prerequisite Phase)
**Target:** Grade 10–12 (Age 15–18)
**Sessions:** 8 sessions × 2 hours = 16 hours
**Price:** Rp 1.000.000 – Rp 1.500.000 (standalone or bundled with a path below)

### Prerequisite Waiver Policy
Students who have completed Tier 2 (Explorer: Python) skip this phase automatically.
Students with prior coding experience may waive this phase by **passing the Trixync Python Assessment** — a short practical test covering functions, OOP, and problem-solving.

### Python Core Curriculum (8 sessions)

| Session | Title | Topics |
|---|---|---|
| 1 | Python Review & Dev Setup | VS Code, venv, pip, git init |
| 2 | Advanced Functions | *args, **kwargs, decorators intro |
| 3 | OOP Deep Dive | Inheritance, polymorphism, dunder methods |
| 4 | Error Handling | try/except/finally, custom exceptions |
| 5 | Working with Data | JSON, CSV, os/pathlib, environment variables |
| 6 | APIs & HTTP | requests library, REST concepts, consuming APIs |
| 7 | Git & Collaboration | Branching, pull requests, .gitignore, README |
| 8 | Assessment | Practical project test — prerequisite for path selection |

---

### Path A — Python Backend with FastAPI
**Sessions:** 12 sessions × 2 hours = 24 hours (after Python Core)
**Total with Python Core:** 20 sessions = 40 hours
**Price:** Rp 3.000.000 – Rp 4.000.000 per cohort (Python Core + Path A bundled)

#### Curriculum

| Session | Title | Topics |
|---|---|---|
| 1 | FastAPI Intro | Project setup, uvicorn, first endpoint, auto docs |
| 2 | Path & Query Params | Route parameters, query strings, validation |
| 3 | Pydantic Models | Request/response schemas, data validation |
| 4 | Database with SQLAlchemy | PostgreSQL setup, models, sessions, migrations |
| 5 | CRUD Operations | GET, POST, PUT, DELETE with DB |
| 6 | Auth — JWT | User model, hashing, JWT access tokens |
| 7 | Auth — Protected Routes | Depends(), token verification, role basics |
| 8 | File Uploads & Background Tasks | UploadFile, BackgroundTasks |
| 9 | Testing | pytest, TestClient, fixtures |
| 10 | Deployment | Railway or Render, environment config, CI basics |
| 11 | Capstone Workshop | Guided build — real REST API project |
| 12 | Demo Day | Live presentation, code walkthrough, feedback |

#### Learning Outcomes
- Build a production-ready REST API with FastAPI
- Implement JWT authentication and role-based access
- Connect to a PostgreSQL database via SQLAlchemy
- Deploy a backend to a cloud platform (Railway / Render)
- Present and explain their API architecture

---

### Path B — JavaScript / TypeScript: Frontend + Backend
**Sessions:** 12 sessions × 2 hours = 24 hours (after Python Core)
**Total with Python Core:** 20 sessions = 40 hours
**Price:** Rp 3.000.000 – Rp 4.000.000 per cohort (Python Core + Path B bundled)

#### Sub-path B1: Frontend — React / Next.js (first 6 sessions)

| Session | Title | Topics |
|---|---|---|
| 1 | JS/TS Foundations | Types, ES6+, async/await, node basics |
| 2 | React Fundamentals | JSX, components, props, useState |
| 3 | React Patterns | useEffect, conditional rendering, lists & keys |
| 4 | Next.js App Router | Pages, layouts, routing, server vs client components |
| 5 | Data Fetching | fetch, SWR, loading/error states, API routes |
| 6 | Styling & Deployment | Tailwind CSS basics, Vercel deployment |

#### Sub-path B2: Backend — Express.js or NestJS (sessions 7–12)

Students choose **Express** (lighter, more flexible) or **NestJS** (structured, enterprise-style) based on their goal.

| Session | Title | Express Topics | NestJS Topics |
|---|---|---|---|
| 7 | Backend Setup | Express server, middleware, routing | NestJS CLI, modules, controllers |
| 8 | Database | Prisma + PostgreSQL | Prisma + PostgreSQL |
| 9 | CRUD API | REST endpoints, controllers | Services, DTOs, validation pipes |
| 10 | Auth | JWT + bcrypt, auth middleware | Passport.js, Guards, JWT strategy |
| 11 | Full-stack Integration | Connecting Next.js frontend to backend API | Same |
| 12 | Deploy + Demo Day | Railway backend + Vercel frontend, live demo | Same |

#### Learning Outcomes
- Build a full-stack application with React/Next.js frontend
- Build a REST API backend with Express or NestJS
- Connect frontend and backend with proper auth flow
- Deploy a full-stack project with separate frontend and backend hosts
- Present and explain architecture decisions

---

## Tier 4 — Work Preparation
### Pro Track: Job-Ready Developer
**Target:** Fresh graduates, job seekers, self-taught developers (any background)
**Sessions:** 16 sessions × 2 hours = 32 hours
**Class size:** 6–12 participants per cohort
**Price:** Rp 3.500.000 – Rp 5.000.000 per cohort

### Entry Requirement
**Open entry** — no specific educational background required.
All applicants complete the **Trixync Skills Assessment** before enrollment:
- Practical coding test (basic functions, logic, simple API task)
- Portfolio review (if any prior work exists)
- Short interview with instructor
Assessment determines starting readiness and any recommended catch-up material.

### Curriculum Structure

| Phase | Sessions | Title | Focus |
|---|---|---|---|
| 1 | 1–2 | Developer Identity | GitHub profile, LinkedIn optimization, personal branding for tech |
| 2 | 3–5 | Portfolio Project Sprint | Build or polish 1–2 deployable projects from scratch |
| 3 | 6–8 | Resume & Application | Tech resume writing, job board strategy, ATS basics, cover letters |
| 4 | 9–11 | Interview Preparation | Technical interview patterns, DSA basics (arrays, strings, dicts), mock interviews |
| 5 | 12–13 | Soft Skills for Tech | Communication in English & Indonesian, working in teams, agile basics |
| 6 | 14–15 | Industry Exposure | Guest practitioner talks, code review sessions, real-world workflow walkthrough |
| 7 | 16 | Demo Day + Graduation | Final portfolio presentation, LinkedIn post, certificate |

### Session Detail

#### Phase 1 — Developer Identity (Sessions 1–2)
- GitHub: profile README, pinned repos, contribution graph hygiene
- LinkedIn: headline, about section, featured section with projects
- Personal branding: what to post, how to engage in the tech community
- Deliverable: polished GitHub profile + LinkedIn live by end of session 2

#### Phase 2 — Portfolio Project Sprint (Sessions 3–5)
- Students pick 1–2 projects to build or significantly polish
- Must be deployed and publicly accessible
- Each project needs: README, live demo link, tech stack explanation
- Instructor reviews code and gives feedback each session
- Tracks: Python/FastAPI project OR React+Next.js full-stack project (based on student's path)

#### Phase 3 — Resume & Application Strategy (Sessions 6–8)
- Tech resume structure: what to include, what to cut, how to quantify impact
- ATS-friendly formatting basics
- Job boards for Indonesia tech market: Glints, Kalibrr, LinkedIn, JobStreet, Tech in Asia
- Application tracking and follow-up strategy
- Deliverable: finalized 1-page tech resume

#### Phase 4 — Interview Preparation (Sessions 9–11)
- Technical interview types: DSA, system design (conceptual), take-home projects
- Core DSA patterns (no LeetCode grind — practical, focused):
  - Arrays and strings
  - Hash maps / dictionaries
  - Basic recursion
  - Simple sorting intuition
- Live mock interviews (peer + instructor)
- Behavioral interview: STAR method, common tech interview questions in Indonesian/English
- Deliverable: record a mock interview, review and improve

#### Phase 5 — Soft Skills for Tech (Sessions 12–13)
- How to communicate technical ideas to non-technical stakeholders
- Working in agile teams: standups, tickets, PRs, code reviews
- Written communication: Slack/email etiquette, async collaboration
- English in the workplace: reading docs, writing commit messages, PR descriptions

#### Phase 6 — Industry Exposure (Sessions 14–15)
- Guest practitioner session: local Medan tech professionals or remote Indonesian devs
- Code review workshop: students submit real code, instructor reviews live
- Walkthrough of a real production workflow (tickets → branch → PR → deploy)

#### Phase 7 — Demo Day + Graduation (Session 16)
- Each student presents their portfolio project (5–10 min)
- Live on LinkedIn or recorded for posting
- Trixync certificate of completion issued
- Alumni network invitation

### Learning Outcomes
By end of program, participants will have:
- A polished GitHub profile with at least 1 deployed project
- A completed, ATS-friendly tech resume
- An optimized LinkedIn profile
- Experience with mock technical interviews
- A graduation certificate from Trixync.id
- Access to the Trixync alumni network

---

## Pricing Summary

| Tier | Program | Sessions | Hours | Price (IDR) |
|---|---|---|---|---|
| Primary (SD) | Junior Explorer: Python | 16 | 32 hrs | Rp 1.500.000 – Rp 2.000.000 |
| Junior High (SMP) | Explorer: Python | 20 | 40 hrs | Rp 2.000.000 – Rp 2.500.000 |
| Senior High (SMA) | Builder: Python Core only | 8 | 16 hrs | Rp 1.000.000 – Rp 1.500.000 |
| Senior High (SMA) | Builder: Python Core + Path A (FastAPI) | 20 | 40 hrs | Rp 3.000.000 – Rp 4.000.000 |
| Senior High (SMA) | Builder: Python Core + Path B (React/Next.js + Express/NestJS) | 20 | 40 hrs | Rp 3.000.000 – Rp 4.000.000 |
| Work Prep | Pro Track: Job-Ready Developer | 16 | 32 hrs | Rp 3.500.000 – Rp 5.000.000 |

### Additional Revenue Streams (not in scope of this document)
- **One-Day Pro Workshop:** Rp 350.000 – Rp 600.000 per ticket (topic-based, open to public)
- **Alumni Subscription:** Rp 150.000 – Rp 250.000/month (resources, mentorship, job board access)
- **Corporate Training:** Custom pricing (agency intern pipeline, team upskilling)

---

## Prerequisite & Entry Flow

```
No experience
     │
     ▼
[Tier 1] Junior Explorer: Python (P4–P6)
     │  graduates naturally ready for Tier 2
     ▼
[Tier 2] Explorer: Python (SMP)
     │  graduates naturally ready for Tier 3
     ▼
[Tier 3] Builder: Python Core (SMA)  ◄── waivable with assessment pass
     │
     ├──► Path A: FastAPI Backend
     │
     └──► Path B: React/Next.js + Express/NestJS
                        │
                        ▼
              [Tier 4] Pro Track: Job-Ready Developer
                   ◄── open entry + skills assessment
                   (self-taught / bootcamp grads also welcome)
```

---

## Enrollment Windows

| Window | Months | Cohort Duration |
|---|---|---|
| June Holiday | June | ~4–8 weeks (intensive) |
| December Holiday | December | ~4–8 weeks (intensive) |
| Semester (optional) | February or August | Weekly sessions, longer runway |

---

## Location & Delivery

- **City:** Medan, North Sumatra, Indonesia
- **Delivery:** In-person (primary) — venue TBD per cohort
- **Online option:** Possible via Google Meet / Zoom for overflow or remote students
- **Platform:** Replit (Tier 1), VS Code + local setup (Tier 2+)
- **Version control:** Git introduced at Tier 2, enforced from Tier 3 onward

---

## Notes for AI (Cursor / Claude)

- When generating course content, always align session count and hours to the table above
- Pricing is in Indonesian Rupiah (IDR / Rp) — do not convert to USD unless asked
- The program is bilingual: Bahasa Indonesia for instruction, English for code, docs, and tooling
- The audience is Medan-based students — keep cultural context local where relevant
- Python is the universal entry point — no student goes to Tier 3 paths without Python Core (unless they pass the assessment)
- "Explorer" = SMP tier; "Junior Explorer" = Primary tier; "Builder" = SMA tier; "Pro Track" = Work Prep tier
- Do not add a data science or AI/ML track — this is out of scope for now
- All projects must be deployable: Railway, Render, or Vercel depending on stack
