"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { skillGroups } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const projectLinks: Record<string, string> = {
  CollabDocs: "/projects",
  SkimLit: "/projects",
  RecallAI: "/projects",
};

const groupMeta: Record<string, { color: string; short: string }> = {
  frontend: { color: "#0891b2", short: "FE" },
  backend: { color: "#0d9488", short: "API" },
  aiml: { color: "#7c3aed", short: "AI" },
  data: { color: "#e11d48", short: "DB" },
  devops: { color: "#d97706", short: "OPS" },
  tooling: { color: "#059669", short: "QA" },
};

const nodeLayout = [
  { x: 18, y: 18, scale: 1.08, shade: "muted" },
  { x: 70, y: 13, scale: 0.95, shade: "strong" },
  { x: 84, y: 30, scale: 1.04, shade: "muted" },
  { x: 52, y: 24, scale: 0.95, shade: "strong" },
  { x: 32, y: 38, scale: 0.88, shade: "strong" },
  { x: 16, y: 48, scale: 1.02, shade: "muted" },
  { x: 68, y: 49, scale: 0.92, shade: "strong" },
  { x: 41, y: 61, scale: 0.94, shade: "strong" },
  { x: 62, y: 69, scale: 0.9, shade: "strong" },
  { x: 25, y: 72, scale: 1, shade: "strong" },
  { x: 77, y: 72, scale: 1.05, shade: "muted" },
  { x: 39, y: 82, scale: 0.9, shade: "strong" },
  { x: 56, y: 80, scale: 0.9, shade: "strong" },
  { x: 12, y: 82, scale: 0.92, shade: "muted" },
  { x: 87, y: 56, scale: 1, shade: "muted" },
  { x: 72, y: 34, scale: 0.88, shade: "strong" },
  { x: 48, y: 45, scale: 0.92, shade: "strong" },
  { x: 58, y: 35, scale: 0.88, shade: "strong" },
  { x: 28, y: 25, scale: 0.94, shade: "muted" },
  { x: 20, y: 64, scale: 0.95, shade: "strong" },
  { x: 82, y: 15, scale: 0.92, shade: "muted" },
  { x: 75, y: 84, scale: 0.92, shade: "strong" },
  { x: 46, y: 15, scale: 0.9, shade: "strong" },
  { x: 31, y: 88, scale: 0.9, shade: "muted" },
  { x: 88, y: 42, scale: 0.88, shade: "muted" },
  { x: 64, y: 22, scale: 0.84, shade: "strong" },
  { x: 49, y: 72, scale: 0.86, shade: "strong" },
] as const;

const nodeOverrides: Record<string, { x: number; y: number; scale: number; shade: "muted" | "strong"; color?: string; short?: string; priority?: boolean }> = {
  "Streamlit dashboards": {
    x: 16,
    y: 62,
    scale: 1.08,
    shade: "strong",
    color: "#ff4b4b",
    short: "ST",
    priority: true,
  },
};

