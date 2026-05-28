"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { personalData, projects, experience, education } from "@/lib/data";
import FloatingIcons from "@/components/FloatingIcons";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { FileText, ArrowRight, MapPin, Sparkles, BrainCircuit, Code2, Rocket, Mail, Github, Linkedin, BookOpen, Search, FlaskConical } from "lucide-react";

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["DEVELOPER", "ENGINEER", "INNOVATOR", "BUILDER"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-28 md:gap-36">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 px-6">
        {/* Floating background graphics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] border border-white/5 rounded-full pointer-events-none" />

        {/* Floating tech icons orbiting around center */}
        <FloatingIcons />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <ScrollReveal delay={100} className="w-full flex flex-col items-center">
            <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-text-muted uppercase mb-4">
              HELLO! I'M
            </span>
            <h1 className="text-5xl md:text-8xl font-bold font-comfortaa tracking-tight text-white mb-2 leading-none">
              {personalData.name}
            </h1>
            <p className="text-sm md:text-lg font-mono text-text-secondary tracking-wide mb-6">
              A passionate <span className="text-accent">{personalData.title}</span>
            </p>
          </ScrollReveal>

          {/* Role text cycler */}
          <ScrollReveal delay={200} className="h-12 flex justify-center items-center mb-6 overflow-hidden">
            <span className="text-3xl md:text-5xl font-bold font-comfortaa bg-gradient-to-r from-accent to-red-400 bg-clip-text text-transparent transition-all duration-500 ease-in-out">
              {roles[roleIndex]}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={300} className="flex gap-1.5 mb-10 justify-center">
            {roles.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  roleIndex === idx ? "w-8 bg-accent" : "w-1.5 bg-white/10"
                }`}
              />
            ))}
          </ScrollReveal>

          <ScrollReveal delay={400} className="max-w-xl text-sm md:text-base text-text-secondary leading-relaxed mb-10 font-sans">
            {personalData.tagline}
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={500} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/experience"
              className="px-6 py-3.5 rounded-full font-mono text-xs tracking-wider font-semibold border border-accent/20 bg-accent/5 text-accent hover:bg-accent/15 hover:border-accent/40 shadow-[0_0_20px_rgba(245,158,11,0.05)] transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME &amp; CREDENTIALS</span>
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3.5 rounded-full font-mono text-xs tracking-wider font-semibold border border-white/5 bg-white/5 text-text-secondary hover:text-text-primary hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS PREVIEW */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <ScrollReveal className="mb-12">
          <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase block mb-2">FEATURED WORK</span>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-white">Projects</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 150}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 hover:border-accent/40 transition-all duration-300 flex items-center gap-2"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* 3. ABOUT ME / PERSONA PREVIEW */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <ScrollReveal className="mb-12">
          <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase block mb-2">WHO I AM</span>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-white">About Me</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Location Card */}
          <ScrollReveal delay={100} className="rounded-2xl glass p-6 md:p-8 flex flex-col justify-between gap-8 relative overflow-hidden group hover:border-accent-border/30 transition-all duration-300">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="flex items-center justify-between text-text-secondary text-[10px] font-mono tracking-wider">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                LOCATION
              </span>
              <span>GMT+5:30</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold font-comfortaa text-white mb-2 uppercase group-hover:text-accent transition-colors">
                Ranchi, India
              </h3>
              <p className="text-[11px] text-text-muted font-mono tracking-wider">
                {personalData.coordinates}
              </p>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed font-sans mt-2">
              Based in the capital of Jharkhand, coding robust web systems and model configurations from BIT Mesra campus.
            </p>
          </ScrollReveal>

          {/* Quick Summary Card */}
          <ScrollReveal delay={200} className="rounded-2xl glass p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-accent-border/30 transition-all duration-300">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-mono tracking-widest text-text-muted">/ BIOGRAPHY</span>
              <p className="text-sm text-text-secondary leading-relaxed font-sans">
                {personalData.bio}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-border">
              <div className="flex flex-col gap-1 p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                <span className="text-[10px] font-bold font-mono text-accent">GROWTH</span>
                <span className="text-[9px] font-mono text-text-muted">Constant learner</span>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                <span className="text-[10px] font-bold font-mono text-purple-400">FOCUS</span>
                <span className="text-[9px] font-mono text-text-muted">Deep flow build</span>
              </div>
              <div className="flex flex-col gap-1 p-2 rounded-xl bg-white/5 border border-white/5 text-center">
                <span className="text-[10px] font-bold font-mono text-cyan-400">CRAFT</span>
                <span className="text-[9px] font-mono text-text-muted">Clean structure</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="flex justify-center mt-12">
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 hover:border-accent/40 transition-all duration-300 flex items-center gap-2"
          >
            <span>VIEW DETAILED PERSONA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* 4. REACH OUT / CONTACT with Workflow Pipeline */}
      <section className="px-6 max-w-4xl mx-auto w-full">
        <ScrollReveal className="mb-12">
          <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase block mb-2">SKILLS · WORKFLOW · IDENTITY</span>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-white">Reach Out</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-2xl glass p-6 md:p-8 flex flex-col gap-8 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/[0.03] via-transparent to-purple-500/[0.03]" />
            
            {/* Workflow label */}
            <p className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase">WORKFLOW</p>

            {/* Horizontal pipeline */}
            <div className="relative flex items-start gap-0 overflow-x-auto pb-2">
              {[
                { label: "IDEA",    icon: <Sparkles className="w-5 h-5" />,    color: "#f59e0b",   bg: "rgba(245,158,11,0.1)",   border: "rgba(245,158,11,0.25)" },
                { label: "PLAN",    icon: <BookOpen className="w-5 h-5" />,     color: "#a78bfa",   bg: "rgba(167,139,250,0.1)",  border: "rgba(167,139,250,0.25)" },
                { label: "AI HELP", icon: <BrainCircuit className="w-5 h-5" />, color: "#60a5fa",   bg: "rgba(96,165,250,0.1)",   border: "rgba(96,165,250,0.25)" },
                { label: "CODE",    icon: <Code2 className="w-5 h-5" />,        color: "#34d399",   bg: "rgba(52,211,153,0.1)",   border: "rgba(52,211,153,0.25)" },
                { label: "REVIEW",  icon: <Search className="w-5 h-5" />,       color: "#f472b6",   bg: "rgba(244,114,182,0.1)",  border: "rgba(244,114,182,0.25)" },
                { label: "TEST",    icon: <FlaskConical className="w-5 h-5" />, color: "#fb7185",   bg: "rgba(251,113,133,0.1)",  border: "rgba(251,113,133,0.25)" },
                { label: "LEARN",   icon: <Rocket className="w-5 h-5" />,       color: "#e2e8f0",   bg: "rgba(226,232,240,0.07)", border: "rgba(226,232,240,0.15)" },
              ].map((step, idx, arr) => (
                <div key={step.label} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center gap-2.5 group cursor-default">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: step.bg, border: `1px solid ${step.border}`, color: step.color, boxShadow: `0 0 14px ${step.bg}` }}
                    >
                      {step.icon}
                    </div>
                    <span className="text-[9px] font-mono tracking-wider" style={{ color: step.color }}>{step.label}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex-shrink-0 mx-2 flex items-center mb-5">
                      <div className="h-px w-8 md:w-12" style={{ background: `linear-gradient(90deg, ${step.color}60, ${arr[idx+1].color}60)` }} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <p className="text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase">HIT ME UP</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#f87171" }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mail</span>
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#e2e8f0" }}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: "rgba(10,102,194,0.1)", border: "1px solid rgba(10,102,194,0.3)", color: "#60a5fa" }}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CONTACT / CALL TO ACTION */}
      <section className="px-6 max-w-4xl mx-auto w-full text-center pb-8">
        <ScrollReveal className="flex flex-col items-center gap-6 glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-accent/[0.04] to-transparent" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-accent uppercase block">START A CONVERSATION</span>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-white max-w-lg leading-tight">
            Interested in working together?
          </h2>
          <p className="text-sm text-text-secondary max-w-md leading-relaxed font-sans">
            Building cutting-edge collaborative platforms, NLP engines, or looking for a passionate Full-Stack + AI/ML engineer? Let&apos;s connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href={`mailto:${personalData.email}`}
              className="px-7 py-3.5 rounded-full bg-accent text-bg hover:bg-amber-400 text-xs font-mono font-bold tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.2)] flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>SAY HELLO</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-white/10 bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 text-xs font-mono font-bold tracking-wider hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
          </div>
        </ScrollReveal>
      </section>
      
    </div>
  );
}
