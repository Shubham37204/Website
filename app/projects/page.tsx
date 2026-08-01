"use client";

import { useState, useMemo } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectSearch from "@/components/ProjectSearch";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { FolderGit2 } from "lucide-react";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const categoryMatch =
        selectedCategory === "all" || project.category === selectedCategory;

      if (!categoryMatch) return false;

      // Multi-field search match
      if (!searchTerm.trim()) return true;

      const query = searchTerm.toLowerCase().trim();

      const titleMatch = project.title.toLowerCase().includes(query);
      const taglineMatch = project.tagline.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const techMatch = project.tech.some((t) => t.toLowerCase().includes(query));
      const keywordMatch = project.keywords?.some((k) =>
        k.toLowerCase().includes(query)
      );
      const categoryNameMatch = project.category.toLowerCase().includes(query);

      return (
        titleMatch ||
        taglineMatch ||
        descMatch ||
        techMatch ||
        keywordMatch ||
        categoryNameMatch
      );
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-7">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Portfolio & Systems"
          title="Projects"
          description="Explore real-time collaborative editors, medical NLP pipelines, speech-to-text RAG tools, and systems software built with Next.js, Python, and TensorFlow."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Multi-Field Search & Filter Controls */}
      <ScrollReveal delay={100}>
        <ProjectSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          totalCount={projects.length}
          filteredCount={filteredProjects.length}
        />
      </ScrollReveal>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 80}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card p-12 text-center flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 grid place-items-center text-accent">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-text-primary">No matching projects found</h3>
          <p className="text-sm text-text-secondary max-w-md">
            No projects match &quot;<strong className="text-accent">{searchTerm}</strong>&quot;. Try searching for skills like <code className="text-accent font-mono">FastAPI</code>, <code className="text-accent font-mono">Python</code>, or <code className="text-accent font-mono">CRDT</code>.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="mt-2 text-xs font-mono text-accent hover:underline"
          >
            Reset search filters
          </button>
        </div>
      )}
    </div>
  );
}
