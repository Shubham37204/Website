import { ExperienceItem } from "./types";

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "mca-bit",
    year: "2024 - Present",
    title: "Master of Computer Applications (MCA)",
    subtitle: "Birla Institute of Technology, Mesra",
    category: "education",
    description: "Deepening theoretical and applied computer science foundation across distributed systems, advanced algorithm paradigms, and machine learning architectures.",
    highlights: [
      "Core focus on system design, database internals, and network programming.",
      "Building production-grade full-stack tools and NLP pipelines alongside coursework."
    ],
    accentColor: "#087ea4"
  },
  {
    id: "collabdocs-build",
    year: "Apr 2026",
    title: "Built CollabDocs (Flagship Real-time Platform)",
    subtitle: "CRDT-based Collaborative Editor + Streaming AI",
    category: "project",
    description: "Architected a zero-latency collaborative document editor with Y.js CRDT sync, Liveblocks WebSocket presence, Convex serverless state, and inline Llama-3 AI streaming.",
    highlights: [
      "Solved simultaneous edit collision with conflict-free operation merge semantics.",
      "Integrated Groq AI streaming API with 6 inline writing assistant tools."
    ],
    techOrLink: {
      label: "View CollabDocs Case Study",
      url: "/projects/collabdocs"
    },
    accentColor: "#f59e0b"
  },
  {
    id: "skimlit-build",
    year: "Feb 2026",
    title: "Built SkimLit (Flagship Medical NLP Pipeline)",
    subtitle: "Tribrid Deep Learning Model for PubMed Abstracts",
    category: "project",
    description: "Designed a multi-input neural network classifying medical abstract sentences into 5 sequential roles (Background, Objective, Method, Result, Conclusion).",
    highlights: [
      "Combined USE sentence embeddings, character BiLSTM, and positional line features.",
      "Shipped interactive Streamlit self-training dashboard."
    ],
    techOrLink: {
      label: "View SkimLit Case Study",
      url: "/projects/skimlit"
    },
    accentColor: "#a78bfa"
  },
  {
    id: "recallai-build",
    year: "Mar 2026",
    title: "Built RecallAI (Flagship Speech-to-Text & Vector RAG)",
    subtitle: "Meeting Intelligence & Vector Search Pipeline",
    category: "project",
    description: "Developed an automated audio transcription pipeline storing transcript chunks into vector stores with FastAPI queue processing.",
    highlights: [
      "Engineered semantic search and structured meeting summary synthesis.",
      "Utilized async processing queues for audio ingestion."
    ],
    techOrLink: {
      label: "View RecallAI Case Study",
      url: "/projects/recallai"
    },
    accentColor: "#00d9ff"
  },
  {
    id: "google-certs",
    year: "Mar - May 2026",
    title: "Google IT Automation with Python Specialization",
    subtitle: "Google Coursera Certification Series",
    category: "certification",
    description: "Completed 6 professional Google courses covering Python OS interaction, Git/GitHub internals, cloud configuration, and production troubleshooting.",
    highlights: [
      "Verified Specialization ID: 52WXH2HUGCJB",
      "Mastered automated system administration and debugging workflows."
    ],
    techOrLink: {
      label: "View Certificates",
      url: "/credentials"
    },
    accentColor: "#22c55e"
  },
  {
    id: "bca-bit",
    year: "Oct 2021 - May 2024",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Birla Institute of Technology, Mesra",
    category: "education",
    description: "Graduated with 8.0 CGPA. Built foundational knowledge in OOP, software development, data structures, and mathematics.",
    highlights: [
      "Graduated with 8.0 CGPA.",
      "Participated in campus tech hackathons and competitive programming."
    ],
    accentColor: "#ec4899"
  }
];
