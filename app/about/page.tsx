"use client";

import Link from "next/link";
import { personalData, achievements, education } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Trophy, BookOpen, Heart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Growth Mindset",
      description: "Constantly expanding knowledge boundaries across frontend execution, advanced machine learning models, and backend performance systems.",
      color: "text-accent",
    },
    {
      title: "Focused Work",
      description: "Prioritizing undisturbed engineering blocks to build high-integrity systems, clean state management, and clear APIs.",
      color: "text-purple-400",
    },
    {
      title: "Craft & Detail",
      description: "Refining interfaces and refactoring algorithms to ensure long-term scalability, low-latency execution, and visually cohesive layouts.",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12 font-sans">
      {/* Page Header */}
      <ScrollReveal className="flex flex-col gap-3 border-b border-border pb-6">
        <h1 className="text-3xl md:text-5xl font-bold font-comfortaa text-text-primary leading-tight">About Me</h1>
        <p className="text-xs md:text-sm text-text-secondary max-w-xl leading-relaxed">
          An insight into my core principles, education journey, and the motivations driving my technical pursuits.
        </p>
      </ScrollReveal>

      {/* Main Grid: Bio & Location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Biography */}
        <ScrollReveal delay={100} className="md:col-span-2 flex flex-col gap-4">
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-400" />
            <span>Biography</span>
          </h2>
          <div className="flex flex-col gap-4 text-xs md:text-sm text-text-secondary leading-relaxed">
            <p>
              I am a software builder currently pursuing my Master of Computer Applications (MCA) at 
              <strong className="text-text-primary font-medium"> Birla Institute of Technology, Mesra</strong>. I focus on full-stack web applications and machine learning.
            </p>
            <p>
              I enjoy building tools that enable real-time collaboration, optimizing performance on the backend, and creating deep learning classifiers. I also like working on low-level challenges, such as writing a Git-compatible version control tool in Python from scratch.
            </p>
            <p>
              My goal is always to write clean, maintainable code and design interfaces that are fast and intuitive to use.
            </p>
          </div>
        </ScrollReveal>

        {/* Right: Location Card */}
        <ScrollReveal delay={200} className="rounded-2xl glass p-6 flex flex-col justify-between gap-6 transition-colors border border-border">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                COORDINATES
              </span>
              <span>GMT+5:30</span>
            </div>
            <div>
              <h3 className="text-lg font-bold font-comfortaa text-text-primary mb-1 uppercase">Ranchi, India</h3>
              <p className="text-[10px] text-text-muted font-mono tracking-wider">{personalData.coordinates}</p>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              Coding and designing from Ranchi, Jharkhand, inside the green campus environment of BIT Mesra.
            </p>
          </div>
          
          {/* Decorative Map Grid Mock */}
          <div className="relative h-24 w-full bg-black/40 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
            <div className="absolute w-2 h-2 bg-accent rounded-full" />
          </div>
        </ScrollReveal>
      </div>

      {/* Core Values Section */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 border-b border-border pb-2">
            <span>Philosophy &amp; Values</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <ScrollReveal
              key={val.title}
              delay={idx * 100}
              className="rounded-2xl glass p-6 flex flex-col gap-3 transition-colors border border-border"
            >
              <h3 className={`text-sm font-bold font-comfortaa ${val.color}`}>
                {val.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {val.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Education Summary */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 border-b border-border pb-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span>Academic Foundations</span>
          </h2>
        </ScrollReveal>
        <div className="flex flex-col gap-6">
          {education.map((edu, idx) => (
            <ScrollReveal
              key={edu.degree}
              delay={idx * 100}
              className="rounded-2xl glass p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors border border-border"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono tracking-wider font-semibold text-text-muted uppercase">{edu.period}</span>
                <h3 className="text-base font-bold font-comfortaa text-text-primary">{edu.degree}</h3>
                <p className="text-xs text-text-secondary font-mono">
                  {edu.institution} &bull; {edu.location}
                </p>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {edu.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-text-secondary flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-1.5 bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 border-b border-border pb-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>Achievements</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6">
          {achievements.map((ach, idx) => (
            <ScrollReveal
              key={ach.title}
              delay={idx * 100}
              className="rounded-2xl glass p-6 flex items-start gap-4 transition-colors border border-border"
            >
              <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0 text-accent">
                <Trophy className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold font-comfortaa text-text-primary">{ach.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{ach.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <ScrollReveal className="flex justify-center pt-2">
        <Link
          href="/experience"
          className="px-5 py-2.5 rounded-xl border border-accent/25 bg-accent/5 text-accent text-xs font-mono font-semibold tracking-wider hover:bg-accent/15 transition-all duration-200 flex items-center gap-2"
        >
          <span>VIEW WORK EXPERIENCE &amp; CREDENTIALS</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollReveal>
    </div>
  );
}
