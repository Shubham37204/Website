"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { personalData, projects } from "@/lib/data";
import FloatingIcons from "@/components/FloatingIcons";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  FileText, 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Brain, 
  Code2, 
  Rocket, 
  Mail, 
  Github, 
  Linkedin, 
  ClipboardList, 
  Search, 
  FlaskConical, 
  Lightbulb 
} from "lucide-react";

export default function HomePage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const roles = ["DEVELOPER", "ENGINEER", "INNOVATOR", "BUILDER", "CREATOR"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimating(false);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-10 md:gap-14">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-6">
        {/* Concentric circles background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-border rounded-full pointer-events-none opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-border rounded-full pointer-events-none opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] border border-border rounded-full pointer-events-none opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-border rounded-full pointer-events-none opacity-10" />
        
        {/* Center glow dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent animate-pulse-glow pointer-events-none" />

        {/* Floating tech icons orbiting around center */}
        <FloatingIcons />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <ScrollReveal delay={100} className="w-full flex flex-col items-center">
            <p className="text-[var(--text-muted)] text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-mono">HELLO! I&apos;M</p>
            <h1 className="text-4xl md:text-7xl font-bold font-comfortaa tracking-tight text-text-primary mb-2 leading-none uppercase">
              {personalData.name}
            </h1>
            <p className="text-xs md:text-sm font-mono text-text-secondary tracking-wide mb-6">
              A passionate <span className="text-accent/80">Full-Stack</span> &amp; <span className="text-purple-400/80">AI/ML</span> Engineer
            </p>
          </ScrollReveal>

          {/* Role text cycler */}
          <ScrollReveal delay={200} className="h-16 flex justify-center items-center mb-6 overflow-hidden">
            <span className={`text-4xl md:text-6xl font-extrabold font-comfortaa bg-gradient-to-r from-accent via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 transform ${
              animating ? "opacity-0 translate-y-3 scale-95" : "opacity-100 translate-y-0 scale-100"
            }`}>
              {roles[roleIndex]}
            </span>
          </ScrollReveal>

          {/* Dot/pill active status indicators */}
          <ScrollReveal delay={300} className="flex gap-2 mb-10 justify-center items-center">
            {roles.map((_, idx) => (
              <div
                key={idx}
                className={`dot-pill rounded-full transition-all duration-300 ${
                  roleIndex === idx ? "w-8 bg-accent" : "w-1.5 bg-border"
                }`}
                style={{ height: "5px" }}
              />
            ))}
          </ScrollReveal>

          <ScrollReveal delay={400} className="max-w-xl text-xs md:text-sm text-text-secondary leading-relaxed mb-10 font-sans">
            {personalData.tagline}
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={500} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/experience"
              className="px-8 py-3.5 rounded-full font-mono text-xs tracking-wider font-semibold border border-accent/30 bg-accent/5 text-accent hover:bg-accent/15 hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME &amp; CV</span>
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-full font-mono text-xs tracking-wider font-semibold border border-border bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span>VIEW PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. FEATURED PROJECTS PREVIEW (COMPACT 3-COL GRID) */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full border-t border-border/40">
        <ScrollReveal className="mb-10">
          <p className="text-[var(--text-muted)] text-xs tracking-[0.35em] uppercase mb-2 font-mono">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">Projects</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project, idx) => (
            <ScrollReveal 
              key={project.title} 
              delay={idx * 100}
              className="rounded-2xl p-5 flex flex-col gap-3 bg-card border border-border/60 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] group"
            >
              {/* Colored top bar */}
              <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: project.accent }} />
              
              <h3 className="text-text-primary font-semibold text-lg font-sans">
                {project.title}
              </h3>
              
              <p className="text-text-secondary text-xs leading-relaxed flex-1 font-sans">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full border bg-card-hover border-border/40 text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="flex justify-center mt-10">
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 transition-all duration-300 flex items-center gap-2"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* 3. ABOUT ME */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full border-t border-border/40">
        <ScrollReveal className="mb-10">
          <p className="text-[var(--text-muted)] text-xs tracking-[0.35em] uppercase mb-2 font-mono">Who I Am</p>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">About Me</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Location Card */}
          <ScrollReveal
            delay={100}
            className="rounded-2xl p-6 relative overflow-hidden select-none bg-card border border-border min-h-[200px] flex flex-col justify-between"
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>LOCATION</span>
            </div>
            
            <div>
              <h3 className="text-text-primary font-bold text-3xl font-comfortaa mb-1 uppercase">Ranchi, India</h3>
              <p className="text-text-secondary text-[11px] font-mono">{personalData.coordinates}</p>
              <p className="text-text-muted text-[11px] font-mono">GMT+5:30</p>
            </div>
            
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              Based in Ranchi, India. Graduate student at BIT Mesra, building web systems and practical machine learning applications.
            </p>
          </ScrollReveal>

          {/* Biography Card */}
          <ScrollReveal
            delay={200}
            className="rounded-2xl p-6 bg-card border border-border min-h-[200px] flex flex-col justify-between gap-4"
          >
            <div>
              <p className="text-text-muted text-xs font-mono tracking-widest mb-3">/ BIOGRAPHY</p>
              <p className="text-text-secondary text-xs md:text-sm leading-relaxed font-sans">
                {personalData.bio}
              </p>
            </div>
            
            <p className="text-text-muted text-[11px] italic border-t border-border pt-3 font-sans">
              &quot;Building intelligent systems at the intersection of full-stack &amp; AI/ML.&quot;
            </p>
          </ScrollReveal>
        </div>

        {/* Row of Three Qualities */}
        <div className="grid grid-cols-3 gap-3">
          <ScrollReveal delay={300} className="rounded-xl p-4 bg-purple-500/5 border border-purple-500/10">
            <div className="text-[10px] font-bold font-mono tracking-widest text-purple-400 mb-2 uppercase">GROWTH</div>
            <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed font-sans">
              Constant learner of complex systems and mathematical paradigms.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400} className="rounded-xl p-4 bg-cyan-500/5 border border-cyan-500/10">
            <div className="text-[10px] font-bold font-mono tracking-widest text-cyan-400 mb-2 uppercase">FOCUS</div>
            <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed font-sans">
              Deep work on structural efficiency and precision engineering.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500} className="rounded-xl p-4 bg-amber-500/5 border border-amber-500/10">
            <div className="text-[10px] font-bold font-mono tracking-widest text-amber-400 mb-2 uppercase">CRAFT</div>
            <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed font-sans">
              Dedication to writing clean, maintainable, and robust codebases.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal className="flex justify-center mt-10">
          <Link
            href="/about"
            className="px-6 py-2.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 transition-all duration-300 flex items-center gap-2"
          >
            <span>VIEW PERSONA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </section>

      {/* 4. REACH OUT (WORKFLOW & CALL TO ACTIONS) */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full border-t border-border/40">
        <ScrollReveal className="mb-10">
          <p className="text-[var(--text-muted)] text-xs tracking-[0.35em] uppercase mb-2 font-mono">Skills • Workflow • Identity</p>
          <h2 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">Reach Out</h2>
        </ScrollReveal>

        <ScrollReveal delay={100} className="rounded-2xl p-6 relative overflow-hidden bg-card border border-border mb-8">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-accent/[0.02] via-transparent to-purple-500/[0.02]" />
          <p className="text-text-muted text-[10px] font-mono tracking-[0.3em] uppercase mb-6">DEVELOPMENT WORKFLOW</p>
          
          {/* Horizontal workflow pipeline */}
          <div className="relative flex items-start gap-0 overflow-x-auto pb-4 pt-1">
            {[
              { label: "IDEA",    icon: <Lightbulb className="w-5 h-5" />,       color: "#f59e0b",   bg: "rgba(245,158,11,0.06)",   border: "rgba(245,158,11,0.18)" },
              { label: "PLAN",    icon: <ClipboardList className="w-5 h-5" />,   color: "#a78bfa",   bg: "rgba(167,139,250,0.06)",  border: "rgba(167,139,250,0.18)" },
              { label: "AI HELP", icon: <Brain className="w-5 h-5" />,           color: "#60a5fa",   bg: "rgba(96,165,250,0.06)",   border: "rgba(96,165,250,0.18)" },
              { label: "CODE",    icon: <Code2 className="w-5 h-5" />,           color: "#34d399",   bg: "rgba(52,211,153,0.06)",   border: "rgba(52,211,153,0.18)" },
              { label: "REVIEW",  icon: <Search className="w-5 h-5" />,          color: "#f472b6",   bg: "rgba(244,114,182,0.06)",  border: "rgba(244,114,182,0.18)" },
              { label: "TEST",    icon: <FlaskConical className="w-5 h-5" />,    color: "#fb7185",   bg: "rgba(251,113,133,0.06)",  border: "rgba(251,113,133,0.18)" },
              { label: "LAUNCH",  icon: <Rocket className="w-5 h-5" />,          color: "#e2e8f0",   bg: "rgba(226,232,240,0.05)",  border: "rgba(226,232,240,0.12)" },
            ].map((step, idx, arr) => (
              <div key={step.label} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center gap-2 group cursor-default">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: step.bg, border: `1px solid ${step.border}`, color: step.color }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-[9px] font-mono tracking-wider font-semibold" style={{ color: step.color }}>{step.label}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="flex-shrink-0 mx-2 flex items-center mb-5">
                    <div className="h-px w-6 sm:w-10" style={{ background: `linear-gradient(90deg, ${step.color}40, ${arr[idx+1].color}40)` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Action buttons */}
        <ScrollReveal delay={200} className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalData.email}`}
            className="px-6 py-3 rounded-full bg-accent text-bg hover:bg-amber-400 text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>SAY HELLO</span>
          </a>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-border bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-border bg-card text-text-secondary hover:text-text-primary hover:bg-card-hover text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-2"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
        </ScrollReveal>
      </section>

    </div>
  );
}
