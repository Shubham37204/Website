"use client";

import { Github, ArrowUpRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: {
    title: string;
    tagline: string;
    description: string;
    problem?: string;
    details: string[];
    tech: string[];
    tags?: string[];
    impact: string;
    github: string;
    accent: string;
    date: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-card shadow-card transition-all duration-200 overflow-hidden hover:shadow-card-hover hover:[border-color:var(--accent-border)]">
      {/* Accent top bar */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ backgroundColor: project.accent }} />

      <div className="flex flex-col gap-5 p-6 md:p-8 flex-1">

        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">{project.date}</span>
            <h2 className="text-xl font-bold font-display text-text-primary leading-snug">{project.title}</h2>
            <p className="text-sm font-medium text-text-secondary mt-0.5">{project.tagline}</p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card-hover px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:[border-color:var(--accent-border)] transition-all duration-150 flex-shrink-0 focus-ring"
          >
            <Github className="w-3.5 h-3.5" />
            Code
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
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

        {/* Problem statement */}
        {project.problem && (
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">Problem</span>
            <p className="text-sm text-text-secondary leading-relaxed border-l-2 pl-3" style={{ borderColor: `${project.accent}66` }}>
              {project.problem}
            </p>
          </div>
        )}

        {/* Architecture highlights */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">Architecture &amp; highlights</span>
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

        {/* Footer: stack + impact */}
        <div className="flex flex-col gap-4 pt-4 border-t border-border mt-auto">
          {/* Stack */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-mono"
            style={{
              background: `${project.accent}0d`,
              border: `1px solid ${project.accent}30`,
              color: project.accent,
            }}
          >
            <span className="text-text-muted font-sans">Impact:</span>
            <span className="font-medium">{project.impact}</span>
          </div>
        </div>

      </div>
    </article>
  );
}
