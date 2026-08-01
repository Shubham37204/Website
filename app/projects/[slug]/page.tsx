import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/lib/projects";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import TechHighlights from "@/components/TechHighlights";
import MetricsGrid from "@/components/MetricsGrid";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  Github,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  HelpCircle,
  Lightbulb,
  Scale,
  Sparkles,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study by Shubham Bhardwaj`,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Shubham Bhardwaj`,
      description: project.description,
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Find index for next/prev navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const caseStudy = project.caseStudy;

  return (
    <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-8">
      {/* Top Back Navigation */}
      <ScrollReveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
      </ScrollReveal>

      {/* Case Study Hero */}
      <ScrollReveal delay={50} className="flex flex-col gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono tracking-wider text-text-muted uppercase">
            {project.date}
          </span>
          <span className="text-text-muted">•</span>
          <span
            className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide uppercase"
            style={{
              borderColor: `${project.accent}44`,
              color: project.accent,
              background: `${project.accent}0d`,
            }}
          >
            {project.category}
          </span>
          {project.isFlagship && (
            <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-500">
              <Sparkles className="w-3 h-3 fill-amber-500" />
              FLAGSHIP CASE STUDY
            </span>
          )}
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
          {project.title}
        </h1>

        <p className="text-lg font-medium text-text-secondary leading-relaxed">
          {project.tagline}
        </p>

        {/* CTA links */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button variant="primary" href={project.github} external>
            <Github className="w-4 h-4" />
            View Repository on GitHub
          </Button>
          {project.liveUrl && (
            <Button variant="secondary" href={project.liveUrl} external>
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
        </div>
      </ScrollReveal>

      {/* Tech Stack Pills */}
      <ScrollReveal delay={100} className="flex flex-col gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
          Technologies Used
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </ScrollReveal>

      {/* Flagship vs Standard Content */}
      {project.isFlagship && caseStudy ? (
        <>
          {/* 1. Overview */}
          <ScrollReveal delay={150} className="flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-text-primary border-b border-border pb-2">
              Overview
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              {caseStudy.overview}
            </p>
          </ScrollReveal>

          {/* 2. Problem & Solution */}
          <ScrollReveal delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 rounded-xl border border-red-500/20 bg-red-500/05 p-4">
              <div className="flex items-center gap-2 text-red-400 font-display font-bold text-sm">
                <HelpCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/05 p-4">
              <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </ScrollReveal>

          {/* 3. Architecture SVG Diagram */}
          <ScrollReveal delay={250}>
            <ArchitectureDiagram
              steps={caseStudy.architecture.diagramSteps}
              description={caseStudy.architecture.description}
              accentColor={project.accent}
            />
          </ScrollReveal>

          {/* 4. Tech Highlights */}
          <ScrollReveal delay={300}>
            <TechHighlights highlights={caseStudy.highlights} accentColor={project.accent} />
          </ScrollReveal>

          {/* 5. Engineering Decisions */}
          <ScrollReveal delay={350} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <h2 className="font-display text-xl font-bold text-text-primary">
                Engineering Decisions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.engineeringDecisions.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
                  <h3 className="font-display text-sm font-bold text-accent">
                    {item.decision}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.rationale}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 6. Trade-offs */}
          <ScrollReveal delay={400} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-border pb-2">
              <Scale className="w-4 h-4 text-accent" />
              <h2 className="font-display text-xl font-bold text-text-primary">
                Trade-offs &amp; Architectural Choices
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {caseStudy.tradeoffs.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-emerald-400 font-semibold">Chosen: {item.chosen}</span>
                    <span className="text-text-muted">vs</span>
                    <span className="text-text-secondary line-through">Alternative: {item.alternative}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed border-t border-border/50 pt-2">
                    <strong>Reasoning:</strong> {item.reason}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* 7. Results (Empirical Metrics) */}
          <ScrollReveal delay={450}>
            <MetricsGrid metrics={caseStudy.results} accentColor={project.accent} />
          </ScrollReveal>

          {/* 8. Lessons Learned */}
          <ScrollReveal delay={500} className="flex flex-col gap-3">
            <h2 className="font-display text-xl font-bold text-text-primary border-b border-border pb-2">
              Lessons Learned
            </h2>
            <ul className="flex flex-col gap-2">
              {caseStudy.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </>
      ) : (
        /* Concise View for Standard Projects */
        <ScrollReveal delay={150} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
            <h2 className="font-display text-lg font-bold text-text-primary border-b border-border pb-2">
              Overview
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.problem && (
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
              <h2 className="font-display text-lg font-bold text-text-primary border-b border-border pb-2">
                Problem Statement
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5">
            <h2 className="font-display text-lg font-bold text-text-primary border-b border-border pb-2">
              Key Engineering Details
            </h2>
            <ul className="flex flex-col gap-2">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      )}

      {/* Footer Navigation */}
      <ScrollReveal delay={550} className="flex items-center justify-between border-t border-border pt-6 mt-4">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="flex flex-col items-start text-xs font-mono text-text-secondary hover:text-accent transition-colors"
        >
          <span className="text-[10px] text-text-muted uppercase">← Previous Project</span>
          <span className="font-sans font-semibold text-text-primary">{prevProject.title}</span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex flex-col items-end text-xs font-mono text-text-secondary hover:text-accent transition-colors text-right"
        >
          <span className="text-[10px] text-text-muted uppercase">Next Project →</span>
          <span className="font-sans font-semibold text-text-primary">{nextProject.title}</span>
        </Link>
      </ScrollReveal>
    </div>
  );
}
