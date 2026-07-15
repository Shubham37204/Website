"use client";

import { Github } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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
    <Card hover glass className="flex flex-col justify-between gap-6 !p-6 md:!p-8">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono tracking-wider text-text-muted uppercase">{project.date}</span>
            <h3 className="text-xl font-bold font-display text-text-primary">
              {project.title}
            </h3>
          </div>
          <div
            className="w-1 h-8 rounded-full flex-shrink-0"
            style={{ backgroundColor: project.accent }}
          />
        </div>

        <p className="text-sm font-medium text-text-secondary">
          {project.tagline}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">
          {project.description}
        </p>

        <ul className="flex flex-col gap-2.5 mt-2">
          {project.details.map((detail, idx) => (
            <li key={idx} className="text-sm text-text-secondary leading-relaxed flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: project.accent }} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex justify-between items-center gap-4">
          <span className="text-xs font-mono text-text-muted">
            Impact: <span className="font-semibold text-text-secondary">{project.impact}</span>
          </span>
          <Button variant="ghost" href={project.github} external className="!px-3 !py-2">
            <Github className="w-4 h-4" />
            Code
          </Button>
        </div>
      </div>
    </Card>
  );
}
