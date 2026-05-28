"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, FolderGit2, ShieldAlert, Cpu, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Projects", href: "/projects", icon: <FolderGit2 className="w-4 h-4" /> },
    { name: "Forge", href: "/skills", icon: <Cpu className="w-4 h-4" /> },
    { name: "Persona", href: "/about", icon: <User className="w-4 h-4" /> },
    { name: "Credentials", href: "/experience", icon: <ShieldAlert className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-4xl">
      <div className="relative rounded-2xl glass px-4 md:px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300 border-accent/10 hover:border-accent/20">
        
        {/* Brand Logo */}
        <Link href="/" className="text-lg md:text-xl font-bold font-comfortaa text-accent hover:text-amber-400 transition-colors tracking-wide flex items-center gap-2">
          <span>shubham.dev</span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 font-mono text-xs tracking-wider">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-accent/10 text-accent border border-accent/20 shadow-[0_0_15px_rgba(245,158,11,0.08)]"
                    : "text-text-secondary hover:text-accent hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.icon}
                <span>{link.name.toUpperCase()}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
                    ? "bg-accent/15 text-accent border border-accent/20"
                    : "text-text-secondary hover:text-accent hover:bg-white/5"
                }`}
              >
                {link.icon}
                <span className="font-mono text-xs tracking-wider uppercase">{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
