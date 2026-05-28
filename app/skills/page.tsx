"use client";

import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function SkillsPage() {
  const categories = [
    { title: "Languages", key: "languages", color: "text-accent", barColor: "bg-accent" },
    { title: "Web & Frameworks", key: "webFrameworks", color: "text-cyan-400", barColor: "bg-cyan-400" },
    { title: "Databases", key: "databases", color: "text-purple-400", barColor: "bg-purple-400" },
    { title: "AI / Machine Learning", key: "aiml", color: "text-red-400", barColor: "bg-red-400" },
    { title: "Tools & DevOps", key: "toolsCloud", color: "text-emerald-400", barColor: "bg-emerald-400" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12">
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-8">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase font-semibold">TECHNICAL ARMAMENT</span>
        <h1 className="text-4xl md:text-6xl font-bold font-comfortaa text-white leading-tight">The Forge</h1>
        <p className="text-sm text-text-secondary max-w-xl leading-relaxed font-sans">
          A granular breakdown of languages, frameworks, systems, and deployment standards in my technical vocabulary.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, catIdx) => {
          const items = skills[cat.key as keyof typeof skills];
          return (
            <ScrollReveal
              key={cat.title}
              delay={catIdx * 100}
              className="rounded-2xl glass p-6 flex flex-col gap-6 hover:border-accent-border/20 transition-all duration-300 hover:bg-card-hover"
            >
              <h3 className={`text-lg font-bold font-comfortaa ${cat.color} border-b border-border pb-2.5`}>
                {cat.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                {items.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5 group">
                    <div className="flex justify-between items-center font-mono text-xs">
                      <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-text-muted">{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${cat.barColor} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
