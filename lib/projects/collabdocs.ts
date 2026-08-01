import { Project } from "../types";

export const collabdocs: Project = {
  slug: "collabdocs",
  title: "CollabDocs",
  tagline: "Real-time Collaborative Editor with Streaming AI Assistant",
  description: "Architected a real-time collaborative document editor featuring conflict-free editing, live cursors, point-in-time version history, and an integrated Llama-3 inline writing assistant.",
  category: "fullstack",
  isFlagship: true,
  problem: "Simultaneous text edits across multiple active users cause document state divergence and edit collisions without conflict-free resolution semantics.",
  details: [
    "Engineered multi-user synchronization with Y.js CRDT and Liveblocks WebSockets for zero-latency cursor tracking.",
    "Integrated Groq AI (Llama 3) streaming API to power an inline editor with 6 preset writing assistant actions.",
    "Built a reactive serverless backend using Convex zero-polling subscriptions and Clerk JWT authentication.",
    "Implemented production features: automated version history with point-in-time restore, slash-command menus, and document export."
  ],
  tech: ["Next.js", "TypeScript", "Convex", "Liveblocks", "Y.js", "Clerk", "Groq AI", "Tailwind CSS"],
  tags: ["Real-time Collaboration", "CRDT", "Streaming AI", "Serverless Backend"],
  keywords: ["CollabDocs", "CRDT", "Y.js", "Liveblocks", "Convex", "Llama 3", "Groq", "WebSockets", "Next.js", "TypeScript", "Clerk", "Real-time"],
  impact: "Conflict-free multi-user editing with real-time AI assistance",
  github: "https://github.com/Shubham37204/CollabDocs",
  accent: "#f59e0b",
  date: "Apr 2026",
  caseStudy: {
    overview: "CollabDocs is an enterprise-grade collaborative editor designed for teams needing simultaneous doc editing combined with streaming AI generation. Built with Next.js 14 and Y.js CRDTs, it maintains client-side consistency even over unreliable networks.",
    problem: "Traditional HTTP REST backends fail during simultaneous editing because concurrent POST requests overwrite sibling changes. WebSockets alone don't solve operation ordering without custom diff-merge algorithms.",
    solution: "By backing the document data model with Y.js CRDT (Conflict-free Replicated Data Types) synced over Liveblocks WebSockets, operations commute automatically. Concurrent edits automatically converge to identical document states without lock contention.",
    architecture: {
      diagramSteps: [
        "Client TipTap Editor",
        "Y.js CRDT Provider",
        "Liveblocks WebSockets",
        "Convex Reactive Store",
        "Groq Llama-3 Stream"
      ],
      description: "Edits flow through TipTap into local Y.js document instances, which emit binary updates over Liveblocks WebSockets to peer clients while persisting document state in Convex serverless databases."
    },
    highlights: [
      "CRDT Conflict-Free Sync",
      "Live Presence & Cursors",
      "Convex Zero-Polling Subscriptions",
      "Groq Llama-3 Streaming API",
      "Clerk JWT Authentication",
      "Point-in-Time Restore"
    ],
    engineeringDecisions: [
      {
        decision: "Used Y.js CRDTs over Operational Transformation (OT)",
        rationale: "OT requires a centralized server to sequence operations. CRDT allows decentralized peer updates and local optimistic rendering, making edits instant."
      },
      {
        decision: "Convex Reactive Subscriptions over Polling REST endpoints",
        rationale: "Convex automatically pushes database mutations to connected clients via WebSockets, eliminating unnecessary API request overhead and polling latency."
      }
    ],
    tradeoffs: [
      {
        chosen: "CRDT State Vector Storage",
        alternative: "Plain JSON Document Snapshots",
        reason: "Y.js state vectors retain edit history metadata which increases document memory footprint slightly, but guarantees mathematically proven convergence without missing keystrokes."
      }
    ],
    results: [
      { label: "Sync Protocol", value: "Y.js CRDT", detail: "Proven zero-collision merge" },
      { label: "AI Latency", value: "< 250ms", detail: "First-token response via Groq Llama-3" },
      { label: "Sync Engine", value: "WebSockets", detail: "Sub-50ms cursor tracking" }
    ],
    lessonsLearned: [
      "Handling real-time rich-text formatting requires careful synchronization between TipTap schema extensions and Y.js delta states.",
      "Streaming LLM completions directly into rich text nodes demands buffer throttling to avoid breaking active DOM cursor offsets."
    ]
  }
};
