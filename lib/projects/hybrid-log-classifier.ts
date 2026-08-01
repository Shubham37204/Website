import { Project } from "../types";

export const hybridLogClassifier: Project = {
  slug: "hybrid-log-classifier",
  title: "Hybrid Log Classifier",
  tagline: "Three-stage log classification system with LLM fallback",
  description: "Built a hybrid log classifier that routes log events through deterministic regex rules, TF-IDF logistic regression, and Groq LLM fallback for ambiguous cases.",
  category: "aiml",
  isFlagship: false,
  problem: "Production logs are noisy and high volume — static rules miss edge cases, while LLM-only classification is too expensive and slow for bulk volume.",
  details: [
    "Designed a tiered classification pipeline using Regex first, TF-IDF + Logistic Regression second, and Groq LLM fallback only when confidence is low.",
    "Built FastAPI backend routes and a Next.js interface for submitting logs and reviewing classifier confidence.",
    "Separated deterministic, statistical, and generative stages to manage cost, latency, and explainability."
  ],
  tech: ["FastAPI", "Next.js", "Python", "Scikit-learn", "Groq AI", "TypeScript"],
  tags: ["Hybrid AI", "Log Classification", "FastAPI", "ML Pipeline"],
  keywords: ["Hybrid Log Classifier", "FastAPI", "Python", "Scikit-learn", "Groq", "Log Classification", "Regex", "Logistic Regression", "LLM Fallback"],
  impact: "Balances deterministic speed, ML coverage, and LLM flexibility for log triage",
  github: "https://github.com/Shubham37204/Hybrid-Log-Classifier",
  accent: "#ef4444",
  date: "Jun 2026"
};
