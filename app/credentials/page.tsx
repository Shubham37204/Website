"use client";

import Link from "next/link";
import { education, personalData, certifications } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, Calendar, MapPin, Download, ArrowRight, TrendingUp, Clock, Award, ExternalLink } from "lucide-react";

export default function CredentialsPage() {

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12 font-sans">     
      {/* Download Resume Banner */}
      <ScrollReveal delay={100}>
        <div className="rounded-2xl glass p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative overflow-hidden border border-border">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-accent/[0.04] to-transparent" />
          <div className="flex flex-col gap-1 relative z-10">
            <h3 className="text-base font-bold font-comfortaa text-text-primary">Resume</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              View and download the current PDF copy of my resume.
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

      {/* Certifications Section */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-lg font-bold font-comfortaa text-text-primary flex items-center gap-2 pb-2">
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

              <div className="flex items-center gap-3 pt-3 mt-1">
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
