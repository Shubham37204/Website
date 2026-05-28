import { personalData } from "@/lib/data";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-black/40 backdrop-blur-md py-12 px-6 mt-16 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left branding */}
        <div className="flex flex-col gap-2.5">
          <h2 className="text-xl font-bold font-comfortaa text-accent">shubham.dev</h2>
          <p className="text-text-secondary text-sm max-w-sm leading-relaxed font-sans">
            Crafting intelligent software at the intersection of full-stack engineering and deep learning.
          </p>
          <div className="flex items-center gap-2 text-text-muted text-xs font-mono mt-1">
            <MapPin className="w-3.5 h-3.5 text-accent/70" />
            <span>Ranchi, Jharkhand, India</span>
          </div>
        </div>

        {/* Right Social Links & Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold font-mono tracking-widest text-text-muted uppercase">CONNECT</span>
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:scale-105 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:scale-105 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:scale-105 transition-all duration-300"
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 hover:scale-105 transition-all duration-300"
              aria-label="Call Me"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-text-muted">
        <div>&copy; {currentYear} Shubham Bhardwaj. All rights reserved.</div>
        <div className="flex items-center gap-1.5">
          <span>Built with</span>
          <span className="text-accent hover:animate-pulse">Next.js &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
