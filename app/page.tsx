"use client";

import { personalData, flagshipProjects } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FileText,
  ArrowRight,
  Github,
  ExternalLink,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
} from "lucide-react";

const coreTech = [
  { label: "Next.js / TypeScript", color: "#6366f1" },
  { label: "Python / FastAPI / Django", color: "#06b6d4" },
  { label: "AI/ML / TensorFlow", color: "#10b981" },
  { label: "Cloud / Docker / PostgreSQL", color: "#f59e0b" },
];

const focusAreas = [
  "Real-Time Collaborative Systems",
  "Applied Machine Learning Pipelines",
  "Async Architecture & Queue Systems",
  "Production Backends",
];

const identityFacts = [
  { label: "Profile", value: personalData.title, icon: BriefcaseBusiness },
  { label: "Education", value: "MCA - BIT Mesra", icon: GraduationCap },
  { label: "Location", value: personalData.location, icon: MapPin },
];

const projectVisuals: Record<string, string[]> = {
  CollabDocs: ["Editor", "CRDT", "AI"],
  SkimLit: ["Abstract", "Model", "Labels"],
  RecallAI: ["Audio", "Queue", "Search"],
};

const keyCapabilities = [
  "Real-time multi-user document collaboration with Y.js CRDT synchronization",
  "Multi-input medical NLP classification model trained on PubMed RCT datasets",
  "Asynchronous meeting transcription processing with Redis task queues & semantic search",
  "Production backend implementations with automated testing and containerized deployments",
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-8">

      {/* -- Hero ------------------------------------------- */}
      <section className="relative min-h-[50vh] md:min-h-[56vh] flex items-center justify-center overflow-hidden px-6 py-8">
        <div className="relative z-10 max-w-5xl mx-auto grid items-center gap-8 px-2 md:grid-cols-[1.25fr_0.75fr]">
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">

          <ScrollReveal delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-mono font-semibold text-accent shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Available for Internship &amp; Full-Time Engineering Roles</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-text-primary">
              Building{" "}
              <span className="bg-gradient-to-r from-accent via-indigo-400 to-accent-2 bg-clip-text text-transparent">
                collaborative systems
              </span>
              , backends, and{" "}
              <span className="text-accent-2">applied ML models</span>.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              MCA Student at BIT Mesra. Architecting real-time multi-user web applications,
              asynchronous backend platforms, and medical NLP model pipelines.
            </p>
          </ScrollReveal>

          {/* CTA row */}
          <ScrollReveal delay={350} className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button variant="primary" href="/projects">
              Explore Projects
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

          {/* Tech stack row */}
          <ScrollReveal delay={450} className="flex flex-wrap justify-center gap-2 md:justify-start">
            {coreTech.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono font-medium shadow-sm backdrop-blur transition-transform hover:scale-105"
                style={{
                  borderColor: `${pill.color}44`,
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

          <ScrollReveal delay={220}>
            <aside className="mx-auto w-full max-w-sm rounded-2xl border border-accent/20 bg-card/85 p-5 text-left shadow-card-hover backdrop-blur relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/20 transition-all" />

              <div className="flex flex-col gap-1 border-b border-border pb-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent font-bold">
                    Identity &bull; BIT Mesra
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-semibold">
                    MCA Student
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-text-primary mt-1">
                  {personalData.name}
                </h2>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Full-stack developer building real-time collaboration engines and applied AI systems.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {identityFacts.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent flex-shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                        {label}
                      </p>
                      <p className="truncate text-xs font-semibold text-text-primary">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal className="mx-auto w-full max-w-5xl px-6">
        <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-card/80 shadow-card sm:grid-cols-4">
          {focusAreas.map((area, idx) => (
            <div
              key={area}
              className="flex items-center justify-center gap-2 border-b border-r border-border px-3 py-3 last:border-r-0 sm:border-b-0 text-center"
            >
              <span
                className="h-2 w-2 rounded-full flex-shrink-0"
                style={{
                  backgroundColor:
                    idx % 3 === 0
                      ? "var(--accent)"
                      : idx % 3 === 1
                        ? "var(--accent-2)"
                        : "var(--accent-3)",
                }}
              />
              <span className="font-mono text-[11px] font-semibold tracking-wide text-text-secondary">
                {area}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* -- Flagship Projects ----------------------------- */}
      <section className="px-6 py-2 max-w-5xl mx-auto w-full">
        <ScrollReveal className="mb-5">
          <SectionHeader
            eyebrow="Key Projects"
            title="Featured Engineering Work"
            description="Deep-dive case studies into real-time CRDT editors, NLP classification, and asynchronous task architectures."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {flagshipProjects.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 100}>
              <a
                href={`/projects/${project.slug}`}
                className="block h-full group"
                aria-label={`${project.title} case study`}
              >
                <Card hover className="h-full flex flex-col gap-3 !p-4">
                  {/* Accent bar */}
                  <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: project.accent }} />

                  <div
                    className="grid grid-cols-3 gap-1.5 rounded-lg border p-2"
                    style={{
                      borderColor: `${project.accent}24`,
                      background: `${project.accent}08`,
                    }}
                  >
                    {(projectVisuals[project.title] ?? project.tags.slice(0, 3)).map((item) => (
                      <span
                        key={item}
                        className="rounded-md border bg-card/75 px-2 py-2 text-center font-mono text-[10px] font-semibold text-text-secondary"
                        style={{ borderColor: `${project.accent}26` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">{project.date}</span>
                      <h3 className="text-text-primary font-semibold text-base leading-snug group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-text-secondary text-xs leading-relaxed flex-1">
                    {project.problem ?? project.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="rounded-md border border-border bg-bg/40 p-2">
                      <span className="font-mono uppercase tracking-[0.14em] text-text-muted">
                        Architecture
                      </span>
                      <p className="mt-1 line-clamp-2 text-text-secondary">{project.tags[0]}</p>
                    </div>
                    <div className="rounded-md border border-border bg-bg/40 p-2">
                      <span className="font-mono uppercase tracking-[0.14em] text-text-muted">
                        Impact
                      </span>
                      <p className="mt-1 line-clamp-2 text-text-secondary">{project.impact}</p>
                    </div>
                  </div>

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

        <ScrollReveal className="flex justify-center mt-6">
          <Button variant="pill-primary" href="/projects">
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-2">
        <ScrollReveal className="mb-5">
          <SectionHeader eyebrow="Overview" title="Key Architectural Highlights" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 gap-3 rounded-lg border border-border bg-card/70 p-4 shadow-card md:grid-cols-2">
            {keyCapabilities.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-bg/40 p-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <p className="text-sm font-medium leading-relaxed text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
