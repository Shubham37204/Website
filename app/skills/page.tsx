"use client";

import { useMemo, useState } from "react";
import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { BrainCircuit, Code2, Cpu, Database, Globe, Wrench } from "lucide-react";

const categories = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages used for backend services, frontend interfaces, data work, and automation.",
    icon: Code2,
    color: "#f59e0b",
    items: skills.languages,
  },
  {
    id: "webFrameworks",
    title: "Web Stack",
    description: "Frameworks and UI systems used to ship full-stack web applications.",
    icon: Globe,
    color: "#22d3ee",
    items: skills.webFrameworks,
  },
  {
    id: "databases",
    title: "Data Layer",
    description: "Storage systems for relational, document, and serverless application data.",
    icon: Database,
    color: "#a78bfa",
    items: skills.databases,
  },
  {
    id: "aiml",
    title: "AI / ML",
    description: "Libraries and workflows for NLP, deep learning, and practical model experimentation.",
    icon: BrainCircuit,
    color: "#fb7185",
    items: skills.aiml,
  },
  {
    id: "toolsCloud",
    title: "Tools",
    description: "Development, cloud, deployment, and operations tools for production-minded projects.",
    icon: Wrench,
    color: "#34d399",
    items: skills.toolsCloud,
  },
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];
  const ActiveIcon = activeCategory.icon;

  const orbitItems = useMemo(() => {
    const merged = [
      ...skills.languages,
      ...skills.webFrameworks,
      ...skills.databases,
      ...skills.aiml,
      ...skills.toolsCloud,
    ];
    return merged.slice(0, 16);
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 font-sans">
      <ScrollReveal className="flex flex-col gap-3 pb-4">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Technical Forge</p>
        <h1 className="font-comfortaa text-4xl font-bold leading-tight text-text-primary md:text-6xl">Forge</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          A practical map of the languages, frameworks, AI tooling, and deployment stack I use to build software.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <ScrollReveal delay={100} className="relative min-h-[620px] overflow-hidden rounded-2xl bg-card/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.10),transparent_26%)]" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-cyan-400/20" />
          <div className="absolute left-1/2 top-1/2 h-[540px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[999px] border border-cyan-400/20" />
          <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-2xl" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/30 bg-bg/80 shadow-[0_0_45px_rgba(245,158,11,0.18)]">
            <Cpu className="mb-2 h-6 w-6 text-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-text-muted">Core</span>
            <span className="font-comfortaa text-sm font-bold text-text-primary">Stack</span>
          </div>

          {orbitItems.map((skill, idx) => {
            const angle = (idx / orbitItems.length) * Math.PI * 2 - Math.PI / 2;
            const radiusX = idx % 2 === 0 ? 250 : 205;
            const radiusY = idx % 2 === 0 ? 225 : 170;
            const x = Math.cos(angle) * radiusX;
            const y = Math.sin(angle) * radiusY;
            const category = categories.find((cat) => cat.items.some((item) => item.name === skill.name)) || categories[0];

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border bg-bg/85 px-3 py-2 font-mono text-[11px] font-semibold text-text-secondary shadow-lg backdrop-blur-md"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  borderColor: `${category.color}55`,
                  color: category.color,
                }}
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          <ScrollReveal delay={150}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className="flex items-center gap-2 rounded-xl border px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                    style={{
                      borderColor: isActive ? `${cat.color}66` : "var(--border)",
                      color: isActive ? cat.color : "var(--text-secondary)",
                      background: isActive ? `${cat.color}18` : "var(--bg-card)",
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={220} key={activeTab}>
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-2" style={{ color: activeCategory.color }}>
                    <ActiveIcon className="h-5 w-5" />
                    <h2 className="font-comfortaa text-2xl font-bold">{activeCategory.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{activeCategory.description}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  {activeCategory.items.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeCategory.items.map((skill) => (
                  <div key={skill.name} className="rounded-xl border border-border/70 bg-bg/55 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="font-mono text-sm font-semibold text-text-primary">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: activeCategory.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-card-hover">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${skill.level}%`, backgroundColor: activeCategory.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
