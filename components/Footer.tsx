import { personalData } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import IconButton from "@/components/ui/IconButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 mt-16 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
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

        <div className="w-full max-w-xs h-px bg-border" />

        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-text-muted">
          <span>&copy; {currentYear} {personalData.name}</span>
          <span className="hidden sm:inline text-border">·</span>
          <span>Built with Next.js &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
