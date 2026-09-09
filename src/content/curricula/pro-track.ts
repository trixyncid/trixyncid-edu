import type { CurriculumBlock } from "./types";

export const curriculum: CurriculumBlock[] = [
  {
    title: "Phase 1 — Developer Identity",
    sessions: [
      {
        number: "1",
        title: "GitHub Profile & Portfolio Hygiene",
        topics: "Profile README, pinned repos, contribution graph",
        youWillLearn: [
          "Write a profile README that states your stack and goals",
          "Pin 2–4 repos that best represent your work",
          "Clean up commit history visibility and repo descriptions",
          "Use consistent naming and topics on public repositories",
        ],
      },
      {
        number: "2",
        title: "LinkedIn & Personal Branding",
        topics: "Headline, about, featured section, community engagement",
        youWillLearn: [
          "Craft a headline and about section aimed at junior dev roles",
          "Add featured links to live projects and GitHub",
          "Plan what to post and how to engage in local tech communities",
          "Align GitHub and LinkedIn so recruiters see the same story",
        ],
        deliverable: "Polished GitHub profile and live LinkedIn profile",
      },
    ],
  },
  {
    title: "Phase 2 — Portfolio Project Sprint",
    sessions: [
      {
        number: "3",
        title: "Project Selection & Scoping",
        topics: "Pick 1–2 projects, deploy requirement, stack choice",
        youWillLearn: [
          "Choose a FastAPI or React/Next.js project aligned with your path",
          "Define MVP scope with deployable milestones for the sprint",
          "Set up repo, README skeleton, and issue or task list",
          "Confirm hosting choice: Railway, Render, or Vercel",
        ],
      },
      {
        number: "4",
        title: "Build Sprint I",
        topics: "Core features, instructor code review",
        youWillLearn: [
          "Implement core features with daily commit discipline",
          "Request and apply instructor feedback on structure and clarity",
          "Keep README updated with setup steps as you build",
          "Deploy an early version even if incomplete",
        ],
      },
      {
        number: "5",
        title: "Build Sprint II & Polish",
        topics: "README, live demo, stack explanation",
        youWillLearn: [
          "Finish remaining features and fix priority bugs",
          "Write README sections: overview, stack, setup, live demo link",
          "Record or document a short demo script for interviews",
          "Ensure the project is publicly accessible and stable",
        ],
        deliverable: "1–2 deployed portfolio projects with README and live demo",
      },
    ],
  },
  {
    title: "Phase 3 — Resume & Application Strategy",
    sessions: [
      {
        number: "6",
        title: "Tech Resume Structure",
        topics: "What to include, quantifying impact, one-page format",
        youWillLearn: [
          "Structure sections: summary, skills, projects, education, experience",
          "Quantify impact where possible (users, speed, scope)",
          "Cut fluff and align bullets with junior dev job descriptions",
          "Tailor project bullets to technologies employers ask for",
        ],
      },
      {
        number: "7",
        title: "ATS & Formatting",
        topics: "ATS-friendly layout, keywords, PDF export",
        youWillLearn: [
          "Format a resume that parses cleanly in ATS systems",
          "Mirror relevant keywords from target job postings",
          "Avoid tables and graphics that break automated parsing",
          "Export a clean PDF and verify readability on mobile",
        ],
      },
      {
        number: "8",
        title: "Job Boards & Follow-up",
        topics: "Glints, Kalibrr, LinkedIn, JobStreet, Tech in Asia",
        youWillLearn: [
          "Search and filter roles on Indonesia-focused job platforms",
          "Track applications in a simple spreadsheet or tool",
          "Write short tailored cover notes where platforms allow",
          "Follow up professionally after applying or interviewing",
        ],
        deliverable: "Finalized one-page tech resume",
      },
    ],
  },
  {
    title: "Phase 4 — Interview Preparation",
    sessions: [
      {
        number: "9",
        title: "Technical Interview Patterns",
        topics: "Arrays, strings, hash maps, basic recursion",
        youWillLearn: [
          "Solve focused problems on arrays and strings without grind volume",
          "Use hash maps to trade space for time on lookup problems",
          "Trace simple recursive solutions and identify base cases",
          "Explain time and space complexity in plain language",
        ],
      },
      {
        number: "10",
        title: "Mock Technical Interviews",
        topics: "Live coding, take-home expectations, peer practice",
        youWillLearn: [
          "Practice thinking aloud while writing code under time pressure",
          "Handle hints and course corrections from an interviewer",
          "Review take-home project expectations common in Indonesia market",
          "Participate in peer mock sessions with structured feedback",
        ],
      },
      {
        number: "11",
        title: "Behavioral Interviews",
        topics: "STAR method, bilingual Q&A, common tech questions",
        youWillLearn: [
          "Answer behavioral questions with the STAR format",
          "Prepare stories for teamwork, conflict, and learning from failure",
          "Practice responses in both Indonesian and English",
          "Record a mock interview and revise weak answers",
        ],
        deliverable: "Recorded mock interview reviewed and improved",
      },
    ],
  },
  {
    title: "Phase 5 — Soft Skills for Tech",
    sessions: [
      {
        number: "12",
        title: "Communication & Stakeholders",
        topics: "Explaining tech to non-technical audiences",
        youWillLearn: [
          "Explain a feature or bug without jargon to a non-dev listener",
          "Use diagrams or analogies for architecture at a high level",
          "Write clear status updates for mixed technical audiences",
          "Practice active listening in cross-functional discussions",
        ],
      },
      {
        number: "13",
        title: "Agile Workflow & Written English",
        topics: "Standups, tickets, PRs, Slack/email, docs",
        youWillLearn: [
          "Run a concise standup: yesterday, today, blockers",
          "Break work into tickets and link PRs to issues",
          "Write PR descriptions and commit messages in clear English",
          "Follow async etiquette on Slack and email in remote teams",
        ],
      },
    ],
  },
  {
    title: "Phase 6 — Industry Exposure",
    sessions: [
      {
        number: "14",
        title: "Guest Practitioner Session",
        topics: "Local Medan or remote Indonesian dev perspectives",
        youWillLearn: [
          "Hear how practitioners hire and grow junior developers locally",
          "Ask questions about day-to-day work and career paths",
          "Connect session themes to your portfolio and resume",
          "Note actionable advice for your job search this month",
        ],
      },
      {
        number: "15",
        title: "Code Review & Production Workflow",
        topics: "Live review, tickets → branch → PR → deploy",
        youWillLearn: [
          "Submit real code for live instructor or peer review",
          "Apply review feedback with focused follow-up commits",
          "Walk through ticket → branch → PR → CI → deploy on a sample repo",
          "Identify quality gates you should adopt in your own projects",
        ],
      },
    ],
  },
  {
    title: "Phase 7 — Demo Day + Graduation",
    sessions: [
      {
        number: "16",
        title: "Demo Day & Graduation",
        topics: "Portfolio presentation, LinkedIn post, certificate, alumni",
        youWillLearn: [
          "Present a portfolio project in 5–10 minutes with live demo",
          "Publish or draft a LinkedIn post about graduation and projects",
          "Receive Trixync certificate of completion",
          "Join the alumni network and understand ongoing resources",
        ],
        deliverable: "Demo Day presentation, LinkedIn post, Trixync certificate",
      },
    ],
  },
];
