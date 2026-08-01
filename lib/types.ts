export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface PipelineStep {
  name: string;
  description: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    diagramSteps: string[];
    description: string;
  };
  highlights: string[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
  }[];
  tradeoffs: {
    chosen: string;
    alternative: string;
    reason: string;
  }[];
  results: ProjectMetric[];
  lessonsLearned: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "fullstack" | "aiml" | "systems" | "devtools";
  isFlagship?: boolean;
  problem?: string;
  details: string[];
  tech: string[];
  tags: string[];
  keywords: string[];
  impact: string;
  github: string;
  liveUrl?: string;
  accent: string;
  date: string;
  caseStudy?: CaseStudy;
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  category: "education" | "experience" | "project" | "certification";
  description: string;
  highlights: string[];
  techOrLink?: {
    label: string;
    url?: string;
  };
  accentColor?: string;
}
