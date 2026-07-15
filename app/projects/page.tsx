"use client";

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-10">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects"
          description="Three production-quality projects covering real-time collaboration, applied NLP, and systems programming. Each built to understand the underlying technology, not just ship a feature."
          titleClassName="page-title"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, idx) => (
          <ScrollReveal key={project.title} delay={idx * 120}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
