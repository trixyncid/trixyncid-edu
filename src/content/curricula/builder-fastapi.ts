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
    title: "Path A — FastAPI Backend (12 sessions)",
    sessions: [
      {
        number: "1",
        title: "FastAPI Intro",
        topics: "Project setup, uvicorn, first endpoint, auto docs",
        youWillLearn: [
          "Scaffold a FastAPI project with uvicorn as the ASGI server",
          "Define GET routes and inspect auto-generated OpenAPI docs at /docs",
          "Return JSON responses with proper status codes",
          "Run and hot-reload the API during local development",
        ],
      },
      {
        number: "2",
        title: "Path & Query Params",
        topics: "Route parameters, query strings, validation",
        youWillLearn: [
          "Declare path parameters with type hints and validation",
          "Accept optional and required query string parameters",
          "Return 404 and 422 responses for missing or invalid input",
          "Design RESTful URL patterns for resource lookup",
        ],
      },
      {
        number: "3",
        title: "Pydantic Models",
        topics: "Request/response schemas, data validation",
        youWillLearn: [
          "Define Pydantic models for request bodies and responses",
          "Leverage automatic validation and clear error messages",
          "Separate internal models from public API schemas where needed",
          "Document fields with types and examples for OpenAPI",
        ],
      },
      {
        number: "4",
        title: "Database with SQLAlchemy",
        topics: "PostgreSQL setup, models, sessions, migrations",
        youWillLearn: [
          "Connect FastAPI to PostgreSQL with SQLAlchemy models",
          "Manage database sessions with dependency injection patterns",
          "Run migrations to evolve schema safely",
          "Map ORM models to Pydantic schemas for API output",
        ],
      },
      {
        number: "5",
        title: "CRUD Operations",
        topics: "GET, POST, PUT, DELETE with DB",
        youWillLearn: [
          "Implement create, read, update, and delete endpoints",
          "Use HTTP verbs and status codes consistently (201, 204, 404)",
          "Handle duplicate keys and constraint violations gracefully",
          "Test CRUD flows end-to-end against a local database",
        ],
      },
      {
        number: "6",
        title: "Auth — JWT",
        topics: "User model, hashing, JWT access tokens",
        youWillLearn: [
          "Store users with hashed passwords (bcrypt or passlib)",
          "Issue JWT access tokens on successful login",
          "Configure token expiry and signing secrets via environment",
          "Never return password hashes in API responses",
        ],
      },
      {
        number: "7",
        title: "Auth — Protected Routes",
        topics: "Depends(), token verification, role basics",
        youWillLearn: [
          "Protect routes with Depends() and a token verification dependency",
          "Extract the current user from a valid JWT",
          "Restrict endpoints with simple role or ownership checks",
          "Return 401 and 403 with consistent error bodies",
        ],
      },
      {
        number: "8",
        title: "File Uploads & Background Tasks",
        topics: "UploadFile, BackgroundTasks",
        youWillLearn: [
          "Accept file uploads with UploadFile and validate size/type",
          "Store uploads locally or on object storage patterns",
          "Offload slow work with BackgroundTasks after responding",
          "Document upload endpoints in OpenAPI",
        ],
      },
      {
        number: "9",
        title: "Testing",
        topics: "pytest, TestClient, fixtures",
        youWillLearn: [
          "Write pytest tests using FastAPI's TestClient",
          "Use fixtures for database setup and authenticated clients",
          "Test happy paths and common failure cases for auth and CRUD",
          "Run tests in CI-friendly headless mode",
        ],
      },
      {
        number: "10",
        title: "Deployment",
        topics: "Railway or Render, environment config, CI basics",
        youWillLearn: [
          "Deploy the API to Railway or Render with production env vars",
          "Configure DATABASE_URL and JWT secrets in the host dashboard",
          "Run migrations against the production database safely",
          "Set up a basic CI check that runs pytest on push",
        ],
      },
      {
        number: "11",
        title: "Capstone Workshop",
        topics: "Guided build — real REST API project",
        youWillLearn: [
          "Scope a capstone API with auth, CRUD, and at least one extra feature",
          "Implement features incrementally with Git branches",
          "Polish OpenAPI docs and README for portfolio use",
          "Incorporate instructor feedback before Demo Day",
        ],
        deliverable: "Deployed REST API capstone project",
      },
      {
        number: "12",
        title: "Demo Day",
        topics: "Live presentation, code walkthrough, feedback",
        youWillLearn: [
          "Present API architecture: routes, auth, database, deployment",
          "Walk through live requests in /docs or a client",
          "Explain trade-offs in schema and security choices",
          "Collect feedback for post-cohort portfolio polish",
        ],
        deliverable: "Live Demo Day API presentation",
      },
    ],
  },
];
