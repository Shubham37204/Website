"use client";

import { useState } from "react";
import { ExperienceItem } from "@/lib/types";
import Link from "next/link";
import {
  GraduationCap,
  FolderGit2,
  Award,
  Briefcase,
  ExternalLink,
} from "lucide-react";

interface TimelineProps {
  items: ExperienceItem[];
}

const categoryConfig = {
  education: {
    icon: GraduationCap,
    label: "Education",
    dot: "bg-sky-500",
    border: "border-sky-500/30",
    bg: "bg-sky-500/08",
    text: "text-sky-400",
  },
  project: {
    icon: FolderGit2,
    label: "Project",
    dot: "bg-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/08",
    text: "text-amber-400",
  },
  certification: {
    icon: Award,
    label: "Certification",
    dot: "bg-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/08",
    text: "text-emerald-400",
  },
  experience: {
    icon: Briefcase,
    label: "Experience",
    dot: "bg-violet-400",
    border: "border-violet-400/30",
    bg: "bg-violet-400/08",
    text: "text-violet-400",
  },
};

const filterTabs = [
  { id: "all", label: "All" },
  { id: "education", label: "Education" },
  { id: "project", label: "Projects" },
  { id: "certification", label: "Certifications" },
  { id: "experience", label: "Experience" },
];

export default function Timeline({ items }: TimelineProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col gap-6">
      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 ${
                isActive
                  ? "bg-accent text-bg font-semibold shadow-sm"
                  : "bg-card border border-border text-text-secondary hover:text-text-primary hover:bg-card-hover"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Timeline Items */}
      <div className="relative flex flex-col">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" aria-hidden="true" />

        <div className="flex flex-col gap-0">
          {filtered.map((item, idx) => {
            const cfg = categoryConfig[item.category];
            const Icon = cfg.icon;
            const isLast = idx === filtered.length - 1;

            return (
              <div key={item.id} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Dot */}
                <div
                  className={`relative z-10 mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 bg-bg ${cfg.border}`}
                  style={item.accentColor ? { borderColor: `${item.accentColor}60` } : {}}
                >
                  <Icon
                    className="w-4 h-4"
                    style={item.accentColor ? { color: item.accentColor } : {}}
                  />
                </div>

                {/* Card Content */}
                <div
                  className={`flex-1 rounded-xl border p-4 shadow-sm transition-all duration-200 hover:shadow-card ${isLast ? "" : ""}`}
                  style={{
                    borderColor: item.accentColor ? `${item.accentColor}25` : undefined,
                    background: item.accentColor ? `${item.accentColor}05` : undefined,
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider border ${cfg.border} ${cfg.bg} ${cfg.text}`}
                        >
                          {cfg.label}
                        </span>
                        <span className="text-[10px] font-mono text-text-muted">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-text-primary mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-medium text-text-secondary">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights.length > 0 && (
                    <ul className="flex flex-col gap-1.5 mb-3">
                      {item.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-text-secondary"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                            style={{
                              backgroundColor: item.accentColor ?? "var(--accent)",
                            }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link */}
                  {item.techOrLink && (
                    <div className="pt-2 border-t border-border/60">
                      {item.techOrLink.url ? (
                        <Link
                          href={item.techOrLink.url}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold transition-colors hover:underline"
                          style={{ color: item.accentColor ?? "var(--accent)" }}
                          target={item.techOrLink.url.startsWith("http") ? "_blank" : undefined}
                          rel={item.techOrLink.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {item.techOrLink.label}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ) : (
                        <span className="text-xs font-mono text-text-muted">
                          {item.techOrLink.label}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-text-muted text-sm font-mono">
            No items for this filter.
          </div>
        )}
      </div>
    </div>
  );
}
