"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  FolderGit2,
  ShieldAlert,
  Wrench,
  User,
  Briefcase,
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  Search,
} from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import { useTheme } from "@/components/ThemeProvider";
import { personalData } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Projects",
      href: "/projects",
      icon: <FolderGit2 className="w-4 h-4" />,
    },
    {
      name: "Experience",
      href: "/experience",
      icon: <Briefcase className="w-4 h-4" />,
    },
    { name: "Skills", href: "/skills", icon: <Wrench className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <User className="w-4 h-4" /> },
    {
      name: "Credentials",
      href: "/credentials",
      icon: <ShieldAlert className="w-4 h-4" />,
    },
  ];

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm animate-fade-in md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl">
        <div className="relative rounded-2xl glass px-3.5 sm:px-5 py-2 flex items-center justify-between shadow-nav transition-all duration-200 border border-border overflow-hidden">
          {/* Logo */}
          <Link
            href="/"
            className="text-base sm:text-lg font-bold font-display text-accent hover:brightness-110 transition-all duration-200 tracking-tight flex items-center gap-1.5 flex-shrink-0"
          >
            <span>shubham.dev</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 min-w-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? "text-accent bg-accent/10 font-semibold"
                      : "text-text-secondary hover:text-text-primary hover:bg-card-hover"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-3.5 rounded-full bg-accent" />
                  )}
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "p", ctrlKey: true });
                window.dispatchEvent(event);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-2.5 py-1.5 text-xs text-text-muted hover:text-text-primary hover:border-accent/40 transition-all focus-ring"
              aria-label="Search portfolio"
              title="Search Portfolio (Ctrl+P)"
            >
              <Search className="w-3.5 h-3.5 text-accent" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="hidden xl:inline-block rounded bg-bg px-1 py-0.2 text-[9px] font-mono border border-border text-text-muted">
                Ctrl P
              </kbd>
            </button>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-2.5 py-1.5 text-xs font-semibold text-accent hover:bg-accent hover:text-bg transition-all duration-200 focus-ring flex-shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {mounted && (
              <IconButton
                onClick={toggleTheme}
                label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </IconButton>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-1.5 flex-shrink-0">
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "p", ctrlKey: true });
                window.dispatchEvent(event);
              }}
              className="p-2 rounded-lg border border-border bg-card text-accent"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-accent/40 bg-accent/10 px-2 py-1 text-xs font-semibold text-accent"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {mounted && (
              <IconButton
                onClick={toggleTheme}
                label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </IconButton>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="icon-btn"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 glass rounded-xl p-2 flex flex-col gap-1 shadow-nav border border-border z-[99] md:hidden animate-slide-down">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg flex items-center gap-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:text-text-primary hover:bg-card"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}

