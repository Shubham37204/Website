import Link from "next/link";
import { ArrowLeft, FolderGit2, Home, Wrench } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/skills", label: "Skills", icon: Wrench },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[62vh] w-full max-w-4xl flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex flex-col items-center gap-5 rounded-lg border border-border bg-card/70 p-6 shadow-card md:p-8">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-accent">
          404 / Route not found
        </p>

        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl font-bold leading-tight text-text-primary md:text-5xl">
            This page does not exist.
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-text-secondary">
            The route may have changed, or the link points to something outside the portfolio.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {quickLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg/60 px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent/30 hover:bg-card-hover hover:text-accent focus-ring"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 pt-1 text-sm font-medium text-accent transition-colors hover:text-text-primary focus-ring"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
