import { Project } from "../types";

export const prReviewAgent: Project = {
  slug: "pr-review-agent",
  title: "PR Review Agent",
  tagline: "AI-powered pull request review assistant",
  description: "Built a PR review agent that analyzes GitHub pull request URLs and returns senior-engineer-level review feedback focused on security, performance, and clean code.",
  category: "devtools",
  isFlagship: false,
  problem: "Manual code reviews can miss architectural risks and security flaws during fast engineering iteration.",
  details: [
    "Created an automated review workflow that parses PR diffs and generates structured feedback.",
    "Categorized findings around scalability, security, code maintainability, and testing gaps.",
    "Optimized prompt structures for fast review turnarounds."
  ],
  tech: ["TypeScript", "Next.js", "LLM", "GitHub API", "Code Review"],
  tags: ["Developer Tooling", "AI Review", "GitHub Workflow", "Code Quality"],
  keywords: ["PR Review Agent", "GitHub", "TypeScript", "Next.js", "Code Review", "LLM", "DevTools"],
  impact: "Automates initial PR code reviews with actionable security and architectural feedback",
  github: "https://github.com/Shubham37204/Pr-Review-Agent",
  accent: "#22c55e",
  date: "May 2026"
};
