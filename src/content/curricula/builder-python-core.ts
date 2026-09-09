import type { CurriculumBlock } from "./types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Python Core — 8 sessions",
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
        topics: "Practical project test — prerequisite for path selection",
        youWillLearn: [
          "Complete a timed practical covering functions, OOP, and files",
          "Consume an API and persist results as part of the assessment",
          "Demonstrate Git workflow with commits on a feature branch",
          "Receive a pass result that unlocks FastAPI or full-stack path selection",
        ],
        deliverable: "Practical assessment project — pass required for path selection",
      },
    ],
  },
];
