"use client";

import { personalData, achievements, education } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { MapPin, Trophy, BookOpen, Heart, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Growth mindset",
      description: "Constantly expanding knowledge boundaries across frontend execution, advanced machine learning models, and backend performance systems.",
      accent: "var(--accent)",
    },
    {
      title: "Focused work",
      description: "Prioritizing undisturbed engineering blocks to build high-integrity systems, clean state management, and clear APIs.",
      accent: "#a78bfa",
    },
    {
      title: "Craft & detail",
      description: "Refining interfaces and refactoring algorithms to ensure long-term scalability, low-latency execution, and visually cohesive layouts.",
      accent: "#22d3ee",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12">
      <ScrollReveal>
        <SectionHeader
          title="About me"
          description="An insight into my core principles, education journey, and the motivations driving my technical pursuits."
          titleClassName="page-title"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollReveal delay={100} className="md:col-span-2 flex flex-col gap-4">
          <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-400" />
            <span>Biography</span>
          </h2>
          <div className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed">
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

        <ScrollReveal delay={200}>
          <Card glass className="flex flex-col justify-between gap-6 h-full">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs font-mono tracking-wider text-text-muted uppercase">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Coordinates
                </span>
                <span>GMT+5:30</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-text-primary mb-1">Ranchi, India</h3>
                <p className="text-xs text-text-muted font-mono">{personalData.coordinates}</p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Coding and designing from Ranchi, Jharkhand, inside the green campus environment of BIT Mesra.
              </p>
            </div>

            <div className="relative h-24 w-full bg-card-hover rounded-xl border border-border overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              <div className="absolute w-2 h-2 bg-accent rounded-full" />
            </div>
          </Card>
        </ScrollReveal>
      </div>

      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary pb-2">
            Philosophy &amp; values
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <ScrollReveal key={val.title} delay={idx * 100}>
              <Card accentTop={val.accent} className="flex flex-col gap-3 h-full">
                <h3 className="text-sm font-bold font-display text-text-primary">
                  {val.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {val.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2 pb-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span>Academic foundations</span>
          </h2>
        </ScrollReveal>
        <div className="flex flex-col gap-0 border-l-2 border-accent/30 pl-6 ml-2">
          {education.map((edu, idx) => (
            <ScrollReveal
              key={edu.degree}
              delay={idx * 100}
              className="pb-8 last:pb-0"
            >
              <Card className="!p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono tracking-wider text-text-muted uppercase">{edu.period}</span>
                  <h3 className="text-base font-bold font-display text-text-primary">{edu.degree}</h3>
                  <p className="text-sm text-text-secondary font-mono">
                    {edu.institution} &bull; {edu.location}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-text-secondary flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 bg-accent flex-shrink-0" />
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

      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2 pb-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>Achievements</span>
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
