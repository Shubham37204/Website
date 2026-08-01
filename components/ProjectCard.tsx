"use client";

import Link from "next/link";
import { Github, ArrowUpRight, BookOpen, Star } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

const projectFlows: Record<string, string[]> = {
  CollabDocs: ["Client editor", "Y.js CRDT", "Liveblocks", "Convex", "Groq stream"],
  SkimLit: ["PubMed text", "Token model", "Char model", "Position features", "Label output"],
  RecallAI: ["Audio upload", "Worker queue", "Transcript", "Embeddings", "Semantic search"],
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-border bg-card shadow-card transition-all duration-200 overflow-hidden hover:shadow-card-hover hover:[border-color:var(--accent-border)]">
      {/* Accent top bar */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ backgroundColor: project.accent }} />

      <div className="flex flex-col gap-3.5 p-4 md:p-5 flex-1">

        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">{project.date}</span>
              {project.isFlagship && (
                <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 text-[9px] font-mono font-bold text-amber-500">
                  <Star className="w-2.5 h-2.5 fill-amber-500" />
                  FLAGSHIP
                </span>
              )}
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="text-lg font-bold font-display text-text-primary hover:text-accent transition-colors leading-snug"
            >
              {project.title}
            </Link>
            <p className="text-sm font-medium text-text-secondary mt-0.5">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card-hover px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:[border-color:var(--accent-border)] transition-all duration-150 focus-ring"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Category tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono font-medium tracking-wide uppercase"
                style={{
                  borderColor: `${project.accent}44`,
                  color: project.accent,
                  background: `${project.accent}0d`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="grid grid-cols-1 gap-2 rounded-lg border p-3 sm:grid-cols-5"
          style={{
            borderColor: `${project.accent}28`,
            background: `${project.accent}08`,
          }}
        >
          {(projectFlows[project.title] ?? project.tech.slice(0, 5)).map((step, idx) => (
            <div key={step} className="flex items-center gap-2 sm:flex-col sm:items-start">
              <span
                className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full font-mono text-[10px] font-bold text-bg"
                style={{ backgroundColor: project.accent }}
              >
                {idx + 1}
              </span>
              <span className="text-xs font-medium leading-snug text-text-secondary">{step}</span>
            </div>
          ))}
        </div>

        {/* Problem statement */}
        {project.problem && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">Problem</span>
            <p className="text-sm text-text-secondary leading-relaxed border-l-2 pl-3" style={{ borderColor: `${project.accent}66` }}>
              {project.problem}
            </p>
          </div>
        )}

        {/* Highlights */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">Highlights</span>
          <ul className="flex flex-col gap-2">
            {project.details.map((detail, idx) => (
              <li key={idx} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                  style={{ backgroundColor: project.accent }}
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer: stack + impact + Case Study link */}
        <div className="flex flex-col gap-3 pt-3 border-t border-border mt-auto">
          {/* Stack */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 flex-wrap">
            {/* Impact */}
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-mono flex-1 min-w-[200px]"
              style={{
                background: `${project.accent}0d`,
                border: `1px solid ${project.accent}30`,
                color: project.accent,
              }}
            >
              <span className="text-text-muted font-sans">Impact:</span>
              <span className="font-medium truncate">{project.impact}</span>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-text-primary bg-card-hover border border-border hover:border-accent hover:text-accent transition-all ml-auto"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Case Study →</span>
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
}
