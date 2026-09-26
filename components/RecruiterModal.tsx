"use client";

import React, { useState } from "react";
import { Sparkles, X, Briefcase, GraduationCap, CheckCircle2, FileText, Github, Linkedin, Mail } from "lucide-react";
import { personalData } from "@/lib/data";

export default function RecruiterModal() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-5 z-[90] flex items-center gap-2 rounded-full border border-amber-500/40 bg-card/90 px-4 py-2 text-xs font-semibold text-amber-500 shadow-xl backdrop-blur hover:bg-amber-500 hover:text-slate-950 transition-all duration-200 group"
        aria-label="30-Second Recruiter Summary"
      >
        <Sparkles className="h-4 w-4 fill-amber-500 group-hover:fill-slate-950 transition-colors" />
        <span className="font-mono">Recruiter Pitch (30s)</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-2xl border border-amber-500/30 bg-card p-6 shadow-2xl z-10 flex flex-col gap-5 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 grid place-items-center text-amber-500">
              <Sparkles className="h-5 w-5 fill-amber-500" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-500 font-bold">
                Recruiter 30-Second Summary
              </span>
              <h2 className="font-display text-xl font-bold text-text-primary">
                Shubham Bhardwaj
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-text-muted hover:bg-card-hover hover:text-text-primary transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Highlights List */}
        <div className="flex flex-col gap-3.5">
          <div className="flex items-start gap-3 rounded-xl border border-border bg-bg/50 p-3">
            <GraduationCap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Education</p>
              <p className="text-sm font-semibold text-text-primary">MCA Student @ BIT Mesra (2024 – Present)</p>
              <p className="text-xs text-text-secondary">BCA Graduate @ BIT Mesra (CGPA: 8.0)</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-border bg-bg/50 p-3">
            <Briefcase className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Target Roles &amp; Availability</p>
              <p className="text-sm font-semibold text-text-primary">Software Engineer / Full-Stack / AI/ML Internships &amp; Full-Time</p>
              <p className="text-xs text-text-secondary">Open to Remote &amp; Relocation across India</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-border bg-bg/50 p-3">
            <p className="text-xs font-mono uppercase tracking-wider text-text-muted">Key Architectural Proof Signals</p>
            <ul className="flex flex-col gap-1.5 text-xs text-text-secondary">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>CollabDocs:</strong> Built real-time CRDT editor synced over WebSockets with Groq Llama-3 stream.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>SkimLit:</strong> Trained PubMed RCT medical NLP classifier with multi-input deep neural net.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>RecallAI:</strong> Built async meeting intelligence pipeline with Redis task queue &amp; vector search.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:brightness-110 transition-all"
            >
              <FileText className="h-4 w-4" />
              <span>Resume PDF</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card-hover text-xs font-semibold text-text-primary hover:text-accent transition-all"
            >
              <Linkedin className="h-4 w-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card-hover text-xs font-semibold text-text-primary hover:text-accent transition-all"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>

          <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>{personalData.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
