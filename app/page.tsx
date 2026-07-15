"use client";

import { personalData, projects } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FileText,
  ArrowRight,
  Github,
  Mail,
  Linkedin,
  ExternalLink,
} from "lucide-react";

const credibilityPills = [
  { label: "Next.js / TypeScript", color: "#22d3ee" },
  { label: "Python / FastAPI / Django", color: "#14b8a6" },
  { label: "AI/ML / TensorFlow", color: "#a78bfa" },
  { label: "Cloud / Docker / AWS", color: "#f59e0b" },
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-20">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-16 px-6">
        {/* Subtle background dot grid inherited from layout */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-6 px-4">

          <ScrollReveal delay={50}>
            <span className="section-eyebrow">Full-Stack &amp; AI Engineer</span>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-text-primary">
              Building{" "}
              <span className="text-accent">collaborative systems</span>,{" "}
              backend platforms, and{" "}
              <span className="text-accent">applied ML products</span>.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              Graduate student at BIT Mesra. I build real-time web apps,
              NLP pipelines, and systems software — with a focus on
              correctness, clean architecture, and proof-of-work projects.
            </p>
          </ScrollReveal>

          {/* CTA row */}
          <ScrollReveal delay={350} className="flex flex-wrap justify-center gap-3">
            <Button variant="primary" href="/projects">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" href={personalData.github} external>
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="secondary" href={personalData.resumeUrl} external>
              <FileText className="w-4 h-4" />
              Resume
            </Button>
          </ScrollReveal>

          {/* Credibility tech row */}
          <ScrollReveal delay={450} className="flex flex-wrap justify-center gap-2 pt-2">
            {credibilityPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-medium"
                style={{
                  borderColor: `${pill.color}40`,
                  color: pill.color,
                  background: `${pill.color}0d`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: pill.color }} />
                {pill.label}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section className="py-4 px-6 max-w-5xl mx-auto w-full">
        <ScrollReveal className="mb-8">
          <SectionHeader eyebrow="Featured work" title="Projects" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 100}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
                aria-label={`${project.title} on GitHub`}
              >
                <Card hover className="h-full flex flex-col gap-3 !p-5">
                  {/* Accent bar */}
                  <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: project.accent }} />

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">{project.date}</span>
                      <h3 className="text-text-primary font-semibold text-base leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-text-secondary text-xs leading-relaxed flex-1">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="flex justify-center mt-8">
          <Button variant="pill-primary" href="/projects">
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </section>

      {/* ── About snapshot ────────────────────────────────── */}
      <section className="py-4 px-6 max-w-5xl mx-auto w-full">
        <ScrollReveal className="mb-8">
          <SectionHeader eyebrow="Who I am" title="About me" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal delay={100}>
            <Card className="flex flex-col gap-4">
              <p className="text-text-muted text-xs font-mono tracking-wider uppercase">Engineering focus</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                I build real-time collaborative tools, scalable backend services, and NLP/ML pipelines.
                My projects prioritize correctness, modularity, and clear API boundaries — not just
                making things work, but understanding why they work.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Currently improving depth in distributed systems, ML model deployment, and advanced
                algorithm design through coursework at BIT Mesra.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="flex flex-col gap-4">
              <p className="text-text-muted text-xs font-mono tracking-wider uppercase">Contact</p>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-2">{personalData.email}</span>
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                >
                  <Github className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-2">github.com/Shubham37204</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="group-hover:underline underline-offset-2">LinkedIn Profile</span>
                </a>
              </div>
              <div className="pt-2 border-t border-border mt-auto">
                <span className="text-xs text-text-muted font-mono">
                  {personalData.location} &nbsp;&middot;&nbsp; GMT+5:30
                </span>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal className="flex justify-center mt-8">
          <Button variant="pill-primary" href="/about">
            About me
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </section>

    </div>
  );
}
