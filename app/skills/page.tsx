"use client";

import { useMemo, useState } from "react";
import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TabGroup from "@/components/ui/TabGroup";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";
import { BrainCircuit, Code2, Cpu, Database, Globe, Wrench } from "lucide-react";

const categories = [
  {
    id: "languages",
    title: "Languages",
    description: "Core languages used for backend services, frontend interfaces, data work, and automation.",
    icon: Code2,
    color: "#14b8a6",
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

  const tabItems = categories.map((cat) => ({
    id: cat.id,
    label: cat.title,
    icon: cat.icon,
    color: cat.color,
  }));

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Technical forge"
          title="Forge"
          description="A practical map of the languages, frameworks, AI tooling, and deployment stack I use to build software."
          titleClassName="page-title"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <ScrollReveal delay={100} className="relative min-h-[400px] lg:min-h-[620px] overflow-hidden rounded-xl border border-border bg-card/25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.08),transparent_26%)]" />
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15 hidden lg:block" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 hidden lg:block" />
          <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/30 bg-bg/80 shadow-[0_0_45px_rgba(20,184,166,0.15)]">
            <Cpu className="mb-2 h-6 w-6 text-accent" />
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">Core</span>
            <span className="font-display text-sm font-bold text-text-primary">Stack</span>
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
                className="absolute left-1/2 top-1/2 z-20 hidden lg:flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border bg-bg/85 px-3 py-2 text-xs font-medium text-text-secondary shadow-card backdrop-blur-md"
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

        <div className="flex flex-col gap-6">
          <ScrollReveal delay={150}>
            <TabGroup tabs={tabItems} activeId={activeTab} onChange={setActiveTab} />
          </ScrollReveal>

          <ScrollReveal delay={220} key={activeTab}>
            <Card className="!p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-2" style={{ color: activeCategory.color }}>
                    <ActiveIcon className="h-5 w-5" />
                    <h2 className="font-display text-2xl font-bold text-text-primary">{activeCategory.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">{activeCategory.description}</p>
                </div>
                <Badge className="shrink-0 uppercase tracking-wider">
                  {activeCategory.items.length} skills
                </Badge>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeCategory.items.map((skill) => (
                  <div key={skill.name} className="rounded-xl border border-border/70 bg-bg/55 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: activeCategory.color }}>{skill.level}%</span>
                    </div>
                    <ProgressBar value={skill.level} color={activeCategory.color} />
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
