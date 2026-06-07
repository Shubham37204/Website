import { personalData } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 mt-16 relative z-10 font-mono text-[11px] text-text-muted">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Social Links Row */}
        <div className="flex items-center gap-4 mb-1">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-accent transition-colors"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Center Copyright info */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span>&copy; {currentYear} {personalData.name.toUpperCase()}</span>
          <span className="hidden sm:inline">•</span>
          <span>BUILT WITH NEXT.JS &amp; TAILWIND</span>
        </div>
      </div>
    </footer>
  );
}
