import { Project } from "../types";

export const recallai: Project = {
  slug: "recallai",
  title: "RecallAI",
  tagline: "Meeting Intelligence & Vector Search Pipeline",
  description: "Developed a meeting intelligence tool that ingests recorded meeting audio to produce transcripts, structured summaries, and action-item tracking with vector RAG search.",
  category: "aiml",
  isFlagship: true,
  problem: "Reviewing hours of meeting recordings to retrieve specific key decisions or action items is inefficient without searchable, structured semantic records.",
  details: [
    "Built a robust transcript extraction pipeline utilizing Speech-to-Text APIs for audio processing.",
    "Integrated vector embeddings with a vector store for semantic querying across transcription chunks.",
    "Shipped an automated pipeline to synthesize structured summaries and task items.",
    "Designed clean backend API routes using FastAPI with queue-based processing."
  ],
  tech: ["Python", "FastAPI", "Vector DB", "LangChain", "OpenAI API", "Celery", "Docker"],
  tags: ["Speech-to-Text", "Vector Search", "LLM Pipeline", "API Backend"],
  keywords: ["RecallAI", "FastAPI", "Python", "Vector Search", "LangChain", "OpenAI", "RAG", "Speech-to-Text", "Celery", "Docker", "Meeting Intelligence"],
  impact: "Searchable meeting intelligence with vector RAG and automated task extraction",
  github: "https://github.com/Shubham37204/RecallAI",
  accent: "#00d9ff",
  date: "Mar 2026",
  caseStudy: {
    overview: "RecallAI converts unstructured meeting audio into structured, searchable intelligence. Users can search past discussions by concept ('What did we decide about database migrations?') and immediately jump to exact transcript timestamps and action items.",
    problem: "Remote teams generate dozens of meeting hours weekly. Traditional text search fails when queries use different wording than spoken transcripts.",
    solution: "RecallAI processes audio into chunked transcripts, generates dense vector embeddings, and stores them in a vector database for semantic similarity retrieval and LLM synthesis.",
    architecture: {
      diagramSteps: [
        "Audio Upload",
        "FastAPI Queue",
        "Speech-to-Text Engine",
        "Vector Embeddings",
        "RAG Retrieval & LLM Synthesis"
      ],
      description: "Audio uploads trigger asynchronous Celery workers. Audio is transcribed, split into timestamped semantic chunks, embedded into vector stores, and made queryable via RAG pipelines."
    },
    highlights: [
      "Speech-to-Text Ingestion Pipeline",
      "FastAPI Asynchronous Workers",
      "Vector Embedding & RAG Storage",
      "Semantic Hybrid Querying",
      "Action-Item Extraction",
      "Dockerized Service Architecture"
    ],
    engineeringDecisions: [
      {
        decision: "Asynchronous Worker Queue for Audio Processing",
        rationale: "Audio transcription is computationally heavy. Offloading ingestion to Celery background workers keeps FastAPI API endpoints responsive."
      },
      {
        decision: "Timestamped Overlapping Text Chunks",
        rationale: "Chunking transcripts with 15% overlap ensures context isn't lost when speaker statements cross chunk boundaries."
      }
    ],
    tradeoffs: [
      {
        chosen: "Dense Vector RAG over Keyword Indexing",
        alternative: "Standard Full-Text Search (Elasticsearch)",
        reason: "Vector RAG captures semantic intent (e.g. searching 'budget limits' matches 'cost caps'), which is essential for informal spoken audio."
      }
    ],
    results: [
      { label: "Audio Processing", value: "Async Queue", detail: "Non-blocking API response" },
      { label: "Search Paradigm", value: "Vector RAG", detail: "Semantic similarity query matching" },
      { label: "Extraction", value: "Structured JSON", detail: "Transcripts, summaries, action items" }
    ],
    lessonsLearned: [
      "Speaker diarization accuracy relies heavily on clean audio chunk boundaries.",
      "Structuring LLM prompts with JSON schema enforcement prevents hallucinated action items."
    ]
  }
};
