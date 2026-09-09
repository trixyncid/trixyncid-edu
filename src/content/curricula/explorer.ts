import type { CurriculumBlock } from "./types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Phase 1 — Python Foundations",
    sessions: [
      {
        number: "1",
        title: "Setup & First Scripts",
        topics: "VS Code or Thonny, variables, basic I/O",
        youWillLearn: [
          "Install and open a Python editor and run scripts locally",
          "Declare variables and inspect types with type()",
          "Format output with f-strings and basic string methods",
          "Follow a consistent file and naming convention for projects",
        ],
      },
      {
        number: "2",
        title: "Types & Operators",
        topics: "int, float, str, bool, arithmetic and comparison",
        youWillLearn: [
          "Convert between strings, integers, and floats safely",
          "Apply arithmetic, comparison, and logical operators",
          "Understand truthy and falsy values in conditions",
          "Build a small calculator or unit converter",
        ],
      },
      {
        number: "3",
        title: "Input, Output & Formatting",
        topics: "input(), string formatting, basic validation",
        youWillLearn: [
          "Read and validate user input before using it in logic",
          "Format numbers and text for readable console output",
          "Handle empty or invalid input with simple checks",
          "Combine input and output in a structured menu program",
        ],
      },
    ],
  },
  {
    title: "Phase 2 — Control Flow",
    sessions: [
      {
        number: "4",
        title: "Conditionals",
        topics: "if/elif/else, nested conditions, boolean logic",
        youWillLearn: [
          "Write multi-branch decisions with if, elif, and else",
          "Combine conditions with and, or, and not",
          "Nest conditions to model real-world rules",
          "Refactor messy if-chains into clearer structure",
        ],
      },
      {
        number: "5",
        title: "For & While Loops",
        topics: "for, while, range(), loop control",
        youWillLearn: [
          "Choose between for and while loops for a given task",
          "Use range() and enumerate() in iteration",
          "Control loops with break and continue",
          "Detect and fix off-by-one and infinite loop bugs",
        ],
      },
      {
        number: "6",
        title: "Nested Logic & Patterns",
        topics: "Loops inside conditions, pattern exercises",
        youWillLearn: [
          "Combine loops and conditionals for table and pattern output",
          "Solve classic logic exercises (FizzBuzz, primes intro)",
          "Trace nested logic on paper before coding",
          "Write functions that encapsulate repeated loop patterns",
        ],
      },
    ],
  },
  {
    title: "Phase 3 — Data Structures",
    sessions: [
      {
        number: "7",
        title: "Lists & Tuples",
        topics: "Indexing, slicing, mutability, tuples",
        youWillLearn: [
          "Create, slice, and modify lists with common methods",
          "Understand when tuples are preferable to lists",
          "Sort and search lists with sorted(), in, and index()",
          "Process a list of records in a small data program",
        ],
      },
      {
        number: "8",
        title: "Dictionaries",
        topics: "Key-value pairs, dict methods, nesting",
        youWillLearn: [
          "Store and retrieve data with dictionary keys",
          "Loop over keys, values, and items with .items()",
          "Nest dictionaries and lists for structured data",
          "Build a lookup table or simple contact book",
        ],
      },
      {
        number: "9",
        title: "Sets & Choosing Structures",
        topics: "Sets, uniqueness, picking the right collection",
        youWillLearn: [
          "Use sets to remove duplicates and test membership",
          "Compare lists, tuples, dicts, and sets for a given problem",
          "Combine structures in one program (e.g. list of dicts)",
          "Refactor data storage for clarity and performance basics",
        ],
      },
    ],
  },
  {
    title: "Phase 4 — Functions & Scope",
    sessions: [
      {
        number: "10",
        title: "Defining Functions",
        topics: "def, parameters, return, docstrings",
        youWillLearn: [
          "Write functions with required and optional parameters",
          "Return multiple outcomes and use return early for clarity",
          "Document functions with short docstrings",
          "Break a monolithic script into named functions",
        ],
      },
      {
        number: "11",
        title: "Scope & Defaults",
        topics: "Local vs global scope, default arguments",
        youWillLearn: [
          "Predict which variables are visible inside a function",
          "Avoid accidental global mutation when refactoring",
          "Use default parameter values appropriately",
          "Debug scope-related NameError and UnboundLocalError",
        ],
      },
      {
        number: "12",
        title: "Lambda & Functional Patterns",
        topics: "lambda basics, map/filter intro, comprehensions",
        youWillLearn: [
          "Write short lambda functions for simple transforms",
          "Use list comprehensions for concise list building",
          "Apply map() and filter() on small datasets",
          "Choose readable loops vs comprehensions for clarity",
        ],
      },
    ],
  },
  {
    title: "Phase 5 — OOP Basics",
    sessions: [
      {
        number: "13",
        title: "Classes & Objects",
        topics: "class, attributes, methods, instances",
        youWillLearn: [
          "Define a class and create instances with attributes",
          "Add methods that operate on instance data",
          "Model a real-world entity (e.g. Student, Book) as a class",
          "Compare procedural vs object-oriented structure",
        ],
      },
      {
        number: "14",
        title: "__init__ & Instance Behavior",
        topics: "__init__, self, encapsulation basics",
        youWillLearn: [
          "Initialize object state in __init__ with parameters",
          "Use self consistently in methods and constructors",
          "Validate inputs when creating new instances",
          "Build a small class hierarchy for a game or catalog",
        ],
      },
      {
        number: "15",
        title: "OOP in Practice",
        topics: "Multiple classes, collaboration, design sketch",
        youWillLearn: [
          "Design two or more classes that work together",
          "Pass objects between methods instead of loose variables",
          "Sketch class relationships before coding",
          "Refactor procedural code into classes where it helps",
        ],
      },
    ],
  },
  {
    title: "Phase 6 — File I/O & Modules",
    sessions: [
      {
        number: "16",
        title: "Reading & Writing Files",
        topics: "open(), read/write, with statement, paths",
        youWillLearn: [
          "Read text files line by line and process content",
          "Write output to files using with open(...) as f",
          "Handle missing files and basic IO errors",
          "Persist program data between runs",
        ],
      },
      {
        number: "17",
        title: "Modules & Standard Library",
        topics: "import, from...import, json, datetime intro",
        youWillLearn: [
          "Organize code across multiple .py files with import",
          "Use json to load and save structured data",
          "Pull in standard library modules (datetime, random, os)",
          "Structure a small multi-file project folder",
        ],
      },
      {
        number: "18",
        title: "Git Basics",
        topics: "git init, commit, status, simple workflow",
        youWillLearn: [
          "Initialize a repo and make commits with clear messages",
          "Check status and diff before committing",
          "Connect a local repo to GitHub and push",
          "Use .gitignore for Python projects",
        ],
      },
    ],
  },
  {
    title: "Phase 7 — Capstone Project",
    sessions: [
      {
        number: "19",
        title: "Capstone Build",
        topics: "Project scoping, implementation, README draft",
        youWillLearn: [
          "Scope a student-chosen project with clear milestones",
          "Apply OOP, files, and modules in one cohesive program",
          "Write a README with setup steps and feature list",
          "Iterate from instructor feedback mid-build",
        ],
        deliverable: "Capstone project with README draft",
      },
      {
        number: "20",
        title: "Demo Day",
        topics: "Presentation, code review, reflection",
        youWillLearn: [
          "Demo a complete Python project with live run-through",
          "Explain architecture: classes, files, and main flow",
          "Receive peer and instructor feedback on code quality",
          "Reflect on skills gained and next steps toward Builder tier",
        ],
        deliverable: "Capstone Demo Day presentation",
      },
    ],
  },
];
