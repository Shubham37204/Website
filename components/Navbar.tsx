"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  FolderGit2,
  ShieldAlert,
  Cpu,
  User,
  Menu,
  X,
} from "lucide-react";

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
    { name: "Forge", href: "/skills", icon: <Cpu className="w-4 h-4" /> },
    { name: "Persona", href: "/about", icon: <User className="w-4 h-4" /> },
    {
      name: "Credentials",
      href: "/credentials",
      icon: <ShieldAlert className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-4xl">
      <div className="relative rounded-2xl glass px-4 md:px-6 py-3 flex items-center justify-between shadow-lg transition-all duration-300 border-accent/10">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-bold font-comfortaa text-accent hover:text-amber-500 transition-colors tracking-wide flex items-center gap-1.5"
        >
          <span>shubham.dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </Link>

        {/* Desktop Navigation Links & Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 font-mono text-xs tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-text-secondary hover:text-accent"
                  }`}
                >
                  {link.icon}
                  <span>{link.name.toUpperCase()}</span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-border" />

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="px-2.5 py-1.5 rounded-lg border border-border/80 bg-card hover:bg-card-hover font-mono text-[10px] font-bold tracking-widest text-text-secondary hover:text-accent transition-colors duration-200"
            >
              {theme === "dark" ? "LIGHT" : "DARK"}
            </button>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Toggle (Mobile) */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="px-2.5 py-1.5 rounded-lg border border-border/80 bg-card font-mono text-[9px] font-bold tracking-wider text-text-secondary hover:text-accent transition-colors"
            >
              {theme === "dark" ? "LIGHT" : "DARK"}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Glass overlay) */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 glass rounded-2xl p-4 flex flex-col gap-2 shadow-2xl border-accent/15 z-[99] md:hidden animate-fade-in">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${
                  isActive
                    ? "bg-accent/10 text-accent font-semibold"
                    : "text-text-secondary hover:text-accent"
                }`}
              >
                {link.icon}
                <span className="font-mono text-xs tracking-wider uppercase">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
