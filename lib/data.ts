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
