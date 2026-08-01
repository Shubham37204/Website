import { Project } from "../types";

export const studyAssistant: Project = {
  slug: "study-assistant",
  title: "Study Assistant",
  tagline: "Agentic RAG study assistant with hybrid search",
  description: "Created an AI study assistant utilizing retrieval, hybrid vector + keyword search, multi-agent orchestration, and grounded cited answers.",
  category: "aiml",
  isFlagship: false,
  problem: "Students need verifiable answers grounded strictly in source materials rather than generic LLM responses that hallucinate.",
  details: [
    "Implemented an agentic RAG pipeline with hybrid retrieval and cited response generation.",
    "Used LangGraph orchestration patterns to separate retrieval, reasoning, and answer synthesis.",
    "Designed grounded outputs with explicit source material citation tags."
  ],
  tech: ["Python", "LangGraph", "RAG", "Hybrid Search", "LLM", "Vector Search"],
  tags: ["Agentic RAG", "Hybrid Search", "Citations", "AI Assistant"],
  keywords: ["Study Assistant", "LangGraph", "RAG", "Python", "Hybrid Search", "Vector Search", "Citations", "LLM"],
  impact: "Turns study material into cited, searchable, context-aware answers",
  github: "https://github.com/Shubham37204/Study-Assistant",
  accent: "#8b5cf6",
  date: "Jun 2026"
};
