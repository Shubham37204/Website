"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

// Map project names to their routes
const projectLinks: Record<string, string> = {
  CollabDocs: "/projects",
  SkimLit: "/projects",
  RecallAI: "/projects",
};

// Define theme styles for light/dark mode to guarantee strong contrast
const themeStyles: Record<
  string,
  { border: string; text: string; bg: string; color: string; hoverBg: string }
> = {
  frontend: {
    border: "border-cyan-200 dark:border-cyan-500/20",
    text: "text-cyan-800 dark:text-cyan-300",
    bg: "bg-cyan-50/80 dark:bg-cyan-950/20",
    hoverBg: "hover:bg-cyan-100 dark:hover:bg-cyan-900/30",
    color: "#0891b2",
  },
  backend: {
    border: "border-teal-200 dark:border-teal-500/20",
    text: "text-teal-800 dark:text-teal-300",
    bg: "bg-teal-50/80 dark:bg-teal-950/20",
    hoverBg: "hover:bg-teal-100 dark:hover:bg-teal-900/30",
    color: "#0d9488",
  },
  aiml: {
    border: "border-violet-200 dark:border-violet-500/20",
    text: "text-violet-800 dark:text-violet-300",
    bg: "bg-violet-50/80 dark:bg-violet-950/20",
    hoverBg: "hover:bg-violet-100 dark:hover:bg-violet-900/30",
    color: "#7c3aed",
  },
  data: {
    border: "border-rose-200 dark:border-rose-500/20",
    text: "text-rose-800 dark:text-rose-300",
    bg: "bg-rose-50/80 dark:bg-rose-950/20",
    hoverBg: "hover:bg-rose-100 dark:hover:bg-rose-900/30",
    color: "#e11d48",
  },
  devops: {
    border: "border-amber-200 dark:border-amber-500/20",
    text: "text-amber-800 dark:text-amber-300",
    bg: "bg-amber-50/80 dark:bg-amber-950/20",
    hoverBg: "hover:bg-amber-100 dark:hover:bg-amber-900/30",
    color: "#d97706",
  },
  tooling: {
    border: "border-emerald-200 dark:border-emerald-500/20",
    text: "text-emerald-800 dark:text-emerald-300",
    bg: "bg-emerald-50/80 dark:bg-emerald-950/20",
    hoverBg: "hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
    color: "#059669",
  },
};