export default function SkillsPage() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<string>("all");

  const skillNodes = useMemo(
    () =>
      skillGroups.flatMap((group, groupIndex) =>
        group.items.map((item, itemIndex) => {
          const layout = nodeLayout[(groupIndex * 5 + itemIndex) % nodeLayout.length];
          const override = nodeOverrides[item.name];
          const meta = groupMeta[group.id] ?? { color: group.color, short: "SK" };

          return {
            ...layout,
            ...override,
            id: `${group.id}-${item.name}`,
            name: item.name
              .replace("Convex (serverless)", "Convex")
              .replace("Clerk (auth)", "Clerk")
              .replace("Kubernetes (basics)", "Kubernetes")
              .replace("AWS (EC2, S3, RDS)", "AWS"),
            groupId: group.id,
            groupTitle: group.title,
            color: override?.color ?? meta.color,
            short: override?.short ?? meta.short,
            priority: Boolean(override?.priority),
            projects: item.projects,
          };
        })
      ),
    []
  );

  const activeGroup = selectedGroup === "all" ? null : selectedGroup;
  const focusedGroup = hoveredGroup ?? activeGroup;
  const selectedSkillGroup = skillGroups.find((group) => group.id === activeGroup);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-5">
      <ScrollReveal>
        <SectionHeader
          eyebrow="Technical skills"
          title="Skills"
          description="A map of the technologies I use across frontend systems, backend APIs, AI workflows, data, cloud, and tooling."
          titleClassName="page-title"
        />
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedGroup("all")}
            className={`rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors focus-ring ${
              selectedGroup === "all"
                ? "border-accent/40 bg-accent/10 text-accent shadow-sm"
                : "border-border bg-card text-text-secondary hover:bg-card-hover hover:text-text-primary"
            }`}
          >
            All
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedGroup(group.id)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors focus-ring ${
                selectedGroup === group.id
                  ? "bg-card-hover text-text-primary shadow-sm"
                  : "border-border bg-card text-text-secondary hover:bg-card-hover hover:text-text-primary"
              }`}
              style={{
                borderColor: selectedGroup === group.id ? `${groupMeta[group.id]?.color ?? group.color}66` : undefined,
                color: selectedGroup === group.id ? groupMeta[group.id]?.color ?? group.color : undefined,
              }}
            >
              {group.title}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <section className="relative min-h-[560px] overflow-hidden rounded-lg border border-border bg-card/45 shadow-card md:min-h-[660px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,208,225,0.18),transparent_38%)]" />
          <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(8,126,164,0.22)_1px,transparent_1px)] [background-size:32px_32px]" />

          <svg
            viewBox="0 0 1000 620"
            className="absolute left-1/2 top-1/2 h-[78%] max-h-[560px] w-[78%] max-w-[760px] -translate-x-1/2 -translate-y-1/2 overflow-visible text-cyan-400/40"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="skill-globe-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.35" />
                <stop offset="55%" stopColor="#67e8f9" stopOpacity="0.09" />
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="500" cy="310" r="246" fill="url(#skill-globe-glow)" />
            <circle cx="500" cy="310" r="246" fill="none" stroke="currentColor" strokeWidth="1" />
            {[70, 120, 170, 220].map((rx) => (
              <ellipse key={`vertical-${rx}`} cx="500" cy="310" rx={rx} ry="246" fill="none" stroke="currentColor" strokeWidth="1" />
            ))}
            {[58, 112, 166, 220].map((ry) => (
              <ellipse key={`horizontal-${ry}`} cx="500" cy="310" rx="246" ry={ry} fill="none" stroke="currentColor" strokeWidth="1" />
            ))}
            <path d="M254 310 C360 250 640 250 746 310" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M254 310 C360 370 640 370 746 310" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="500" y1="64" x2="500" y2="556" stroke="currentColor" strokeWidth="1" />
            <line x1="254" y1="310" x2="746" y2="310" stroke="currentColor" strokeWidth="1" />

            {skillNodes.slice(0, 18).map((node) => (
              <line
                key={`line-${node.id}`}
                x1="500"
                y1="310"
                x2={node.x * 10}
                y2={node.y * 6.2}
                stroke={node.color}
                strokeOpacity={focusedGroup && focusedGroup !== node.groupId ? 0.04 : 0.12}
                strokeWidth="1"
              />
            ))}
          </svg>

          <div className="absolute inset-0">
            {skillNodes.map((node, index) => {
              const isActive = !focusedGroup || focusedGroup === node.groupId;
              const isDimmed = !isActive;
              const href = node.projects.length > 0 ? projectLinks[node.projects[0]] ?? "/projects" : undefined;
              const chip = (
                <span
                  className={`group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold shadow-md backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${
                    node.shade === "muted" ? "bg-slate-700/45" : "bg-slate-950/82"
                  } ${node.priority && isActive ? "ring-2 ring-white/35" : ""} ${isDimmed ? "opacity-25 grayscale" : "opacity-100"}`}
                  style={{
                    borderColor: `${node.color}66`,
                    color: node.color,
                    boxShadow: `0 14px 32px ${node.color}1f`,
                    transform: `translate(-50%, -50%) scale(${node.scale})`,
                  }}
                  onMouseEnter={() => setHoveredGroup(node.groupId)}
                  onMouseLeave={() => setHoveredGroup(null)}
                >
                  <span
                    className="grid h-6 w-6 place-items-center rounded-full text-[10px] font-black text-white"
                    style={{ backgroundColor: node.color }}
                  >
                    {node.short}
                  </span>
                  <span className="whitespace-nowrap">{node.name}</span>
                </span>
              );

              return (
                <div
                  key={node.id}
                  className="absolute"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    zIndex: node.priority ? 80 : node.shade === "muted" ? 10 : 20 + index,
                  }}
                  title={`${node.groupTitle}${node.projects.length ? ` - ${node.projects.join(", ")}` : ""}`}
                >
                  {href ? (
                    <Link href={href} aria-label={`${node.name} used in ${node.projects.join(", ")}`}>
                      {chip}
                    </Link>
                  ) : (
                    chip
                  )}
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/35 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/65 backdrop-blur-md">
            Hover or filter skills to focus domains
          </div>
        </section>
      </ScrollReveal>

      {selectedSkillGroup && (
        <ScrollReveal delay={160}>
          <section className="rounded-lg border border-border bg-card p-4 shadow-card">
            <div className="flex flex-col gap-1">
              <span className="section-eyebrow !mb-0">Focused domain</span>
              <h2 className="font-display text-xl font-bold text-text-primary">{selectedSkillGroup.title}</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {selectedSkillGroup.items.map((item) => (
                <div key={item.name} className="rounded-lg border border-border bg-bg/40 p-3">
                  <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.projects.length > 0 ? (
                      item.projects.map((project) => (
                        <Link
                          key={project}
                          href={projectLinks[project] ?? "/projects"}
                          className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent"
                        >
                          {project}
                        </Link>
                      ))
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                        Studied / practiced
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  );
}
