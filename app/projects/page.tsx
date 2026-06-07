"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12 font-sans">
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-6">
        <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">Projects</h1>
        <p className="text-xs md:text-sm text-text-secondary max-w-xl leading-relaxed">
          A showcase of web applications and machine learning projects I have built.
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
