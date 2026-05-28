"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12">
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-8">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase font-semibold">SELECTED ARCHITECTURES</span>
        <h1 className="text-4xl md:text-6xl font-bold font-comfortaa text-white leading-tight">Projects</h1>
        <p className="text-sm text-text-secondary max-w-xl leading-relaxed font-sans">
          A showcase of full-stack platforms, low-level tooling, and machine learning pipelines engineered from scratch.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.title} delay={idx * 150}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
