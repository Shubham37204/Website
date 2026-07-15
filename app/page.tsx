"use client";

import { useEffect, useState } from "react";
import { personalData, projects } from "@/lib/data";
import FloatingIcons from "@/components/FloatingIcons";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  FileText,
  ArrowRight,
  MapPin,
  Brain,
  Code2,
  Rocket,
  Mail,
  Github,
  Linkedin,
  ClipboardList,
  Search,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const roles = ["Developer", "Engineer", "Innovator", "Builder", "Creator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="w-full flex flex-col gap-16">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-6">
        <div className="absolute top-1/2 left-1/2 h-[82vmin] w-[82vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15 pointer-events-none opacity-40" />
        <div className="absolute top-1/2 left-1/2 h-[112vmin] w-[112vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 pointer-events-none opacity-50" />
        <div className="absolute top-1/2 left-1/2 h-[142vmin] w-[142vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border pointer-events-none opacity-40" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent animate-pulse-glow pointer-events-none" />

        <FloatingIcons />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <ScrollReveal delay={100} className="w-full flex flex-col items-center">
            <p className="section-eyebrow mb-4">Hello! I&apos;m</p>
            <h1 className="page-title mb-2">
              {personalData.name}
            </h1>
            <p className="text-sm text-text-secondary mb-6">
              A passionate <span className="text-accent">full-stack</span> &amp; <span className="text-cyan-500">AI/ML</span> engineer
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="h-20 md:h-28 flex justify-center items-center mb-4 overflow-hidden">
            <span
              className={`text-5xl md:text-7xl font-bold font-display bg-gradient-to-r from-accent to-teal-300 bg-clip-text text-transparent transition-all duration-300 transform ${
                animating ? "opacity-0 translate-y-3 scale-95" : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              {roles[roleIndex]}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={300} className="flex gap-2 mb-10 justify-center items-center">
            {roles.map((_, idx) => (
              <div
                key={idx}
                className={`rounded-full transition-all duration-300 h-2 ${
                  roleIndex === idx ? "w-8 bg-accent" : "w-2 bg-border"
                }`}
              />
            ))}
          </ScrollReveal>

          <ScrollReveal delay={400} className="max-w-xl text-sm text-text-secondary leading-relaxed mb-10">
            {personalData.tagline}
          </ScrollReveal>

          <ScrollReveal delay={500} className="flex flex-wrap justify-center gap-4">
            <Button
              variant="pill-primary"
              href={personalData.resumeUrl}
              external
            >
              <FileText className="w-4 h-4" />
              Resume &amp; CV
            </Button>
            <Button variant="pill-secondary" href="/projects">
              View projects
              <ArrowRight className="w-4 h-4 text-accent" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8 px-6 max-w-4xl mx-auto w-full">
        <ScrollReveal className="mb-10">
          <SectionHeader eyebrow="Featured work" title="Projects" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 100}>
              <Card hover className="h-full flex flex-col gap-3 !p-5">
                <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: project.accent }} />
                <h3 className="text-text-primary font-semibold text-lg">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="flex justify-center mt-10">
          <Button variant="pill-primary" href="/projects">
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </section>

      {/* About Me */}
      <section className="py-8 px-6 max-w-4xl mx-auto w-full">
        <ScrollReveal className="mb-10">
          <SectionHeader eyebrow="Who I am" title="About me" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ScrollReveal delay={100}>
            <Card className="min-h-[200px] flex flex-col justify-between gap-4 relative">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent rounded-xl" />
              <div className="flex items-center gap-2 text-text-muted text-xs font-mono uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Location</span>
              </div>
              <div>
                <h3 className="text-text-primary font-bold text-2xl font-display mb-1">Ranchi, India</h3>
                <p className="text-text-secondary text-xs font-mono">{personalData.coordinates}</p>
                <p className="text-text-muted text-xs font-mono">GMT+5:30</p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Based in Ranchi, India. Graduate student at BIT Mesra, building web systems and practical machine learning applications.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Card className="min-h-[200px] flex flex-col justify-between gap-4">
              <div>
                <p className="text-text-muted text-xs font-mono tracking-wider mb-3 uppercase">Biography</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {personalData.bio}
                </p>
              </div>
              <p className="text-text-muted text-sm italic pt-3 border-t border-border">
                &quot;Building intelligent systems at the intersection of full-stack &amp; AI/ML.&quot;
              </p>
            </Card>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ScrollReveal delay={300}>
            <Card accentTop="#a78bfa" className="!p-4">
              <div className="text-xs font-mono font-semibold tracking-wider text-purple-400 mb-2 uppercase">Growth</div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Constant learner of complex systems and mathematical paradigms.
              </p>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <Card accentTop="#22d3ee" className="!p-4">
              <div className="text-xs font-mono font-semibold tracking-wider text-cyan-400 mb-2 uppercase">Focus</div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Deep work on structural efficiency and precision engineering.
              </p>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <Card accentTop="var(--accent)" className="!p-4">
              <div className="text-xs font-mono font-semibold tracking-wider text-accent mb-2 uppercase">Craft</div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Dedication to writing clean, maintainable, and robust codebases.
              </p>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal className="flex justify-center mt-10">
          <Button variant="pill-primary" href="/about">
            View persona
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </section>

      {/* Reach Out */}
      <section className="py-8 px-6 max-w-4xl mx-auto w-full">
        <ScrollReveal className="mb-10">
          <SectionHeader eyebrow="Skills · Workflow · Identity" title="Reach out" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Card className="mb-8 relative">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/[0.02] via-transparent to-purple-500/[0.02] rounded-xl" />
            <p className="text-text-muted text-xs font-mono tracking-[0.2em] uppercase mb-6">Development workflow</p>

            <div className="relative flex items-start gap-0 overflow-x-auto pb-4 pt-1 scrollbar-thin">
              {[
                { label: "Idea", icon: <Lightbulb className="w-5 h-5" />, color: "#14b8a6", bg: "rgba(20,184,166,0.06)", border: "rgba(20,184,166,0.18)" },
                { label: "Plan", icon: <ClipboardList className="w-5 h-5" />, color: "#a78bfa", bg: "rgba(167,139,250,0.06)", border: "rgba(167,139,250,0.18)" },
                { label: "AI help", icon: <Brain className="w-5 h-5" />, color: "#60a5fa", bg: "rgba(96,165,250,0.06)", border: "rgba(96,165,250,0.18)" },
                { label: "Code", icon: <Code2 className="w-5 h-5" />, color: "#34d399", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.18)" },
                { label: "Review", icon: <Search className="w-5 h-5" />, color: "#f472b6", bg: "rgba(244,114,182,0.06)", border: "rgba(244,114,182,0.18)" },
                { label: "Test", icon: <FlaskConical className="w-5 h-5" />, color: "#fb7185", bg: "rgba(251,113,133,0.06)", border: "rgba(251,113,133,0.18)" },
                { label: "Launch", icon: <Rocket className="w-5 h-5" />, color: "#94a3b8", bg: "rgba(148,163,184,0.05)", border: "rgba(148,163,184,0.12)" },
              ].map((step, idx, arr) => (
                <div key={step.label} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{ backgroundColor: step.bg, border: `1px solid ${step.border}`, color: step.color }}
                    >
                      {step.icon}
                    </div>
                    <span className="text-xs font-medium" style={{ color: step.color }}>{step.label}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex-shrink-0 mx-2 flex items-center mb-5">
                      <div className="h-px w-6 sm:w-10" style={{ background: `linear-gradient(90deg, ${step.color}40, ${arr[idx + 1].color}40)` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={200} className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" href={`mailto:${personalData.email}`}>
            <Mail className="w-4 h-4" />
            Say hello
          </Button>
          <Button variant="secondary" href={personalData.github} external>
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button variant="secondary" href={personalData.linkedin} external>
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
}