export default function SkillsPage() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Connection connections list for the TechMap network visual
  const connections = [
    { from: "frontend", to: "CollabDocs" },
    { from: "backend", to: "CollabDocs" },
    { from: "backend", to: "RecallAI" },
    { from: "aiml", to: "CollabDocs" },
    { from: "aiml", to: "RecallAI" },
    { from: "aiml", to: "SkimLit" },
    { from: "data", to: "CollabDocs" },
    { from: "data", to: "RecallAI" },
    { from: "devops", to: "CollabDocs" },
    { from: "devops", to: "RecallAI" },
    { from: "devops", to: "SkimLit" },
    { from: "tooling", to: "RecallAI" },
    { from: "tooling", to: "SkimLit" },
  ];

  const getEdgeOpacity = (from: string, to: string) => {
    if (!hoveredNode) return "stroke-slate-300 dark:stroke-zinc-800 opacity-40";
    if (hoveredNode === from || hoveredNode === to) {
      return "stroke-accent opacity-100 stroke-[2px]";
    }
    return "stroke-slate-200 dark:stroke-zinc-900 opacity-10";
  };

  const getNodeClass = (id: string) => {
    if (!hoveredNode) return "opacity-100";
    if (hoveredNode === id) return "opacity-100 scale-105";
    
    // Check if connected
    const isConnected = connections.some(
      (c) => (c.from === id && c.to === hoveredNode) || (c.to === id && c.from === hoveredNode)
    );
    return isConnected ? "opacity-100" : "opacity-35";
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-6">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Technical skills"
          title="Skills"
          description="Technologies and tools I have applied in real projects - grouped by discipline and linked to where they appear in my work."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Spacing reduced visual and details columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 items-start">
        
        {/* Left Column: Visual Skill Connections Network (TechMap) */}
        <ScrollReveal delay={50} className="w-full lg:sticky lg:top-24">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">Architecture Connections Map</span>
            <div className="w-full h-[240px] md:h-[340px] max-h-[240px] md:max-h-[340px] border border-border bg-card/65 rounded-xl overflow-hidden p-3 relative flex items-center justify-center">
              
              <svg 
                viewBox="0 0 440 360" 
                className="w-full h-full select-none"
                style={{ contentVisibility: "auto" }}
              >
                {/* SVG Connections Paths */}
                <g>
                  {/* Frontend -> CollabDocs */}
                  <path d="M 130 50 C 230 50, 230 90, 310 90" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("frontend", "CollabDocs")}`} />
                  {/* Backend -> CollabDocs */}
                  <path d="M 130 100 C 230 100, 230 90, 310 90" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("backend", "CollabDocs")}`} />
                  {/* Backend -> RecallAI */}
                  <path d="M 130 100 C 230 100, 230 180, 310 180" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("backend", "RecallAI")}`} />
                  {/* AI/ML -> CollabDocs */}
                  <path d="M 130 150 C 230 150, 230 90, 310 90" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("aiml", "CollabDocs")}`} />
                  {/* AI/ML -> RecallAI */}
                  <path d="M 130 150 C 230 150, 230 180, 310 180" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("aiml", "RecallAI")}`} />
                  {/* AI/ML -> SkimLit */}
                  <path d="M 130 150 C 230 150, 230 270, 310 270" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("aiml", "SkimLit")}`} />
                  {/* Data & Storage -> CollabDocs */}
                  <path d="M 130 200 C 230 200, 230 90, 310 90" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("data", "CollabDocs")}`} />
                  {/* Data & Storage -> RecallAI */}
                  <path d="M 130 200 C 230 200, 230 180, 310 180" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("data", "RecallAI")}`} />
                  {/* Cloud -> CollabDocs */}
                  <path d="M 130 250 C 230 250, 230 90, 310 90" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("devops", "CollabDocs")}`} />
                  {/* Cloud -> RecallAI */}
                  <path d="M 130 250 C 230 250, 230 180, 310 180" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("devops", "RecallAI")}`} />
                  {/* Cloud -> SkimLit */}
                  <path d="M 130 250 C 230 250, 230 270, 310 270" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("devops", "SkimLit")}`} />
                  {/* Testing -> RecallAI */}
                  <path d="M 130 300 C 230 300, 230 180, 310 180" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("tooling", "RecallAI")}`} />
                  {/* Testing -> SkimLit */}
                  <path d="M 130 300 C 230 300, 230 270, 310 270" fill="none" className={`transition-all duration-200 ${getEdgeOpacity("tooling", "SkimLit")}`} />
                </g>

                {/* Left side: Domain Nodes */}
                <g>
                  {[
                    { id: "frontend", name: "Frontend", y: 50, color: themeStyles.frontend.color },
                    { id: "backend", name: "Backend", y: 100, color: themeStyles.backend.color },
                    { id: "aiml", name: "AI / ML", y: 150, color: themeStyles.aiml.color },
                    { id: "data", name: "Data Layer", y: 200, color: themeStyles.data.color },
                    { id: "devops", name: "Cloud / DevOps", y: 250, color: themeStyles.devops.color },
                    { id: "tooling", name: "Tooling / QA", y: 300, color: themeStyles.tooling.color },
                  ].map((d) => (
                    <g 
                      key={d.id} 
                      className={`cursor-pointer transition-all duration-200 ${getNodeClass(d.id)}`}
                      onMouseEnter={() => setHoveredNode(d.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <circle cx="130" cy={d.y} r="6" fill={d.color} />
                      <text 
                        x="115" 
                        y={d.y + 4} 
                        textAnchor="end" 
                        className="font-mono text-[10px] font-semibold fill-text-primary uppercase tracking-wider"
                      >
                        {d.name}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Right side: Project Nodes */}
                <g>
                  {[
                    { id: "CollabDocs", name: "CollabDocs", y: 90, color: "#f59e0b" },
                    { id: "RecallAI", name: "RecallAI", y: 180, color: "#00d9ff" },
                    { id: "SkimLit", name: "SkimLit", y: 270, color: "#a78bfa" },
                  ].map((p) => (
                    <g 
                      key={p.id} 
                      className={`cursor-pointer transition-all duration-200 ${getNodeClass(p.id)}`}
                      onMouseEnter={() => setHoveredNode(p.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <circle cx="310" cy={p.y} r="6" fill={p.color} />
                      <text 
                        x="325" 
                        y={p.y + 4} 
                        className="font-display text-[11px] font-bold fill-text-primary"
                      >
                        {p.name}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
              
              <div className="absolute bottom-2 right-3 text-[9px] font-mono text-text-muted">
                Hover nodes to filter connections
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Evidence-based Skills list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillGroups.map((group, idx) => {
            const style = themeStyles[group.id];
            return (
              <ScrollReveal key={group.id} delay={idx * 60}>
                <div className={`flex flex-col rounded-xl border bg-card/65 shadow-sm h-full overflow-hidden transition-all duration-200 hover:shadow-md ${style.border}`}>
                  {/* Color strip accent */}
                  <div className="h-0.5 w-full" style={{ backgroundColor: style.color }} />

                  <div className="flex flex-col gap-3 p-4 flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: style.color }} />
                      <h2 className={`text-xs font-bold font-mono tracking-wider uppercase ${style.text}`}>
                        {group.title}
                      </h2>
                    </div>

                    {/* Skills list */}
                    <ul className="flex flex-col gap-2.5 flex-1">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex flex-col gap-0.5">
                          <span className="text-sm font-medium text-text-primary leading-snug">
                            {item.name}
                          </span>
                          {item.projects.length > 0 ? (
                            <div className="flex flex-wrap gap-1">
                              {item.projects.map((proj) => (
                                <Link
                                  key={proj}
                                  href={projectLinks[proj] ?? "/projects"}
                                  className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-mono font-medium border transition-colors ${style.border} ${style.bg} ${style.text} ${style.hoverBg}`}
                                >
                                  -&gt; {proj}
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[9px] font-mono text-text-muted">
                              studied / practiced
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <ScrollReveal>
        <p className="text-center text-xs text-text-muted font-mono leading-relaxed max-w-2xl mx-auto pt-2 border-t border-border/60">
          Project-linked skills link directly to their repositories and implementation descriptions on the Projects page.
        </p>
      </ScrollReveal>
    </div>
  );
}
