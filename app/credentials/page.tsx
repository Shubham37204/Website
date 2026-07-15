"use client";

import { personalData, certifications } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Download, ArrowRight, Award, ExternalLink, FileText } from "lucide-react";

export default function CredentialsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12">

      {/* Page header */}
      <ScrollReveal>
        <SectionHeader
          title="Credentials"
          description="Resume, certifications, and verified credentials."
          titleClassName="page-title"
        />
      </ScrollReveal>

      {/* Resume — hero-style CTA */}
      <ScrollReveal delay={100}>
        <div className="rounded-xl border border-accent/30 bg-accent/[0.04] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 flex-shrink-0 text-accent">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-display text-text-primary">Resume / CV</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Current PDF resume — full project details, education, and technical skills.
              </p>
              <p className="text-xs font-mono text-text-muted mt-1">
                Full-Stack &amp; AI Engineer &middot; BIT Mesra &middot; 2026
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            href={personalData.resumeUrl}
            external
            className="self-start sm:self-auto flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>
      </ScrollReveal>

      {/* Certifications */}
      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              Certifications
            </h2>
            <p className="text-sm text-text-secondary">
              All issued by Google via Coursera — verified and linked.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 50}>
              <Card hover className="flex flex-col justify-between gap-4 h-full !p-5">
                <div className="flex flex-col gap-2">
                  {/* Header row: issuer badge + date */}
                  <div className="flex items-center justify-between gap-2">
                    <Badge color="#34d399">{cert.issuer}</Badge>
                    <span className="text-xs font-mono text-text-muted">{cert.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold font-display text-text-primary leading-snug">
                    {cert.title}
                  </h3>

                  {/* Credential ID */}
                  <p className="text-[10px] font-mono text-text-muted tracking-wider">
                    ID: {cert.id}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:bg-card-hover transition-all duration-150 focus-ring"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify
                  </a>
                  <a
                    href={cert.pdf}
                    download
                    className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-accent hover:bg-card-hover transition-all duration-150 focus-ring"
                  >
                    <Download className="w-3.5 h-3.5" />
                    PDF
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <ScrollReveal className="flex justify-center pt-2">
        <Button variant="pill-primary" href="/skills">
          Explore skills &amp; technologies
          <ArrowRight className="w-4 h-4" />
        </Button>
      </ScrollReveal>
    </div>
  );
}
