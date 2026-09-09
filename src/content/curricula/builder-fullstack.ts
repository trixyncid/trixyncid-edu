import type { CurriculumBlock } from "./types";

const pythonCore: CurriculumBlock = {
  title: "Python Core (prerequisite)",
  note: "Skipped if you completed Explorer or passed the assessment.",
  sessions: [
    {
      number: "1",
      title: "Python Review & Dev Setup",
      topics: "VS Code, venv, pip, git init",
      youWillLearn: [
        "Configure VS Code for Python with extensions and the integrated terminal",
        "Create and activate a virtual environment with venv",
        "Install packages with pip and track them in requirements.txt",
        "Initialize a Git repo and make your first commit",
      ],
    },
    {
      number: "2",
      title: "Advanced Functions",
      topics: "*args, **kwargs, decorators intro",
      youWillLearn: [
        "Accept variable arguments with *args and **kwargs",
        "Write higher-order functions that take or return other functions",
        "Apply a simple decorator to log or time function calls",
        "Refactor repetitive function signatures using unpacking",
      ],
    },
    {
      number: "3",
      title: "OOP Deep Dive",
      topics: "Inheritance, polymorphism, dunder methods",
      youWillLearn: [
        "Model inheritance with super() and method overriding",
        "Use polymorphism so different classes share a common interface",
        "Implement __str__, __repr__, and comparison dunder methods",
        "Design a small class hierarchy for a domain problem",
      ],
    },
    {
      number: "4",
      title: "Error Handling",
      topics: "try/except/finally, custom exceptions",
      youWillLearn: [
        "Catch specific exceptions instead of bare except",
        "Use finally and else blocks for cleanup and success paths",
        "Define custom exception classes for domain errors",
        "Return clear error messages from failing operations",
      ],
    },
    {
      number: "5",
      title: "Working with Data",
      topics: "JSON, CSV, os/pathlib, environment variables",
      youWillLearn: [
        "Read and write JSON and CSV files with the standard library",
        "Navigate paths safely with pathlib instead of string paths",
        "Load secrets and config from environment variables",
        "Validate file inputs before processing batch data",
      ],
    },
    {
      number: "6",
      title: "APIs & HTTP",
      topics: "requests library, REST concepts, consuming APIs",
      youWillLearn: [
        "Send GET and POST requests with the requests library",
        "Parse JSON responses and handle HTTP status codes",
        "Understand REST resources, endpoints, and status semantics",
        "Build a small script that consumes a public API",
      ],
    },
    {
      number: "7",
      title: "Git & Collaboration",
      topics: "Branching, pull requests, .gitignore, README",
      youWillLearn: [
        "Create feature branches and merge with pull requests",
        "Write a README with setup, usage, and project overview",
        "Maintain a useful .gitignore for Python projects",
        "Review a peer PR for clarity, tests, and commit hygiene",
      ],
    },
    {
      number: "8",
      title: "Assessment",
      topics: "Practical project test — unlocks path selection",
      youWillLearn: [
        "Complete a timed practical covering functions, OOP, and files",
        "Consume an API and persist results as part of the assessment",
        "Demonstrate Git workflow with commits on a feature branch",
        "Receive a pass result that unlocks FastAPI or full-stack path selection",
      ],
      deliverable: "Practical assessment project — pass required for path selection",
    },
  ],
};

