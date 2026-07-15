"use client";

import { personalData, certifications } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Download, ArrowRight, Award, ExternalLink } from "lucide-react";

export default function CredentialsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-12">
      <ScrollReveal delay={100}>
        <Card className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-accent/[0.04] to-transparent rounded-xl" />
          <div className="flex flex-col gap-1 relative z-10">
            <h3 className="text-lg font-bold font-display text-text-primary">Resume</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              View and download the current PDF copy of my resume.
            </p>
          </div>
          <Button
            variant="primary"
            href={personalData.resumeUrl}
            external
            className="self-start sm:self-auto relative z-10 flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            Download resume
          </Button>
        </Card>
      </ScrollReveal>

      <div className="flex flex-col gap-6">
        <ScrollReveal>
          <h2 className="text-xl font-bold font-display text-text-primary flex items-center gap-2 pb-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Certifications</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={cert.id} delay={idx * 50}>
              <Card hover className="flex flex-col justify-between gap-4 h-full !p-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge color="#34d399">{cert.issuer}</Badge>
                    <span className="text-xs font-mono text-text-muted">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold font-display text-text-primary leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-text-secondary">
                    Credential ID: {cert.id}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 mt-1 border-t border-border">
                  <Button variant="ghost" href={cert.url} external className="!px-2 !py-1.5 text-xs">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify credential
                  </Button>
                  <Button variant="ghost" href={cert.pdf} download className="!px-2 !py-1.5 text-xs">
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal className="flex justify-center pt-2">
        <Button variant="pill-primary" href="/skills">
          Explore skills &amp; technologies
          <ArrowRight className="w-4 h-4" />
        </Button>
      </ScrollReveal>
    </div>
  );
}
