"use client";

import { Github, ExternalLink } from "lucide-react";

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
  // Generate glow styles based on accent color
  const glowStyle = {
    "--accent-color": project.accent,
    borderColor: `${project.accent}15`,
  } as React.CSSProperties;

  return (
    <div
      style={glowStyle}
      className="group rounded-2xl glass p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl border hover:border-accent-border/40 hover:bg-card-hover"
    >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-wider font-semibold opacity-50 uppercase">{project.date}</span>
            <h3 className="text-xl md:text-2xl font-bold font-comfortaa group-hover:text-accent transition-colors" style={{ color: project.accent }}>
              {project.title}
            </h3>
          </div>
          <div
            className="w-1.5 h-6 rounded-full transition-all duration-300 group-hover:scale-x-150"
            style={{ backgroundColor: project.accent, boxShadow: `0 0 10px ${project.accent}` }}
          />
        </div>

        {/* Tagline & Description */}
        <p className="text-xs font-mono font-medium tracking-wide text-text-secondary">
          {project.tagline}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Detailed Points */}
        <ul className="flex flex-col gap-2.5 mt-2">
          {project.details.map((detail, idx) => (
            <li key={idx} className="text-xs text-text-secondary leading-relaxed font-sans flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: project.accent }} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6 pt-4 border-t border-border">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-white/5 text-text-secondary border-white/5 transition-all duration-300 hover:border-accent-border hover:text-text-primary"
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
              className="p-2 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-accent hover:border-accent-border hover:bg-accent/5 transition-all duration-300 flex items-center gap-1.5 text-xs font-mono"
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
