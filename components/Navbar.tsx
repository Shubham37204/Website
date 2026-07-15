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
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import IconButton from "@/components/ui/IconButton";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setTheme("dark");
    }
  }, []);

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

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Projects",
      href: "/projects",
      icon: <FolderGit2 className="w-4 h-4" />,
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

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-4xl">
        <div className="relative rounded-xl glass px-4 md:px-6 py-3 flex items-center justify-between shadow-nav transition-all duration-250 border border-border">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold font-display text-accent hover:brightness-110 transition-all duration-200 tracking-tight flex items-center gap-2"
          >
            <span>shubham.dev</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-text-secondary hover:text-text-primary hover:bg-card"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full bg-accent" />
                    )}
                    {link.icon}
                    <span className={isActive ? "pl-1" : ""}>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="w-px h-5 bg-border mx-1" />

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

          <div className="flex md:hidden items-center gap-2">
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
