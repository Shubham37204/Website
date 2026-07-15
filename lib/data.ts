export const personalData = {
  name: "Shubham Bhardwaj",
  title: "Full Stack & AI/ML Engineer",
  tagline: "Building intelligent systems at the intersection of full-stack development and machine learning.",
  bio: "I'm Shubham - a graduate student at Birla Institute of Technology, Mesra. I build high-performance web systems and practical machine learning applications. I focus on collaborative tools, reliable backend engineering, and effective NLP workflows.",
  email: "shubhambhardwaj9575@gmail.com",
  phone: "+91 9931220269",
  location: "Ranchi, Jharkhand, India",
  coordinates: "23.3441 deg N, 85.3096 deg E",
  github: "https://github.com/Shubham37204",
  linkedin: "https://www.linkedin.com/in/shubham-bhardwaj-83028b212/",
  resumeUrl: "https://drive.google.com/file/d/1J6IH3PFfcJzSOSS4skuro0sdkDwJyE_j/view?usp=drive_link",
};

export const projects = [
  {
    title: "CollabDocs",
    tagline: "Real-time Collaborative Editor with Streaming AI Assistant",
    description: "Architected a real-time collaborative document editor featuring conflict-free editing, live cursors, and an integrated Llama-3 inline writing assistant.",
    problem: "Simultaneous editing causes conflicts without coordination - solved with CRDT-based merge semantics so edits never overwrite each other.",
    details: [
      "Engineered multi-user synchronization with Y.js CRDT and Liveblocks WebSockets for zero-latency cursor tracking.",
      "Integrated Groq AI (Llama 3) streaming API to power an inline editor with 6 preset writing assistant actions.",
      "Built a reactive serverless backend using Convex zero-polling subscriptions and Clerk JWT authentication.",
      "Implemented production features: automated version history with point-in-time restore, slash-command menus, table-of-contents with IntersectionObserver scroll-spy, and document exports to PDF and Markdown."
    ],
    tech: ["Next.js", "TypeScript", "Convex", "Liveblocks", "Y.js", "Clerk", "Groq AI", "Tailwind CSS"],
    tags: ["Real-time Collaboration", "CRDT", "Streaming AI", "Serverless Backend"],
    impact: "Conflict-free simultaneous editing & rich AI document management",
    github: "https://github.com/Shubham37204/CollabDocs",
    accent: "#f59e0b",
    date: "Apr 2026"
  },
  {
    title: "SkimLit",
    tagline: "Medical Abstract Classification NLP Pipeline",
    description: "Designed an end-to-end NLP classifier mapping PubMed randomized controlled trial abstracts into sequential roles using a high-performance deep hybrid network.",
    problem: "Medical literature is dense - researchers spend hours manually parsing abstract structure that a trained model can classify in milliseconds.",
    details: [
      "Developed a Tribrid deep neural network combining token-level (Universal Sentence Encoder), character-level BiLSTM, and positional embeddings.",
      "Trained and compared classification models ranging from TF-IDF baselines through 1D CNNs to multi-input hybrid architectures.",
      "Achieved maximum accuracy using categorical cross-entropy training with label smoothing optimization.",
      "Shipped a self-training Streamlit dashboard featuring automatic dataset downloading, modular training pipeline triggers, and live interactive text inference without requiring pre-trained weights at runtime."
    ],
    tech: ["TensorFlow", "spaCy", "Scikit-learn", "Streamlit", "Python", "NumPy", "Pandas"],
    tags: ["NLP Pipeline", "Deep Learning", "Medical AI", "Multi-Input NN"],
    impact: "Classifies PubMed abstracts into 5 semantic roles automatically",
    github: "https://github.com/Shubham37204/SkimLit",
    accent: "#a78bfa",
    date: "Feb 2026"
  },
  {
    title: "RecallAI",
    tagline: "Meeting Intelligence & Vector Search Pipeline",
    description: "Developed a meeting intelligence tool that generates transcripts, structured summaries, and action-item tracking from recorded audio.",
    problem: "Finding specific action items or reviewing discussion points in hours of meeting audio is time-consuming without searchable, structured records.",
    details: [
      "Built a robust transcript extraction pipeline utilizing Speech-to-Text APIs for audio processing.",
      "Integrated vector embeddings with a vector store for semantic querying across transcription chunks.",
      "Shipped an automated pipeline to synthesize and structure key decisions, summaries, and tasks.",
      "Designed clean backend API routes using FastAPI with queue-based processing for audio ingestion."
    ],
    tech: ["Python", "FastAPI", "Vector DB", "LangChain", "OpenAI API", "Celery", "Docker"],
    tags: ["Speech-to-Text", "Vector Search", "LLM Pipeline", "API Backend"],
    impact: "Built a searchable meeting-memory pipeline for transcripts, summaries, and action-item retrieval.",
    github: "https://github.com/Shubham37204/RecallAI",
    accent: "#00d9ff",
    date: "Mar 2026"
  },
  {
    title: "Hybrid Log Classifier",
    tagline: "Three-stage log classification system with LLM fallback",
    description: "Built a hybrid classifier that routes logs through deterministic regex rules, TF-IDF logistic regression, and Groq LLM fallback for ambiguous cases.",
    problem: "Production logs are noisy and inconsistent - purely rule-based systems miss edge cases, while LLM-only classification is expensive and hard to control.",
    details: [
      "Designed a tiered classification pipeline using Regex first, TF-IDF + Logistic Regression second, and Groq LLM fallback only when confidence is low.",
      "Built FastAPI routes and a Next.js interface for submitting logs, reviewing predictions, and inspecting classifier behavior.",
      "Separated deterministic, statistical, and LLM stages so cost, latency, and explainability can be managed independently."
    ],
    tech: ["FastAPI", "Next.js", "Python", "Scikit-learn", "Groq AI", "TypeScript"],
    tags: ["Hybrid AI", "Log Classification", "FastAPI", "ML Pipeline"],
    impact: "Balances deterministic precision, ML coverage, and LLM flexibility for log triage.",
    github: "https://github.com/Shubham37204/Hybrid-Log-Classifier",
    accent: "#ef4444",
    date: "Jun 2026"
  },
  {
    title: "Study Assistant",
    tagline: "Agentic RAG study assistant with hybrid search",
    description: "Created an AI study assistant using retrieval, hybrid search, multi-agent orchestration, and grounded cited answers.",
    problem: "Students need answers grounded in source material, not generic chatbot responses that hallucinate or lose context.",
    details: [
      "Implemented an agentic RAG pipeline with hybrid retrieval and cited response generation.",
      "Used LangGraph-style orchestration patterns to separate retrieval, reasoning, and answer synthesis.",
      "Designed the system around grounded answers so generated responses can be traced back to study material."
    ],
    tech: ["Python", "LangGraph", "RAG", "Hybrid Search", "LLM", "Vector Search"],
    tags: ["Agentic RAG", "Hybrid Search", "Citations", "AI Assistant"],
    impact: "Turns study material into cited, searchable, context-aware answers.",
    github: "https://github.com/Shubham37204/Study-Assistant",
    accent: "#8b5cf6",
    date: "Jun 2026"
  },
  {
    title: "PR Review Agent",
    tagline: "AI-powered pull request review assistant",
    description: "Built a PR review agent that analyzes GitHub pull request URLs and returns code-review feedback focused on scalability, security, and maintainability.",
    problem: "Junior developers often miss architectural, security, and maintainability risks during review because they focus only on syntax or obvious bugs.",
    details: [
      "Created a review workflow that accepts a PR URL and generates senior-engineer-style feedback.",
      "Structured findings around quality, scalability, security, and production-readiness concerns.",
      "Optimized the interaction for fast review loops and actionable feedback."
    ],
    tech: ["TypeScript", "Next.js", "LLM", "GitHub", "Code Review"],
    tags: ["Developer Tooling", "AI Review", "GitHub Workflow", "Code Quality"],
    impact: "Automates first-pass PR review feedback for faster engineering iteration.",
    github: "https://github.com/Shubham37204/Pr-Review-Agent",
    accent: "#22c55e",
    date: "May 2026"
  },
  {
    title: "MyGit",
    tagline: "Git clone built from scratch in Python",
    description: "Implemented core Git internals from scratch, including object storage, branching, diffing, stash behavior, merge logic, and conflict detection.",
    problem: "Git is often treated as a black box; rebuilding its internals forces a deeper understanding of content-addressed storage and version-control mechanics.",
    details: [
      "Implemented SHA1-based object storage and repository metadata primitives without external dependencies.",
      "Built branch, diff, stash, and merge flows to understand how version-control operations work internally.",
      "Added three-way merge and conflict detection to model real Git behavior."
    ],
    tech: ["Python", "SHA1", "CLI", "Version Control", "Algorithms"],
    tags: ["Systems", "From Scratch", "CLI Tool", "Git Internals"],
    impact: "Demonstrates low-level engineering depth beyond framework usage.",
    github: "https://github.com/Shubham37204/MyGit",
    accent: "#f97316",
    date: "May 2026"
  },
  {
    title: "Infograph AI",
    tagline: "Resume-to-presentation workspace with ATS insights",
    description: "Built an AI workspace that converts PDF resumes into recruiter-ready slide decks with ATS-focused insights and PDF export.",
    problem: "Candidates struggle to convert dense resume content into recruiter-friendly visual summaries without losing important ATS-relevant signals.",
    details: [
      "Designed a PDF-to-presentation workflow that extracts resume content and restructures it into slide-ready sections.",
      "Added ATS insight generation to identify recruiter-relevant strengths and gaps.",
      "Supported export workflows so generated artifacts can be shared outside the app."
    ],
    tech: ["TypeScript", "Next.js", "PDF Processing", "LLM", "Presentation Export"],
    tags: ["AI Workspace", "Resume Analysis", "PDF", "ATS"],
    impact: "Transforms resume data into recruiter-facing visual artifacts.",
    github: "https://github.com/Shubham37204/Infograph-AI",
    accent: "#0ea5e9",
    date: "May 2026"
  },
  {
    title: "CLIPSeg Studio",
    tagline: "Zero-shot image segmentation studio",
    description: "Created a segmentation tool that isolates image regions using text prompts or visual scribbles with confidence refinement.",
    problem: "Manual image masking is slow; zero-shot segmentation makes object isolation faster when users can describe what they want.",
    details: [
      "Integrated CLIPSeg-style zero-shot segmentation around text-prompt and scribble-driven selection workflows.",
      "Built an interactive UI for refining object masks and confidence feedback.",
      "Focused on a practical studio experience rather than a one-off model demo."
    ],
    tech: ["TypeScript", "Computer Vision", "CLIPSeg", "Image Segmentation", "UI"],
    tags: ["Computer Vision", "Zero-shot", "Segmentation", "Interactive Tool"],
    impact: "Turns natural-language object selection into an interactive image masking workflow.",
    github: "https://github.com/Shubham37204/Clipseg",
    accent: "#ec4899",
    date: "May 2026"
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Birla Institute of Technology, Mesra",
    location: "Ranchi, Jharkhand",
    period: "Aug 2024 - Present",
    bullets: [
      "Advancing core concepts in system design, database architectures, network engineering, and advanced algorithm paradigms."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Birla Institute of Technology, Mesra",
    location: "Ranchi, Jharkhand",
    period: "Oct 2021 - May 2024",
    bullets: [
      "Graduated with a cumulative GPA of 8.0.",
      "Acquired solid fundamental knowledge in computer systems, object-oriented programming, and mathematical structures."
    ]
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Basic Java", level: 60 }
  ],
  webFrameworks: [
    { name: "Next.js", level: 88 },
    { name: "React.js", level: 90 },
    { name: "Django", level: 80 },
    { name: "FastAPI", level: 85 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 92 }
  ],
  databases: [
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 80 },
    { name: "Convex", level: 85 }
  ],
  aiml: [
    { name: "TensorFlow", level: 80 },
    { name: "Scikit-learn", level: 85 },
    { name: "NumPy & Pandas", level: 88 },
    { name: "Matplotlib & spaCy", level: 78 },
    { name: "Groq AI & LLaMA", level: 85 }
  ],
  toolsCloud: [
    { name: "Git & GitHub", level: 92 },
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 65 },
    { name: "AWS (EC2, S3, RDS)", level: 75 },
    { name: "Terraform", level: 70 },
    { name: "Vercel", level: 90 }
  ]
};

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Systems",
    color: "#22d3ee",
    items: [
      { name: "Next.js", projects: ["CollabDocs"] },
      { name: "React.js", projects: ["CollabDocs"] },
      { name: "TypeScript", projects: ["CollabDocs"] },
      { name: "Tailwind CSS", projects: ["CollabDocs"] },
      { name: "HTML5 & CSS3", projects: [] },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    color: "#14b8a6",
    items: [
      { name: "FastAPI", projects: [] },
      { name: "Django", projects: [] },
      { name: "Convex (serverless)", projects: ["CollabDocs"] },
      { name: "Clerk (auth)", projects: ["CollabDocs"] },
      { name: "REST API design", projects: [] },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML Engineering",
    color: "#a78bfa",
    items: [
      { name: "TensorFlow", projects: ["SkimLit"] },
      { name: "Scikit-learn", projects: ["SkimLit"] },
      { name: "spaCy", projects: ["SkimLit"] },
      { name: "Groq AI / LLaMA 3", projects: ["CollabDocs"] },
      { name: "NumPy & Pandas", projects: ["SkimLit"] },
    ],
  },
  {
    id: "data",
    title: "Data & Storage",
    color: "#fb7185",
    items: [
      { name: "PostgreSQL", projects: [] },
      { name: "MongoDB", projects: [] },
      { name: "Convex DB", projects: ["CollabDocs"] },
    ],
  },
  {
    id: "devops",
    title: "Cloud / DevOps",
    color: "#f59e0b",
    items: [
      { name: "Docker", projects: [] },
      { name: "AWS (EC2, S3, RDS)", projects: [] },
      { name: "Vercel", projects: ["CollabDocs"] },
      { name: "Git & GitHub", projects: ["CollabDocs", "SkimLit", "RecallAI"] },
      { name: "Terraform", projects: [] },
    ],
  },
  {
    id: "tooling",
    title: "Testing / Tooling",
    color: "#34d399",
    items: [
      { name: "Unit Testing (Python)", projects: ["RecallAI"] },
      { name: "Asynchronous task queues", projects: ["RecallAI"] },
      { name: "Streamlit dashboards", projects: ["SkimLit"] },
      { name: "Kubernetes (basics)", projects: [] },
    ],
  },
];

