"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { Code2, Globe, Database, BrainCircuit, Wrench } from "lucide-react";

export default function SkillsPage() {
  const categories = [
    {
      id: "languages",
      title: "Languages",
      description: "Core languages I write for building applications, data analysis, and scripting.",
      icon: <Code2 className="w-4 h-4" />,
      color: "text-accent",
      borderColor: "hover:border-accent/30",
      accentBg: "bg-accent/5",
      accentColor: "rgba(245, 158, 11, 0.4)",
      items: skills.languages
    },
    {
      id: "webFrameworks",
      title: "Web & Frameworks",
      description: "Frontend and backend web frameworks I use to engineer modern scalable platforms.",
      icon: <Globe className="w-4 h-4" />,
      color: "text-cyan-400",
      borderColor: "hover:border-cyan-400/30",
      accentBg: "bg-cyan-400/5",
      accentColor: "rgba(34, 211, 238, 0.4)",
      items: skills.webFrameworks
    },
    {
      id: "databases",
      title: "Databases",
      description: "Relational, document-based, and serverless data storage systems.",
      icon: <Database className="w-4 h-4" />,
      color: "text-purple-400",
      borderColor: "hover:border-purple-400/30",
      accentBg: "bg-purple-400/5",
      accentColor: "rgba(167, 139, 250, 0.4)",
      items: skills.databases
    },
    {
      id: "aiml",
      title: "AI / Machine Learning",
      description: "Libraries and tools for natural language processing, deep learning, and data computation.",
      icon: <BrainCircuit className="w-4 h-4" />,
      color: "text-red-400",
      borderColor: "hover:border-red-400/30",
      accentBg: "bg-red-400/5",
      accentColor: "rgba(248, 113, 113, 0.4)",
      items: skills.aiml
    },
    {
      id: "toolsCloud",
      title: "Tools & DevOps",
      description: "Development tools, containerization, cloud hosting, and orchestration systems.",
      icon: <Wrench className="w-4 h-4" />,
      color: "text-emerald-400",
      borderColor: "hover:border-emerald-400/30",
      accentBg: "bg-emerald-400/5",
      accentColor: "rgba(52, 211, 153, 0.4)",
      items: skills.toolsCloud
    }
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-8 font-sans">
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-6">
        <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">Forge</h1>
        <p className="text-xs md:text-sm text-text-secondary max-w-xl leading-relaxed">
          Languages, frameworks, databases, and development tools I work with.
        </p>
      </ScrollReveal>

      {/* Tabs list */}
      <ScrollReveal delay={100}>
        <div className="flex flex-wrap gap-2 border-b border-border/40 pb-4 font-mono text-xs">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-accent/10 text-accent border-accent/20 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.08)]"
                    : "border-border/60 text-text-secondary hover:text-text-primary hover:border-border"
                }`}
              >
                {cat.icon}
                <span>{cat.title.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Selected Category Details & Badges */}
      <ScrollReveal delay={200} key={activeTab}>
        <div className="rounded-2xl glass p-6 md:p-8 border border-border flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/[0.015] to-transparent" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/55 pb-5">
            <div className="flex flex-col gap-1.5">
              <h3 className={`text-xl font-bold font-comfortaa ${activeCategory.color} flex items-center gap-2`}>
                {activeCategory.icon}
                <span>{activeCategory.title}</span>
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed max-w-xl font-sans">
                {activeCategory.description}
              </p>
            </div>
            {/* Skill count badge */}
            <div className="px-3.5 py-1.5 rounded-xl bg-card border border-border text-[10px] font-mono text-text-muted flex items-center justify-center self-start sm:self-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full`} style={{ backgroundColor: activeCategory.accentColor }} />
              <span>{activeCategory.items.length} SKILLS</span>
            </div>
          </div>

          {/* Badges Flex Grid */}
          <div className="flex flex-wrap gap-3 pt-2">
            {activeCategory.items.map((skill, idx) => (
              <div
                key={skill.name}
                className={`px-4 py-3 rounded-xl bg-card border border-border/60 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.02)] flex items-center gap-3 group cursor-default ${activeCategory.borderColor}`}
              >
                {/* Visual Level indicator dot */}
                <div className="relative w-2 h-2 flex items-center justify-center">
                  <span className="absolute w-2 h-2 rounded-full opacity-35 group-hover:animate-ping" style={{ backgroundColor: activeCategory.accentColor }} />
                  <span className="relative w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeCategory.accentColor }} />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-mono font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[9px] font-mono text-text-muted">
                    {skill.level}% proficiency
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
