"use client";

import { experienceTimeline } from "@/lib/experience";
import Timeline from "@/components/Timeline";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const statCards = [
  {
    icon: GraduationCap,
    label: "Current Status",
    value: "MCA Student",
    detail: "Birla Institute of Technology, Mesra",
    accent: "#087ea4",
  },
  {
    icon: Briefcase,
    label: "Open To",
    value: "Internships & Roles",
    detail: "Full-Stack / AI/ML / Backend",
    accent: "#22c55e",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ranchi, India",
    detail: "Open to remote & relocate",
    accent: "#f59e0b",
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-5 flex flex-col gap-8">
      {/* Page Header */}
      <ScrollReveal>
        <SectionHeader
          eyebrow="My Story"
          title="Experience & Timeline"
          description="A chronological look at my engineering journey — from BCA fundamentals to building real-time collaborative systems, NLP pipelines, and AI-powered developer tools."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Stat Cards */}
      <ScrollReveal delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {statCards.map(({ icon: Icon, label, value, detail, accent }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-4 flex flex-col gap-2 shadow-card"
              style={{ borderTopColor: accent, borderTopWidth: "2px" }}
            >
              <div
                className="w-8 h-8 rounded-lg grid place-items-center"
                style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
              >
                <Icon className="w-4 h-4" style={{ color: accent }} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                  {label}
                </p>
                <p className="text-sm font-bold font-display text-text-primary mt-0.5">
                  {value}
                </p>
                <p className="text-xs text-text-secondary mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Timeline */}
      <ScrollReveal delay={150}>
        <Timeline items={experienceTimeline} />
      </ScrollReveal>

      {/* Bottom CTA */}
      <ScrollReveal delay={200}>
        <div className="rounded-xl border border-accent/20 bg-accent/05 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="font-display font-bold text-text-primary text-base">
              Currently open to internships &amp; full-time roles
            </p>
            <p className="text-xs text-text-secondary">
              Full-Stack Engineering · AI/ML Engineering · Backend Systems
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/shubham-bhardwaj-83028b212/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent text-bg px-4 py-2 text-xs font-semibold hover:brightness-110 transition-all"
            >
              Connect on LinkedIn
            </a>
            <a
              href="mailto:shubhambhardwaj9575@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-all"
            >
              Email Me
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
