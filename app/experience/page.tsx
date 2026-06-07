"use client";

import Link from "next/link";
import { experience, education, personalData, certifications } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase, GraduationCap, Calendar, MapPin, Download, CheckCircle2, ArrowRight, TrendingUp, Clock, Award, ExternalLink } from "lucide-react";

export default function ExperiencePage() {
  const stats = [
    { label: "Years of Study", value: "4+", icon: <Clock className="w-4 h-4" />, color: "text-accent", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.15)" },
    { label: "Projects Built", value: "3+", icon: <TrendingUp className="w-4 h-4" />, color: "text-cyan-400", bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.15)" },
    { label: "Hackathon", value: "2nd 🏆", icon: <Award className="w-4 h-4" />, color: "text-emerald-400", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.15)" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12 font-sans">
      {/* Page Header */}
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-6">
        <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">Experience</h1>
        <p className="text-xs md:text-sm text-text-secondary max-w-xl leading-relaxed">
          My professional work, academic background, and core achievements.
        </p>
      </ScrollReveal>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, idx) => (
          <ScrollReveal key={stat.label} delay={idx * 80}>
            <div
              className="rounded-2xl p-4 flex flex-col gap-2 transition-colors duration-200"
              style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
            >
              <div className={`${stat.color} flex items-center gap-1.5`}>{stat.icon}</div>
              <p className={`text-xl md:text-2xl font-bold font-comfortaa ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] font-mono text-text-muted tracking-wider">{stat.label.toUpperCase()}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Download Resume Banner */}
      <ScrollReveal delay={100}>
        <div className="rounded-2xl glass p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative overflow-hidden border border-border">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-accent/[0.04] to-transparent" />
          <div className="flex flex-col gap-1 relative z-10">
            <h3 className="text-base font-bold font-comfortaa text-text-primary">Resume</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              View and download the comprehensive PDF copy of my resume with full professional and academic profiles.
            </p>
          </div>
          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-accent text-bg hover:bg-amber-400 font-mono text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2 self-start sm:self-auto relative z-10 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>
      </ScrollReveal>



      {/* Professional Experience Section */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 border-b border-border pb-2">
            <Briefcase className="w-4 h-4 text-accent" />
            <span>Professional Experience</span>
          </h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-dashed border-border pl-6 ml-3 flex flex-col gap-8"
          style={{ borderColor: "rgba(245,158,11,0.2)" }}>
          {experience.map((exp, idx) => (
            <ScrollReveal
              key={exp.role}
              delay={idx * 150}
              className="relative flex flex-col gap-4 rounded-2xl glass p-6 transition-colors border border-border overflow-hidden"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-32px] top-[26px] w-[18px] h-[18px] rounded-full bg-bg border-2 flex items-center justify-center transition-transform duration-300"
                style={{ borderColor: "rgba(245,158,11,0.6)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-semibold">
                      {exp.role}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-comfortaa text-text-primary">
                    {exp.company}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5 glass px-3 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-accent/60" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 glass px-3 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-accent/60" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2 pt-2">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/5 text-accent border border-accent/10">
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Education Timeline Section */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 border-b border-border pb-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>Academic Timeline</span>
          </h2>
        </ScrollReveal>

        <div className="relative border-l-2 border-dashed border-border pl-6 ml-3 flex flex-col gap-8"
          style={{ borderColor: "rgba(167,139,250,0.2)" }}>
          {education.map((edu, idx) => (
            <ScrollReveal
              key={edu.degree}
              delay={idx * 150}
              className="relative flex flex-col gap-4 rounded-2xl glass p-6 transition-colors border border-border overflow-hidden"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-32px] top-[26px] w-[18px] h-[18px] rounded-full bg-bg border-2 flex items-center justify-center transition-transform duration-300"
                style={{ borderColor: "rgba(167,139,250,0.6)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
                      {edu.degree}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-comfortaa text-text-primary">
                    {edu.institution}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1.5 glass px-3 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-purple-400/60" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 glass px-3 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-purple-400/60" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2 pt-2">
                {edu.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0 bg-purple-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 border-b border-border pb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Certifications</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <ScrollReveal
              key={cert.id}
              delay={idx * 50}
              className="rounded-2xl glass p-5 flex flex-col justify-between gap-4 border border-border transition-colors hover:border-emerald-500/20"
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-sm font-bold font-comfortaa text-text-primary leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[10px] font-mono text-text-secondary">
                  Credential ID: {cert.id}
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-border pt-3 mt-1">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-text-muted hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>VERIFY CREDENTIAL</span>
                </a>
                <a
                  href={cert.pdf}
                  download
                  className="text-[10px] font-mono text-text-muted hover:text-emerald-400 flex items-center gap-1 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <ScrollReveal className="flex justify-center pt-2">
        <Link
          href="/skills"
          className="px-5 py-2.5 rounded-xl border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 transition-colors flex items-center gap-2"
        >
          <span>EXPLORE SKILLS &amp; TECHNOLOGIES</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
