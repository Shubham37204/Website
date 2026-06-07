"use client";

import { Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    tagline: string;
    description: string;
    details: string[];
    tech: string[];
    impact: string;
    github: string;
    accent: string;
    date: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="rounded-2xl glass p-6 md:p-8 flex flex-col justify-between gap-6 transition-colors border border-border"
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-wider font-semibold opacity-50 uppercase">{project.date}</span>
            <h3 className="text-xl font-bold font-comfortaa" style={{ color: project.accent }}>
              {project.title}
            </h3>
          </div>
          <div
            className="w-1 h-6 rounded-full"
            style={{ backgroundColor: project.accent }}
          />
        </div>

        {/* Tagline & Description */}
        <p className="text-xs font-mono font-medium tracking-wide text-text-secondary">
          {project.tagline}
        </p>
        <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Detailed Points */}
        <ul className="flex flex-col gap-2.5 mt-2">
          {project.details.map((detail, idx) => (
            <li key={idx} className="text-xs text-text-secondary leading-relaxed font-sans flex items-start gap-2">
              <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: project.accent }} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 pt-4 border-t border-border">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-card text-text-secondary border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Actions */}
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-mono tracking-wider text-text-muted">
            IMPACT: <span className="font-semibold text-text-secondary">{project.impact}</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-card border border-border text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              <Github className="w-4 h-4" />
              <span>CODE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