export const achievements = [
  {
    title: "College Hackathon Runner-up",
    description: "Won 2nd place in a highly competitive college hackathon by designing and building an AI-based emotion-aware music recommendation system."
  }
];

export const certifications = [
  {
    title: "Google IT Automation with Python Specialization",
    issuer: "Google",
    id: "52WXH2HUGCJB",
    url: "https://coursera.org/verify/52WXH2HUGCJB",
    pdf: "/certificates/Coursera 52WXH2HUGCJB.pdf",
    date: "May 2026"
  },
  {
    title: "Automating Real-World Tasks with Python",
    issuer: "Google",
    id: "4LBUCF7T5FEL",
    url: "https://coursera.org/verify/4LBUCF7T5FEL",
    pdf: "/certificates/Coursera 4LBUCF7T5FEL.pdf",
    date: "May 2026"
  },
  {
    title: "Configuration Management and the Cloud",
    issuer: "Google",
    id: "EKSXWGKKSDNX",
    url: "https://coursera.org/verify/EKSXWGKKSDNX",
    pdf: "/certificates/Coursera EKSXWGKKSDNX.pdf",
    date: "Apr 2026"
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    id: "N4GEQYDZ42B9",
    url: "https://coursera.org/verify/N4GEQYDZ42B9",
    pdf: "/certificates/Coursera N4GEQYDZ42B9.pdf",
    date: "Apr 2026"
  },
  {
    title: "Crash Course on Python",
    issuer: "Google",
    id: "W7AJ7S5VZEAD",
    url: "https://coursera.org/verify/W7AJ7S5VZEAD",
    pdf: "/certificates/Coursera W7AJ7S5VZEAD.pdf",
    date: "Mar 2026"
  },
  {
    title: "Using Python to Interact with the Operating System",
    issuer: "Google",
    id: "WP7DTRVSSGPC",
    url: "https://coursera.org/verify/WP7DTRVSSGPC",
    pdf: "/certificates/Coursera WP7DTRVSSGPC.pdf",
    date: "Mar 2026"
  },
  {
    title: "Troubleshooting and Debugging Techniques",
    issuer: "Google",
    id: "ZSBJTT3852KC",
    url: "https://coursera.org/verify/ZSBJTT3852KC",
    pdf: "/certificates/Coursera ZSBJTT3852KC.pdf",
    date: "Apr 2026"
  }
];