export const curriculum: CurriculumBlock[] = [
  pythonCore,
  {
    title: "Sub-path B1 — Frontend: React / Next.js (6 sessions)",
    sessions: [
      {
        number: "1",
        title: "JS/TS Foundations",
        topics: "Types, ES6+, async/await, Node basics",
        youWillLearn: [
          "Write TypeScript with basic types, interfaces, and unions",
          "Use ES6+ syntax: arrow functions, destructuring, spread",
          "Handle asynchronous code with async/await and fetch",
          "Run Node scripts and understand npm package basics",
        ],
      },
      {
        number: "2",
        title: "React Fundamentals",
        topics: "JSX, components, props, useState",
        youWillLearn: [
          "Build functional components with JSX and props",
          "Manage local UI state with the useState hook",
          "Compose small components into a page layout",
          "Debug React rendering with the browser devtools",
        ],
      },
      {
        number: "3",
        title: "React Patterns",
        topics: "useEffect, conditional rendering, lists & keys",
        youWillLearn: [
          "Run side effects with useEffect and dependency arrays",
          "Render lists with map() and stable key props",
          "Show loading, empty, and error UI states conditionally",
          "Lift state up when two components must share data",
        ],
      },
      {
        number: "4",
        title: "Next.js App Router",
        topics: "Pages, layouts, routing, server vs client components",
        youWillLearn: [
          "Create routes with the App Router file convention",
          "Share chrome across pages with layouts",
          "Choose server vs client components for data and interactivity",
          "Navigate with Link and usePathname for active states",
        ],
      },
      {
        number: "5",
        title: "Data Fetching",
        topics: "fetch, SWR, loading/error states, API routes",
        youWillLearn: [
          "Fetch data in server components and client hooks",
          "Use SWR or similar for client-side revalidation",
          "Expose lightweight API routes in Next.js when needed",
          "Handle loading and error boundaries in the UI",
        ],
      },
      {
        number: "6",
        title: "Styling & Deployment",
        topics: "Tailwind CSS basics, Vercel deployment",
        youWillLearn: [
          "Style components with Tailwind utility classes",
          "Build responsive layouts with flexbox and grid utilities",
          "Deploy the frontend to Vercel with environment variables",
          "Verify production build locally before shipping",
        ],
        deliverable: "Deployed Next.js frontend on Vercel",
      },
    ],
  },
  {
    title: "Sub-path B2 — Backend: Express.js or NestJS (6 sessions)",
    note: "Students choose Express (lighter, flexible) or NestJS (structured, enterprise-style) based on their goal.",
    sessions: [
      {
        number: "7",
        title: "Backend Setup",
        topics: "Express: server, middleware, routing · NestJS: CLI, modules, controllers",
        youWillLearn: [
          "Express: bootstrap an Express server with middleware and route handlers",
          "NestJS: generate a NestJS app with modules and controllers via CLI",
          "Structure routes for REST resources in either framework",
          "Connect the backend repo to Git with a clear folder layout",
        ],
      },
      {
        number: "8",
        title: "Database",
        topics: "Prisma + PostgreSQL (both tracks)",
        youWillLearn: [
          "Define a Prisma schema and generate the client",
          "Run migrations against a local PostgreSQL database",
          "Seed development data for frontend integration",
          "Use Prisma from Express handlers or NestJS services",
        ],
      },
      {
        number: "9",
        title: "CRUD API",
        topics: "Express: REST endpoints · NestJS: services, DTOs, validation pipes",
        youWillLearn: [
          "Express: implement CRUD with router modules and status codes",
          "NestJS: separate controllers, services, and DTOs with validation pipes",
          "Validate request bodies before touching the database",
          "Document endpoints for frontend consumers",
        ],
      },
      {
        number: "10",
        title: "Auth",
        topics: "Express: JWT + bcrypt · NestJS: Passport.js, Guards, JWT strategy",
        youWillLearn: [
          "Express: hash passwords with bcrypt and sign JWTs in login routes",
          "NestJS: configure Passport JWT strategy with Guards on protected routes",
          "Attach user identity to requests and enforce ownership rules",
          "Return consistent 401/403 responses for auth failures",
        ],
      },
      {
        number: "11",
        title: "Full-stack Integration",
        topics: "Connecting Next.js frontend to backend API",
        youWillLearn: [
          "Point the Next.js app at the backend base URL via env vars",
          "Send authenticated requests with Authorization headers",
          "Handle CORS and cookie/token storage choices for local dev",
          "End-to-end test login, CRUD, and protected pages",
        ],
      },
      {
        number: "12",
        title: "Deploy + Demo Day",
        topics: "Railway backend + Vercel frontend, live demo",
        youWillLearn: [
          "Deploy the API to Railway with production DATABASE_URL and JWT secrets",
          "Wire Vercel frontend env vars to the live backend URL",
          "Smoke-test the full stack in production before presenting",
          "Present architecture choices: Express vs NestJS, auth, and deploy split",
        ],
        deliverable: "Live full-stack Demo Day presentation",
      },
    ],
  },
];
