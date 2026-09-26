"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FolderGit2,
  Briefcase,
  Wrench,
  User,
  ShieldAlert,
  FileText,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
import { projects } from "@/lib/projects";
import { personalData } from "@/lib/data";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Projects" | "Links";
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "p") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigationItems: CommandItem[] = [
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Overview & Featured Projects",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-accent" />,
      action: () => router.push("/"),
    },
    {
      id: "nav-projects",
      title: "Projects",
      subtitle: "Browse all engineering case studies",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-accent" />,
      action: () => router.push("/projects"),
    },
    {
      id: "nav-experience",
      title: "Experience",
      subtitle: "Timeline & Education",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-accent" />,
      action: () => router.push("/experience"),
    },
    {
      id: "nav-skills",
      title: "Skills",
      subtitle: "Full Stack & AI/ML tech stack",
      category: "Navigation",
      icon: <Wrench className="w-4 h-4 text-accent" />,
      action: () => router.push("/skills"),
    },
    {
      id: "nav-about",
      title: "About",
      subtitle: "Background & Engineering principles",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-accent" />,
      action: () => router.push("/about"),
    },
    {
      id: "nav-credentials",
      title: "Credentials",
      subtitle: "Google IT & Python certifications",
      category: "Navigation",
      icon: <ShieldAlert className="w-4 h-4 text-accent" />,
      action: () => router.push("/credentials"),
    },
  ];

  const projectItems: CommandItem[] = projects.map((p) => ({
    id: `project-${p.slug}`,
    title: p.title,
    subtitle: p.tagline,
    category: "Projects",
    icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
    action: () => router.push(`/projects/${p.slug}`),
  }));

  const linkItems: CommandItem[] = [
    {
      id: "link-github",
      title: "GitHub Profile",
      subtitle: "@Shubham37204",
      category: "Links",
      icon: <Github className="w-4 h-4 text-purple-400" />,
      action: () => window.open(personalData.github, "_blank"),
    },
    {
      id: "link-linkedin",
      title: "LinkedIn Profile",
      subtitle: "Shubham Bhardwaj",
      category: "Links",
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => window.open(personalData.linkedin, "_blank"),
    },
    {
      id: "link-resume",
      title: "Resume PDF",
      subtitle: "Google Drive link",
      category: "Links",
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => window.open(personalData.resumeUrl, "_blank"),
    },
    {
      id: "link-email",
      title: "Email",
      subtitle: personalData.email,
      category: "Links",
      icon: <Mail className="w-4 h-4 text-red-400" />,
      action: () => window.open(`mailto:${personalData.email}`, "_self"),
    },
  ];

  const allItems = [...navigationItems, ...projectItems, ...linkItems];

  const filteredItems = query.trim()
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase()))
      )
    : allItems;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]">
        {/* Search header */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3 bg-bg/50">
          <Search className="w-4 h-4 text-text-muted flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search projects... (Ctrl+P)"
            className="w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded text-text-muted hover:bg-card-hover hover:text-text-primary"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="overflow-y-auto p-2 flex flex-col gap-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-accent/10 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-1.5 rounded-md bg-card border border-border group-hover:border-accent/30 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-text-primary group-hover:text-accent truncate">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className="text-[11px] text-text-muted truncate">{item.subtitle}</p>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-text-muted uppercase flex-shrink-0 border border-border px-1.5 py-0.5 rounded">
                  {item.category}
                </span>
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-text-muted">
              No results found for &quot;{query}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
