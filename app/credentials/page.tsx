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
          <div className="rounded-lg border border-accent/25 bg-accent/[0.06] p-5">
            <div className="flex items-center gap-2 text-accent">
              <Award className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                Specialization
              </span>
            </div>

            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-text-primary">
              {featuredCert.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Strongest credential signal on this page: a complete automation track covering
              Python scripting, shell workflows, Git, cloud configuration, and production-style
              troubleshooting.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Badge color="#e8552f">{featuredCert.issuer}</Badge>
              <Badge color="#087ea4">{featuredCert.date}</Badge>
              <Badge color="#6d8a2f">PDF available</Badge>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button variant="primary" href={featuredCert.pdf}>
                Open PDF
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
                      <article key={cert.id} className="group flex h-full flex-col justify-between gap-4 rounded-lg border border-border bg-card p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-hover">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between gap-3">
                            <Badge color="#6d8a2f">{cert.issuer}</Badge>
                            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                              <Calendar className="h-3 w-3" />
                              {cert.date}
                            </span>
                          </div>

                          <h4 className="font-display text-base font-bold leading-snug text-text-primary">
                            {cert.title}
                          </h4>

                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                            Credential ID: {cert.id}
                          </p>

                          <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-border bg-bg/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
                            <FileText className="h-3 w-3" />
                            PDF included
                          </span>
                        </div>

                        <div className="flex items-center gap-2 border-t border-border pt-3">
                          <a
                            href={cert.pdf}
                            download
                            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-card-hover hover:text-accent focus-ring"
                          >
                            Open PDF
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
