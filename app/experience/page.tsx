"use client";

import Link from "next/link";
import { experience, education, personalData } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase, GraduationCap, Calendar, MapPin, Download, CheckCircle2, ArrowRight, TrendingUp, Clock, Award } from "lucide-react";

export default function ExperiencePage() {
  const stats = [
    { label: "Years of Study", value: "4+", icon: <Clock className="w-4 h-4" />, color: "text-accent", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
    { label: "Projects Built", value: "3+", icon: <TrendingUp className="w-4 h-4" />, color: "text-cyan-400", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.2)" },
    { label: "Internship", value: "1", icon: <Briefcase className="w-4 h-4" />, color: "text-purple-400", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)" },
    { label: "Hackathon", value: "2nd 🏆", icon: <Award className="w-4 h-4" />, color: "text-emerald-400", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-16">
      {/* Page Header */}
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-8">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase font-semibold">THE RECORD</span>
        <h1 className="text-4xl md:text-6xl font-bold font-comfortaa text-white leading-tight">Credentials</h1>
        <p className="text-sm text-text-secondary max-w-xl leading-relaxed font-sans">
          A timeline of professional engagements, academic progression, and practical industry internships.
        </p>
      </ScrollReveal>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <ScrollReveal key={stat.label} delay={idx * 80}>
            <div
              className="rounded-2xl p-4 flex flex-col gap-2 hover:scale-105 transition-all duration-300"
              style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
            >
              <div className={`${stat.color} flex items-center gap-1.5`}>{stat.icon}</div>
              <p className={`text-2xl font-bold font-comfortaa ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] font-mono text-text-muted tracking-wider">{stat.label.toUpperCase()}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Download Resume Banner */}
      <ScrollReveal delay={100}>
        <div className="rounded-2xl glass p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-accent/[0.04] to-transparent" />
          <div className="flex flex-col gap-1.5 relative z-10">
            <h3 className="text-base font-bold font-comfortaa text-white">Full-Stack Curriculum Vitae</h3>
            <p className="text-xs text-text-secondary font-sans leading-relaxed">
              Download the comprehensive PDF copy of Shubham&apos;s resume with full professional and academic profiles.
            </p>
          </div>
          <a
            href={personalData.resumeUrl}
            download
            className="px-5 py-3 rounded-xl bg-accent text-bg hover:bg-amber-400 font-mono text-xs font-bold tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center justify-center gap-2 self-start sm:self-auto relative z-10 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CV (PDF)</span>
          </a>
        </div>
      </ScrollReveal>

      {/* Work Experience Section */}
      <div className="flex flex-col gap-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-comfortaa text-white flex items-center gap-2 border-b border-border pb-3">
            <Briefcase className="w-5 h-5 text-accent" />
            <span>Work Experience</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {experience.map((exp, idx) => (
            <ScrollReveal
              key={exp.company}
              delay={idx * 150}
              className="rounded-2xl glass p-6 md:p-8 flex flex-col gap-6 hover:border-accent/20 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-semibold">
                      {exp.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-comfortaa text-white">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-accent/60" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-accent/60" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements Bullet List */}
              <ul className="flex flex-col gap-3 pt-2">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-xs text-text-secondary leading-relaxed font-sans flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent/70 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tag Stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono px-2.5 py-1 rounded-full border bg-white/5 text-text-secondary border-white/8 hover:border-accent/30 hover:text-accent transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Education Timeline Section */}
      <div className="flex flex-col gap-8">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-comfortaa text-white flex items-center gap-2 border-b border-border pb-3">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span>Academic Timeline</span>
          </h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-dashed border-border pl-8 ml-3 flex flex-col gap-10"
          style={{ borderColor: "rgba(167,139,250,0.2)" }}>
          {education.map((edu, idx) => (
            <ScrollReveal
              key={edu.degree}
              delay={idx * 150}
              className="relative flex flex-col gap-4 rounded-2xl glass p-6 hover:border-purple-500/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)" }} />

              {/* Timeline dot */}
              <div className="absolute left-[-36px] top-[28px] w-5 h-5 rounded-full bg-bg border-2 flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                style={{ borderColor: "rgba(167,139,250,0.6)" }}>
                <div className="w-2 h-2 rounded-full bg-purple-400" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                      {edu.degree}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-comfortaa text-white">
                    {edu.institution}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-purple-400/60" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-purple-400/60" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2 pt-2 relative z-10">
                {edu.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-xs text-text-secondary leading-relaxed font-sans flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-purple-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <ScrollReveal className="flex justify-center pt-4">
        <Link
          href="/skills"
          className="px-6 py-3.5 rounded-full border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 hover:border-accent/40 transition-all duration-300 flex items-center gap-2"
        >
          <span>EXPLORE SKILLS &amp; TECHNOLOGIES</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
