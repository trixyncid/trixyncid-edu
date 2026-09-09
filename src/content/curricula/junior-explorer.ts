import type { CurriculumBlock } from "./types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Phase 1 — Hello, Computer!",
    sessions: [
      {
        number: "1",
        title: "Your First Python Program",
        topics: "Replit setup, print(), running code",
        youWillLearn: [
          "Open a Replit project and run Python in the browser",
          "Use print() to display text and numbers on screen",
          "Fix simple syntax errors from the error message",
          "Save and re-run a program after making changes",
        ],
      },
      {
        number: "2",
        title: "Variables & Basic Types",
        topics: "Variables, strings, integers, simple math",
        youWillLearn: [
          "Create variables to store names, numbers, and text",
          "Combine strings with + and repeat them with *",
          "Do basic arithmetic with +, -, *, and /",
          "Choose clear variable names that describe the data",
        ],
      },
      {
        number: "3",
        title: "Input & Decisions",
        topics: "input(), if/else, comparison operators",
        youWillLearn: [
          "Read user input with input() and store it in a variable",
          "Compare values with ==, !=, <, and >",
          "Branch program flow with if, elif, and else",
          "Build a small interactive program that responds to input",
        ],
      },
    ],
  },
  {
    title: "Phase 2 — Loops & Logic",
    sessions: [
      {
        number: "4",
        title: "For Loops",
        topics: "for loops, range(), iterating sequences",
        youWillLearn: [
          "Repeat actions with for loops over a range of numbers",
          "Use range() to control how many times a loop runs",
          "Loop through strings and lists character by character",
          "Combine loops with print() to draw simple patterns",
        ],
      },
      {
        number: "5",
        title: "While Loops & Break",
        topics: "while loops, break, loop conditions",
        youWillLearn: [
          "Run code repeatedly with while loops and a condition",
          "Stop a loop early with break when a goal is reached",
          "Avoid infinite loops by updating the condition each pass",
          "Build a guessing game that keeps asking until correct",
        ],
      },
      {
        number: "6",
        title: "FizzBuzz & Logic Practice",
        topics: "Combined conditions, modulo, classic FizzBuzz",
        youWillLearn: [
          "Use the modulo operator (%) to test divisibility",
          "Combine if/elif with loops for multi-rule programs",
          "Solve the FizzBuzz problem step by step",
          "Read someone else's loop code and explain what it does",
        ],
      },
    ],
  },
  {
    title: "Phase 3 — Organising Things",
    sessions: [
      {
        number: "7",
        title: "Lists",
        topics: "Creating lists, indexing, append, len()",
        youWillLearn: [
          "Store multiple values in a list and access items by index",
          "Add items with append() and find list length with len()",
          "Loop through a list to process each element",
          "Build a simple to-do or score list program",
        ],
      },
      {
        number: "8",
        title: "Functions",
        topics: "def, parameters, calling functions",
        youWillLearn: [
          "Define reusable blocks of code with def and a name",
          "Pass values into functions through parameters",
          "Call functions from main code and from inside loops",
          "Split a long program into smaller, readable functions",
        ],
      },
      {
        number: "9",
        title: "Return Values",
        topics: "return, using function output, composition",
        youWillLearn: [
          "Send a result back from a function with return",
          "Store a function's return value in a variable",
          "Chain small functions to solve a bigger problem",
          "Refactor repeated code into one function with a return",
        ],
      },
    ],
  },
  {
    title: "Phase 4 — Fun Projects",
    sessions: [
      {
        number: "10",
        title: "Mad Libs",
        topics: "String templates, input collection, story output",
        youWillLearn: [
          "Collect several words from the user with input()",
          "Insert user words into a story template with f-strings or +",
          "Organise prompts and answers in lists or variables",
          "Finish and share a playable Mad Libs story",
        ],
      },
      {
        number: "11",
        title: "Quiz Game",
        topics: "Questions, scoring, loops, conditions",
        youWillLearn: [
          "Store quiz questions and correct answers in lists",
          "Track a running score as the player answers",
          "Give feedback for right and wrong answers",
          "Loop through all questions until the quiz ends",
        ],
      },
      {
        number: "12",
        title: "Rock Paper Scissors",
        topics: "Random choice, game loop, win logic",
        youWillLearn: [
          "Import random and pick the computer's move",
          "Compare player and computer choices with if/elif",
          "Run multiple rounds in a loop until the player quits",
          "Display who won each round and the final result",
        ],
      },
      {
        number: "13",
        title: "Turtle Drawing",
        topics: "turtle module, movement, shapes, colors",
        youWillLearn: [
          "Move a turtle with forward(), backward(), left(), and right()",
          "Change pen color and draw simple shapes and patterns",
          "Use loops to repeat drawing steps for stars or spirals",
          "Create an original drawing to show in class",
        ],
      },
    ],
  },
  {
    title: "Phase 5 — Showcase",
    sessions: [
      {
        number: "14",
        title: "Debugging Basics",
        topics: "Error messages, print debugging, fixing bugs",
        youWillLearn: [
          "Read Python error messages and find the line that failed",
          "Use print() to inspect variable values while debugging",
          "Fix common mistakes: typos, wrong indentation, off-by-one",
          "Practice fixing a broken program with instructor guidance",
        ],
      },
      {
        number: "15",
        title: "Final Project Workshop",
        topics: "Project planning, building, polish",
        youWillLearn: [
          "Choose a mini project topic and list what it must do",
          "Build the core features using variables, loops, and functions",
          "Test the project and fix bugs before Demo Day",
          "Write a short explanation of how your program works",
        ],
        deliverable: "Working mini project ready to present",
      },
      {
        number: "16",
        title: "Demo Day",
        topics: "Presentation, code walkthrough, celebration",
        youWillLearn: [
          "Present your project to the class in a few minutes",
          "Walk through key parts of your code on screen",
          "Answer simple questions about how your program works",
          "Celebrate completed work and preview what comes next in coding",
        ],
        deliverable: "Live Demo Day presentation",
      },
    ],
  },
];
