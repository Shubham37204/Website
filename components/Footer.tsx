import { personalData } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import IconButton from "@/components/ui/IconButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 pb-7 pt-4 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 border-t border-border pt-5 text-center">
        <div className="flex items-center gap-2.5">
          <IconButton
            href={personalData.github}
            external
            label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </IconButton>
          <IconButton
            href={personalData.linkedin}
            external
            label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </IconButton>
          <IconButton
            href={`mailto:${personalData.email}`}
            label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </IconButton>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono tracking-wide text-text-muted">
          <span>&copy; {currentYear} {personalData.name}</span>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <span>Press <kbd className="rounded bg-card px-1.5 py-0.5 text-[10px] border border-border text-accent font-semibold">Ctrl K</kbd> for Terminal</span>
            <span><kbd className="rounded bg-card px-1.5 py-0.5 text-[10px] border border-border text-accent font-semibold">Ctrl P</kbd> to Launch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
