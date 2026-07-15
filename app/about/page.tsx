"use client";

import { personalData, achievements, education } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { BookOpen, Trophy, ArrowRight, Terminal, Layers, Wrench } from "lucide-react";

const engineeringPillars = [
  {
    icon: Layers,
    title: "Systems I like building",
    color: "#14b8a6",
    content:
      "Real-time collaborative tools (CRDT, WebSockets), NLP classifiers with hybrid neural architectures, and meeting transcription pipelines and vector search indexing. I'm drawn to problems where the architecture matters as much as the feature.",
  },
  {
    icon: Wrench,
    title: "How I think about quality",
    color: "#a78bfa",
    content:
      "I write code as if the next person reading it is a stranger - modular functions, typed interfaces, and tests that document intent. In RecallAI I built robust queue-based transcript extractions and semantic vector queries. In CollabDocs I relied on Convex subscriptions instead of polling to keep state correct by design.",
  },
  {
    icon: Terminal,
    title: "What I'm currently improving",
    color: "#f59e0b",
    content:
      "Distributed systems fundamentals (consensus, replication, CAP trade-offs), deeper ML deployment workflows (ONNX, model serving), and system design for high-traffic backends. Working through Designing Data-Intensive Applications and Stanford CS229 material.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-10">

      {/* Page header */}
      <ScrollReveal>
        <SectionHeader
          title="About me"
          description="How I think about engineering, what I'm working on, and the academic foundation behind it."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Bio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollReveal delay={100} className="md:col-span-2 flex flex-col gap-4">
          <div className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed">
            <p>
              I'm <strong className="text-text-primary font-medium">Shubham Bhardwaj</strong>, a
              graduate student at Birla Institute of Technology, Mesra (MCA). I focus on
              full-stack web engineering and applied machine learning - specifically at the
              intersection of backend systems and intelligent tooling.
            </p>
            <p>
              My three main projects cover distinct technical domains: real-time collaboration
              with CRDT and streaming AI (CollabDocs), NLP classification with a tribrid deep
              neural network (SkimLit), and meeting intelligence with vector search (RecallAI).
              Each one was built to actually understand the underlying system, not just use a library.
            </p>
            <p>
              I write Python and TypeScript daily. My backend tooling includes FastAPI, Django,
              and Convex. On the AI side, I work with TensorFlow, Scikit-learn, spaCy, and
              LLM integrations via the Groq API.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Card className="flex flex-col gap-3 h-full">
            <p className="text-text-muted text-xs font-mono tracking-wider uppercase">Quick facts</p>
            <dl className="flex flex-col gap-2.5 text-sm">
              {[
                { label: "Location", value: personalData.location },
                { label: "Timezone", value: "GMT +5:30 (IST)" },
                { label: "Program", value: "MCA - BIT Mesra" },
                { label: "Focus", value: "Full-Stack + AI Engineering" },
                { label: "Status", value: "Open to internships / roles" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{label}</dt>
                  <dd className="text-text-secondary font-medium text-xs">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </ScrollReveal>
      </div>

      {/* Engineering pillars */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary">
            Engineering perspective
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {engineeringPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={idx * 100}>
                <Card accentTop={pillar.color} className="flex flex-col gap-3 h-full">
                  <div className="flex items-center gap-2" style={{ color: pillar.color }}>
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {pillar.content}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-5">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-accent" />
            Education
          </h2>
        </ScrollReveal>
        <div className="flex flex-col gap-0 border-l-2 border-accent/30 pl-6 ml-2">
          {education.map((edu, idx) => (
            <ScrollReveal key={edu.degree} delay={idx * 100} className="pb-6 last:pb-0">
              <Card className="!p-5">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono tracking-wider text-text-muted uppercase">{edu.period}</span>
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

      {/* Achievements */}
      <div className="flex flex-col gap-5">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            Achievements
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4">
          {achievements.map((ach, idx) => (
            <ScrollReveal key={ach.title} delay={idx * 100}>
              <Card className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0 text-accent">
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

      <ScrollReveal className="flex justify-center pt-2">
        <Button variant="pill-primary" href="/credentials">
          View resume &amp; credentials
          <ArrowRight className="w-4 h-4" />
        </Button>
      </ScrollReveal>
    </div>
  );
}
