"use client";

import { certifications } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
} from "lucide-react";

const featuredCert = certifications[0];
const supportingCerts = certifications.slice(1);

const categoryByTitle = (title: string) => {
  if (title.includes("Cloud") || title.includes("Configuration")) return "Cloud";
  if (title.includes("Git")) return "Git / DevOps";
  if (title.includes("Troubleshooting") || title.includes("Debugging")) return "Debugging";
  if (title.includes("Python") || title.includes("Operating System")) return "Python";
  return "Automation";
};

const credentialGroups = ["Automation", "Cloud", "Git / DevOps", "Debugging", "Python"].map((category) => ({
  category,
  items: supportingCerts.filter((cert) => categoryByTitle(cert.title) === category),
}));

export default function CredentialsPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-7 px-6 py-5">
      <ScrollReveal>
        <section className="flex flex-col gap-2">
          <span className="section-eyebrow !mb-0">Verified credentials</span>
          <h1 className="page-title">Certificates</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
            Google-issued Coursera credentials focused on Python automation, Git/GitHub,
            cloud configuration, debugging, and operating-system workflows.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <section className="grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.08] p-6 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/30 transition-all" />

            <div className="flex items-center gap-2 text-accent">
              <Award className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Google Specialization
              </span>
            </div>

            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-text-primary">
              {featuredCert.title}
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-text-secondary">
              Official Google automation specialization covering Python scripting, system configuration,
              Git/GitHub automation, cloud infrastructure, and real-world debugging techniques.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Badge color="#6366f1">{featuredCert.issuer}</Badge>
              <Badge color="#06b6d4">{featuredCert.date}</Badge>
              <Badge color="#10b981">Verified Certificate</Badge>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="primary" href={featuredCert.pdf}>
                View Certificate PDF
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {[
              "Python automation and scripting fundamentals",
              "Git, GitHub, and version-control workflows",
              "Cloud configuration and operational troubleshooting",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <section className="flex flex-col gap-4">
        <ScrollReveal>
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-xl font-bold text-text-primary">Credential Library</h2>
            <p className="text-sm text-text-secondary">
              Individual course certificates with verification links and local PDFs.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {credentialGroups.map((group, groupIdx) =>
            group.items.length > 0 ? (
              <ScrollReveal key={group.category} delay={groupIdx * 50}>
                <div className="flex flex-col gap-3">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    {group.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {group.items.map((cert) => (
                      <article key={cert.id} className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover relative overflow-hidden">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between gap-3">
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-400">
                              <CheckCircle2 className="h-3 w-3" />
                              {cert.issuer} Verified
                            </span>
                            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                              <Calendar className="h-3 w-3 text-accent" />
                              {cert.date}
                            </span>
                          </div>

                          <h4 className="font-display text-base font-bold leading-snug text-text-primary group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>

                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                            Credential ID: <span className="text-text-secondary font-bold">{cert.id}</span>
                          </p>

                          {cert.url && (
                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] text-accent hover:underline font-mono"
                            >
                              Verify on Coursera &rarr;
                            </a>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-2 border-t border-border pt-3 mt-auto">
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-text-muted">
                            <FileText className="h-3.5 w-3.5 text-accent" />
                            PDF Document
                          </span>
                          <a
                            href={cert.pdf}
                            download
                            className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-bg transition-all"
                          >
                            <span>Download PDF</span>
                            <Download className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ) : null
          )}
        </div>
      </section>

      <ScrollReveal className="flex justify-center pt-1">
        <Button variant="pill-primary" href="/skills">
          Explore skills
          <ArrowRight className="h-4 w-4" />
        </Button>
      </ScrollReveal>
    </div>
  );
}
