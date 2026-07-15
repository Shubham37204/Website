"use client";

import { skillGroups } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

// Map project names to their routes
const projectLinks: Record<string, string> = {
  CollabDocs: "/projects",
  SkimLit: "/projects",
  MyGit: "/projects",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-8">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Technical skills"
          title="Skills"
          description="Technologies and tools I have applied in real projects — grouped by discipline and linked to where they appear in my work."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Skill groups grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, idx) => (
          <ScrollReveal key={group.id} delay={idx * 80}>
            <div className="flex flex-col rounded-xl border border-border bg-card shadow-card h-full overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:[border-color:var(--accent-border)]">
              {/* Colored top bar */}
              <div className="h-0.5 w-full" style={{ backgroundColor: group.color }} />

              <div className="flex flex-col gap-4 p-5 flex-1">
                {/* Header */}
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: group.color }}
                  />
                  <h2
                    className="text-sm font-bold font-display tracking-tight"
                    style={{ color: group.color }}
                  >
                    {group.title}
                  </h2>
                </div>

                {/* Skills list */}
                <ul className="flex flex-col gap-3 flex-1">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-text-primary leading-snug">
                        {item.name}
                      </span>
                      {item.projects.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {item.projects.map((proj) => (
                            <Link
                              key={proj}
                              href={projectLinks[proj] ?? "/projects"}
                              className="inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-mono font-medium transition-colors"
                              style={{
                                color: group.color,
                                background: `${group.color}15`,
                                borderRadius: "4px",
                              }}
                            >
                              ↳ {proj}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <span className="text-[10px] font-mono text-text-muted">
                          studied / applied in practice
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Footer note */}
      <ScrollReveal>
        <p className="text-center text-xs text-text-muted font-mono leading-relaxed max-w-2xl mx-auto pt-2">
          Skills without a project link are studied through coursework, personal experiments, or professional reading.
          Project-linked skills have applied usage with working code.
        </p>
      </ScrollReveal>
    </div>
  );
}
