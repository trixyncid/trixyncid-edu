import type { CurriculumBlock } from "./types";

/**
 * Study Abroad Prep — collaboration with Yanks and Brits Study Abroad Program (Medan).
 * Python Fundamentals I & II are foundation-year / overseas CS-intro style —
 * intentionally different from Trixync Explorer (Tier 2) and Builder Python Core (Tier 3).
 */
export const curriculum: CurriculumBlock[] = [
  {
    title: "Module 1 — Python Fundamentals I",
    note: "Foundation-year / overseas CS-intro track. Formal problem briefs, English lab notes, and assessment habits — not the same syllabus as Trixync Explorer (Tier 2).",
    sessions: [
      {
        number: "1",
        title: "Thinking Like a CS Student Abroad",
        topics: "Problem briefs, pseudocode, academic integrity, English lab notes",
        youWillLearn: [
          "Read an English problem brief and restate constraints before coding",
          "Outline algorithms in pseudocode the way foundation-year markers expect",
          "Separate exploration from final submission (draft vs assessed work)",
          "Write a short lab note in English describing approach and assumptions",
        ],
      },
      {
        number: "2",
        title: "Typed Thinking & Expressions",
        topics: "Types as contracts, operators, evaluation order, precision",
        youWillLearn: [
          "Treat types as contracts between parts of a program",
          "Trace expression evaluation order on paper before running code",
          "Explain float precision limits in a short written justification",
          "Design inputs/outputs for a graded exercise with clear units",
        ],
      },
      {
        number: "3",
        title: "Specification-Driven Control Flow",
        topics: "Decision tables, edge cases, assert-style checks",
        youWillLearn: [
          "Build a decision table from a written specification",
          "Implement branches that cover required edge cases from a rubric",
          "Use simple asserts to lock expected behaviour before submission",
          "Defend why each branch exists in an English oral check-in",
        ],
      },
      {
        number: "4",
        title: "Iteration as Algorithm Design",
        topics: "Loop invariants (intro), complexity intuition, tracing",
        youWillLearn: [
          "State what stays true on each loop pass (intro invariant idea)",
          "Compare counting vs searching loops for the same brief",
          "Estimate rough steps for small n when explaining efficiency",
          "Produce a traced dry-run table as part of a lab appendix",
        ],
      },
      {
        number: "5",
        title: "Procedures, Contracts & Docstrings",
        topics: "Preconditions/postconditions, pure helpers, English docstrings",
        youWillLearn: [
          "Write function contracts: inputs, outputs, and failure cases",
          "Prefer return values over print-only helpers for graded work",
          "Author Google/NumPy-style English docstrings for markers",
          "Compose small helpers into a solution that matches the brief",
        ],
      },
      {
        number: "6",
        title: "Sequences for Structured Problems",
        topics: "Lists/tuples as data models, indexing proofs, slicing plans",
        youWillLearn: [
          "Model a coursework entity as a list or tuple of fields",
          "Plan index ranges before coding to avoid off-by-one marks loss",
          "Choose mutable vs immutable structures with a written rationale",
          "Transform sequences while preserving original assessment data",
        ],
      },
      {
        number: "7",
        title: "Text, Parsing & Submission Hygiene",
        topics: "Normalising input, file briefs, reproducible runs",
        youWillLearn: [
          "Parse English-formatted input files used in foundation labs",
          "Normalise whitespace/case so automated checks stay stable",
          "Package a reproducible run script for tutor re-marking",
          "List assumptions and limitations in an English appendix",
        ],
      },
      {
        number: "8",
        title: "Assessed Lab — Fundamentals I",
        topics: "Timed-style brief, rubric mapping, viva-lite walkthrough",
        youWillLearn: [
          "Map each rubric line to code and evidence in your write-up",
          "Submit a single zip/folder layout matching overseas lab rules",
          "Deliver a 3-minute English walkthrough of design choices",
          "Reflect on what you would revise before a resit or second attempt",
        ],
        deliverable: "Graded-style Python I lab pack (code + English lab report)",
      },
    ],
  },
  {
    title: "Module 2 — Python Fundamentals II",
    note: "Bridge toward overseas CS assessments: abstraction, testing literacy, and structured data — not Trixync Builder Python Core (venv/decorators/path specialization).",
    sessions: [
      {
        number: "9",
        title: "Associative Data & Problem Modelling",
        topics: "Dictionaries/sets as models, key design, aggregation briefs",
        youWillLearn: [
          "Model records and lookups from an English case study brief",
          "Design dictionary keys that match how markers phrase questions",
          "Aggregate counts/sums without mutating source assessment data",
          "Explain trade-offs vs lists when answering a short theory prompt",
        ],
      },
      {
        number: "10",
        title: "Abstraction & Readable Idioms",
        topics: "Helper extraction, comprehensions with restraint, naming for markers",
        youWillLearn: [
          "Extract helpers when a rubric rewards clarity over cleverness",
          "Use comprehensions only when they improve marker readability",
          "Name identifiers to mirror vocabulary in the problem statement",
          "Refactor a messy solution into an assessable structure",
        ],
      },
      {
        number: "11",
        title: "Multi-file Coursework Layout",
        topics: "Modules as submission units, imports, package hygiene",
        youWillLearn: [
          "Split coursework into modules markers can open independently",
          "Avoid circular imports that break automated test harnesses",
          "Document run order in English for teaching assistants",
          "Keep a clean top-level entrypoint for marking scripts",
        ],
      },
      {
        number: "12",
        title: "Testing Literacy for Assessments",
        topics: "Example-based tests, edge tables, failure messages",
        youWillLearn: [
          "Build an edge-case table from the written specification",
          "Write example-based tests that mirror how TAs smoke-test work",
          "Produce failure messages that help you debug under time pressure",
          "Separate student tests from hidden tests conceptually",
        ],
      },
      {
        number: "13",
        title: "Objects for Domain Briefs",
        topics: "Classes as domain language, state diagrams, method APIs",
        youWillLearn: [
          "Translate nouns/verbs in a brief into classes and methods",
          "Sketch a simple state diagram before implementing behaviour",
          "Keep public method APIs small enough to explain in a viva",
          "Avoid script-style globals when the rubric expects objects",
        ],
      },
      {
        number: "14",
        title: "Composition Over Clever Inheritance",
        topics: "Has-a modelling, shallow hierarchies, academic trade-off writing",
        youWillLearn: [
          "Prefer composition when modelling coursework domains",
          "Use inheritance only when the brief explicitly rewards it",
          "Write a short English trade-off paragraph for your design",
          "Keep class diagrams and code aligned for submission packs",
        ],
      },
      {
        number: "15",
        title: "Coursework Data Pipelines (stdlib)",
        topics: "CSV/JSON briefs, validation logs, audit-friendly scripts",
        youWillLearn: [
          "Load CSV/JSON datasets framed as overseas assignment inputs",
          "Validate schemas and log rejected rows for an audit trail",
          "Write cleaned outputs with filenames matching the brief",
          "Explain cleaning decisions in English without hiding steps",
        ],
      },
      {
        number: "16",
        title: "Assessed Capstone — Fundamentals II",
        topics: "Multi-module OOP + data brief, English defence, resit plan",
        youWillLearn: [
          "Ship a multi-module solution that meets a composite rubric",
          "Include tests, sample runs, and an English design defence",
          "Present as if to an overseas tutor (clarity over speed demos)",
          "Produce a personal improvement plan for university year one",
        ],
        deliverable: "Python II assessed pack (modules + tests + English defence)",
      },
    ],
  },
  {
    title: "Module 3 — Web Programming",
    note: "Browser-to-server foundations used in many CS and digital media programs abroad.",
    sessions: [
      {
        number: "17",
        title: "Web Architecture Basics",
        topics: "HTTP, clients/servers, URLs, status codes",
        youWillLearn: [
          "Explain request/response flow in plain language",
          "Read status codes and locate failures in the network tab",
          "Map routes and resources for a simple site",
          "Describe how front-end and back-end collaborate",
        ],
      },
      {
        number: "18",
        title: "HTML Structure & Semantics",
        topics: "Document structure, forms, accessibility basics",
        youWillLearn: [
          "Build semantic page structure with headings, lists, and sections",
          "Create forms that collect and validate basic input",
          "Use labels and alt text for accessibility-minded markup",
          "Organize assets for a clean project folder",
        ],
      },
      {
        number: "19",
        title: "CSS Layout & Responsive Design",
        topics: "box model, flexbox/grid, mobile-first layout",
        youWillLearn: [
          "Style pages with modern layout tools (flexbox/grid)",
          "Build responsive layouts that work on laptop and phone",
          "Apply consistent spacing and typography without clutter",
          "Debug layout issues using browser developer tools",
        ],
      },
      {
        number: "20",
        title: "JavaScript in the Browser",
        topics: "DOM, events, fetch basics",
        youWillLearn: [
          "Select and update DOM elements in response to user events",
          "Handle clicks, forms, and simple client-side validation",
          "Fetch JSON from an API and render results on the page",
          "Keep JS modules readable for group coursework",
        ],
      },
      {
        number: "21",
        title: "Front-end Project Patterns",
        topics: "Component thinking, state on the client, tooling intro",
        youWillLearn: [
          "Break a UI into reusable sections or components",
          "Track UI state without spaghetti event handlers",
          "Use a modern starter (or plain modules) with clear scripts",
          "Prepare a front-end demo suitable for portfolio or admission",
        ],
      },
      {
        number: "22",
        title: "Server Basics & APIs",
        topics: "REST ideas, routes, JSON responses, auth concepts",
        youWillLearn: [
          "Design simple REST-style endpoints for CRUD resources",
          "Return JSON with clear error messages and status codes",
          "Call your own API from a front-end page",
          "Explain cookies/tokens at a conceptual level for coursework",
        ],
      },
      {
        number: "23",
        title: "Full-stack Mini App",
        topics: "Connect UI + API + persistence sketch",
        youWillLearn: [
          "Wire a form UI to create/read data through an API",
          "Persist data with a lightweight store or database sketch",
          "Handle loading and error states in the UI",
          "Deploy or demo the app in a way admissions tutors can open",
        ],
      },
      {
        number: "24",
        title: "Web Programming Capstone",
        topics: "Polish, README, live demo, English walkthrough",
        youWillLearn: [
          "Ship a small full-stack web project end to end",
          "Document setup, features, and architecture in English",
          "Record or present a short live demo",
          "Reflect on what you would improve for a university project brief",
        ],
        deliverable: "Web mini-app + English README + demo script",
      },
    ],
  },
  {
    title: "Module 4 — Data Analytics and Engineering",
    note: "Analytical thinking and data pipelines that show up in STEM and business programs abroad.",
    sessions: [
      {
        number: "25",
        title: "Data Thinking & Question Framing",
        topics: "metrics, hypotheses, tidy data mindset",
        youWillLearn: [
          "Turn a vague topic into a measurable question",
          "Identify dimensions, metrics, and grain of a dataset",
          "Spot messy vs tidy data before analysis begins",
          "Write an analysis plan the way a lab brief expects",
        ],
      },
      {
        number: "26",
        title: "Tabular Analysis with Python",
        topics: "pandas basics, filtering, groupby, joins",
        youWillLearn: [
          "Load tables and inspect shape, dtypes, and missing values",
          "Filter, sort, and aggregate with groupby patterns",
          "Join tables on keys without duplicating rows accidentally",
          "Produce summary tables ready for charts or reports",
        ],
      },
      {
        number: "27",
        title: "Visualization & Communication",
        topics: "charts, storytelling, English figure captions",
        youWillLearn: [
          "Choose chart types that match the question being asked",
          "Build clear plots with labels, units, and readable scales",
          "Write figure captions and insights in academic English",
          "Avoid misleading visuals common in weak reports",
        ],
      },
      {
        number: "28",
        title: "Data Quality & Cleaning Pipelines",
        topics: "nulls, duplicates, validation, reproducible notebooks",
        youWillLearn: [
          "Detect and treat missing or duplicate records deliberately",
          "Validate ranges and categories before modeling or reporting",
          "Keep cleaning steps reproducible in a notebook or script",
          "Log assumptions so markers can follow your process",
        ],
      },
      {
        number: "29",
        title: "Intro to Data Engineering Concepts",
        topics: "ETL/ELT, batch vs stream (conceptual), storage layers",
        youWillLearn: [
          "Explain extract–transform–load at a practical level",
          "Separate raw, cleaned, and serving data responsibilities",
          "Sketch a simple pipeline from file drop to dashboard table",
          "Discuss trade-offs of batch processing for coursework scale",
        ],
      },
      {
        number: "30",
        title: "SQL for Analytics",
        topics: "SELECT, WHERE, JOIN, GROUP BY, basic window ideas",
        youWillLearn: [
          "Query tables with filters, joins, and aggregations",
          "Translate an analysis question into SQL steps",
          "Compare SQL results with pandas outputs for confidence",
          "Write queries that are readable for peer review",
        ],
      },
      {
        number: "31",
        title: "End-to-End Mini Pipeline",
        topics: "ingest → clean → analyze → present",
        youWillLearn: [
          "Build a small pipeline from raw files to insight tables",
          "Automate repeated cleaning steps where useful",
          "Produce charts and a short findings memo in English",
          "Package notebooks/scripts so a tutor can re-run them",
        ],
      },
      {
        number: "32",
        title: "Study Abroad Showcase",
        topics: "Portfolio pack, English presentation, next-step plan",
        youWillLearn: [
          "Assemble Python, web, and data artifacts into one portfolio pack",
          "Present your study-abroad readiness story in clear English",
          "Map which modules support your intended major overseas",
          "Leave with a concrete plan for applications and further practice",
        ],
        deliverable: "Study-abroad portfolio pack + English showcase presentation",
      },
    ],
  },
];
