"use client";

import { personalData, achievements, education } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Trophy,
  ArrowRight,
  BookOpen,
  Layers,
  Wrench,
  Terminal,
  FlaskConical,
  Code2,
  BrainCircuit,
  Cpu,
  Globe,
} from "lucide-react";

const techStack = {
  Languages: { items: ["Python", "TypeScript", "JavaScript"], icon: Code2, color: "#087ea4" },
  "Web & APIs": { items: ["Next.js", "React", "FastAPI", "Django"], icon: Globe, color: "#14b8a6" },
  "AI / ML": { items: ["TensorFlow", "Scikit-learn", "LangChain", "spaCy", "Groq AI"], icon: BrainCircuit, color: "#a78bfa" },
  "Cloud & Infra": { items: ["Docker", "AWS", "Vercel", "Convex"], icon: Cpu, color: "#f59e0b" },
};

const values = [
  {
    icon: Layers,
    title: "What I build",
    color: "#14b8a6",
    body: "Real-time collaborative tools with CRDT sync, NLP classifiers with hybrid neural architectures, and meeting intelligence pipelines with vector search. I'm drawn to problems where the architecture matters as much as the feature — where a wrong design choice surfaces as a bug three weeks later.",
  },
  {
    icon: Wrench,
    title: "How I engineer",
    color: "#a78bfa",
    body: "I write code as if the next reader is a stranger. Typed interfaces, modular functions, tests that document intent. In RecallAI I built queue-based audio workers so the API never blocks. In CollabDocs I used Convex subscriptions instead of polling so document state stays correct by design rather than by hope.",
  },
  {
    icon: Terminal,
    title: "What I'm improving",
    color: "#f59e0b",
    body: "Distributed systems fundamentals — consensus, replication, and CAP trade-offs. Deeper ML deployment workflows including ONNX export and model serving. High-traffic backend system design. Currently working through Designing Data-Intensive Applications and Stanford CS229 material alongside coursework.",
  },
  {
    icon: FlaskConical,
    title: "How I think about projects",
    color: "#22c55e",
    body: "I intentionally pick projects with different architecture problems each time — real-time document sync, medical NLP, speech-to-text pipelines — so each one teaches a different layer of the stack. The goal is breadth of real problems solved, not breadth of frameworks installed.",
  },
];

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Ranchi, Jharkhand, India", color: "#087ea4" },
  { icon: GraduationCap, label: "Program", value: "MCA — BIT Mesra (2024 – Present)", color: "#a78bfa" },
  { icon: BookOpen, label: "Background", value: "BCA — BIT Mesra, 8.0 CGPA (2021 – 2024)", color: "#14b8a6" },
  { icon: Globe, label: "Timezone", value: "GMT +5:30 (IST)", color: "#f59e0b" },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col gap-10">

      {/* Page header */}
      <ScrollReveal>
        <SectionHeader
          eyebrow="About Me"
          title="Who I am"
          description="A builder who cares about correctness, clear architecture, and projects that solve real problems — not just demos."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Hero Identity Grid */}
      <ScrollReveal delay={80}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-start">
          {/* Bio block */}
          <div className="rounded-xl border border-border bg-card p-6 flex flex-col gap-4 shadow-card">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 grid place-items-center text-accent flex-shrink-0">
                <span className="text-xl font-bold font-display">S</span>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-text-primary">{personalData.name}</h2>
                <p className="text-xs text-text-secondary font-mono">{personalData.title}</p>
              </div>
            </div>

            <p className="text-sm text-text-secondary leading-relaxed">
              I&apos;m an MCA student at BIT Mesra building toward full-stack and AI engineering roles.
              My goal isn&apos;t to use the most technologies — it&apos;s to build projects that prove I
              can reason about systems end to end, from data model decisions to UI architecture to
              deployment constraints.
            </p>

            <p className="text-sm text-text-secondary leading-relaxed">
              Most of my projects live at the intersection of real-time systems and machine learning.
              CollabDocs taught me CRDT convergence and serverless state. SkimLit taught me
              multi-input model design and inference latency tradeoffs. RecallAI taught me async
              worker patterns and vector database chunking strategies.
            </p>

            <p className="text-sm text-accent font-medium">
              Currently open to internships and full-time roles in Full-Stack, AI/ML, or Backend Engineering.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 pt-1 border-t border-border">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card-hover text-xs font-medium text-text-secondary hover:text-accent hover:border-accent transition-all"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card-hover text-xs font-medium text-text-secondary hover:text-accent hover:border-accent transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card-hover text-xs font-medium text-text-secondary hover:text-accent hover:border-accent transition-all"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </div>

          {/* Quick facts sidebar */}
          <div className="flex flex-col gap-2.5 md:w-56">
            {quickFacts.map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-card p-3.5 flex items-start gap-3 shadow-card"
              >
                <div
                  className="w-8 h-8 rounded-lg grid place-items-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted">{label}</p>
                  <p className="text-xs font-medium text-text-primary leading-snug mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Tech Stack I Use Daily */}
      <ScrollReveal delay={120}>
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-text-primary">
            What I work with daily
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(techStack).map(([group, { items, icon: Icon, color }]) => (
              <div
                key={group}
                className="rounded-xl border border-border bg-card p-4 flex flex-col gap-3 shadow-card"
                style={{ borderTopColor: color, borderTopWidth: "2px" }}
              >
                <div className="flex items-center gap-2" style={{ color }}>
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">{group}</span>
                </div>
                <ul className="flex flex-col gap-1">
                  {items.map((item) => (
                    <li key={item} className="text-xs text-text-secondary font-mono">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Engineering perspective — 4 pillars */}
      <ScrollReveal delay={150}>
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-text-primary">
            How I think about engineering
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} delay={idx * 60}>
                  <Card accentTop={v.color} className="flex flex-col gap-3 h-full">
                    <div className="flex items-center gap-2" style={{ color: v.color }}>
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <h3 className="text-xs font-mono font-semibold uppercase tracking-wider">
                        {v.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{v.body}</p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal delay={180}>
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-text-primary flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" />
            Education
          </h2>
          <div className="flex flex-col gap-0 border-l-2 border-accent/30 pl-6 ml-2">
            {education.map((edu, idx) => (
              <ScrollReveal key={edu.degree} delay={idx * 80} className="pb-5 last:pb-0">
                <Card className="!p-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">
                      {edu.period}
                    </span>
                    <h3 className="text-sm font-bold font-display text-text-primary">{edu.degree}</h3>
                    <p className="text-xs text-text-secondary font-mono">
                      {edu.institution} &bull; {edu.location}
                    </p>
                    <ul className="flex flex-col gap-1.5 mt-1.5">
                      {edu.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-text-secondary flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-accent flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Achievements */}
      {achievements.length > 0 && (
        <ScrollReveal delay={200}>
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-bold text-text-primary flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              Achievements
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((ach, idx) => (
                <ScrollReveal key={ach.title} delay={idx * 80}>
                  <Card className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex-shrink-0 text-amber-500">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-sm font-bold font-display text-text-primary">{ach.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{ach.description}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Bottom CTA */}
      <ScrollReveal delay={220} className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Button variant="primary" href={personalData.resumeUrl} external>
          Download Resume
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button variant="secondary" href="/credentials">
          View Credentials
          <ArrowRight className="w-4 h-4" />
        </Button>
      </ScrollReveal>
    </div>
  );
}
