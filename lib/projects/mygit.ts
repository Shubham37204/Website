import { Project } from "../types";

export const mygit: Project = {
  slug: "mygit",
  title: "MyGit",
  tagline: "Git clone built from scratch in Python",
  description: "Implemented core Git version-control internals from scratch in Python, including content-addressed object storage, branching, tree diffing, and 3-way merge logic.",
  category: "systems",
  isFlagship: false,
  problem: "Git is often treated as a black box; rebuilding its primitives forces deep understanding of content-addressed storage and DAG version graph algorithms.",
  details: [
    "Implemented SHA-1 object storage (blobs, trees, commits) without external VCS libraries.",
    "Built CLI commands for init, add, commit, branch, checkout, and diff.",
    "Added 3-way merge algorithms and conflict detection mechanics."
  ],
  tech: ["Python", "SHA1", "CLI", "Version Control", "Algorithms"],
  tags: ["Systems", "From Scratch", "CLI Tool", "Git Internals"],
  keywords: ["MyGit", "Git", "Python", "Systems", "CLI", "Version Control", "SHA1", "Algorithms"],
  impact: "Demonstrates low-level systems depth and computer science fundamentals beyond framework usage",
  github: "https://github.com/Shubham37204/MyGit",
  accent: "#f97316",
  date: "May 2026"
};
