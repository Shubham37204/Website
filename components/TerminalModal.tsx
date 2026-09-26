"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";
import { personalData, skills } from "@/lib/data";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div>
          <p className="text-emerald-400 font-mono font-semibold">
            Shubham Bhardwaj Terminal v1.0.0
          </p>
          <p className="text-text-secondary text-xs mt-1">
            Type <span className="text-accent font-bold">help</span> to see available commands or <span className="text-accent font-bold">skills</span> / <span className="text-accent font-bold">projects</span>.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="text-xs flex flex-col gap-1 text-text-secondary">
            <p><span className="text-accent font-mono font-bold w-24 inline-block">help</span> Show this menu</p>
            <p><span className="text-accent font-mono font-bold w-24 inline-block">whoami</span> About Shubham</p>
            <p><span className="text-accent font-mono font-bold w-24 inline-block">skills</span> List technical skill stack</p>
            <p><span className="text-accent font-mono font-bold w-24 inline-block">projects</span> List flagship projects</p>
            <p><span className="text-accent font-mono font-bold w-24 inline-block">contact</span> Display email & social links</p>
            <p><span className="text-accent font-mono font-bold w-24 inline-block">clear</span> Clear terminal history</p>
          </div>
        );
        break;
      case "whoami":
        outputNode = (
          <div className="text-xs text-text-secondary leading-relaxed">
            <p className="font-semibold text-text-primary">{personalData.name}</p>
            <p>{personalData.title} — {personalData.location}</p>
            <p className="mt-1">{personalData.bio}</p>
          </div>
        );
        break;
      case "skills":
        outputNode = (
          <div className="text-xs flex flex-col gap-1 text-text-secondary">
            <p><span className="text-emerald-400 font-bold">Languages:</span> {skills.languages.map(s => s.name).join(", ")}</p>
            <p><span className="text-cyan-400 font-bold">Web:</span> {skills.webFrameworks.map(s => s.name).join(", ")}</p>
            <p><span className="text-purple-400 font-bold">AI / ML:</span> {skills.aiml.map(s => s.name).join(", ")}</p>
            <p><span className="text-amber-400 font-bold">Cloud / Tools:</span> {skills.toolsCloud.map(s => s.name).join(", ")}</p>
          </div>
        );
        break;
      case "projects":
        outputNode = (
          <div className="text-xs flex flex-col gap-1 text-text-secondary">
            <p><span className="text-accent font-bold">CollabDocs:</span> Real-time editor with Y.js CRDT & Groq Llama-3</p>
            <p><span className="text-accent font-bold">SkimLit:</span> PubMed RCT Medical Abstract Classifier (Multi-input NN)</p>
            <p><span className="text-accent font-bold">RecallAI:</span> Async Meeting Intelligence platform with Redis queues</p>
          </div>
        );
        break;
      case "contact":
        outputNode = (
          <div className="text-xs text-text-secondary flex flex-col gap-1">
            <p>Email: <a href={`mailto:${personalData.email}`} className="text-accent underline">{personalData.email}</a></p>
            <p>GitHub: <a href={personalData.github} target="_blank" rel="noreferrer" className="text-accent underline">{personalData.github}</a></p>
            <p>LinkedIn: <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-accent underline">{personalData.linkedin}</a></p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        outputNode = (
          <p className="text-red-400 text-xs">
            Command not recognized: &quot;{cmd}&quot;. Type <span className="font-bold underline">help</span> for commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInput("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-full border border-accent/40 bg-card/90 px-4 py-2 text-xs font-mono font-semibold text-accent shadow-lg backdrop-blur hover:bg-accent hover:text-bg transition-all duration-200"
        aria-label="Open Interactive Terminal"
      >
        <Terminal className="h-4 w-4" />
        <span className="hidden sm:inline">Terminal</span>
        <kbd className="hidden rounded bg-bg/50 px-1.5 py-0.5 text-[10px] text-text-muted sm:inline-block">
          Ctrl+K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[100] w-[92vw] max-w-lg rounded-xl border border-border bg-card/95 font-mono shadow-2xl backdrop-blur flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-bg/80 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-text-secondary">
          <Terminal className="h-4 w-4 text-accent" />
          <span className="font-semibold text-text-primary">shubham@portfolio:~</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="rounded p-1 text-text-muted hover:bg-card-hover hover:text-text-primary"
          >
            {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded p-1 text-text-muted hover:bg-red-500/20 hover:text-red-400"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Body */}
      {!isMinimized && (
        <div className="p-4 flex flex-col gap-3 max-h-[320px]">
          <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col gap-3 max-h-[240px] pr-1">
            {history.map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="text-accent font-bold">$</span>
                  <span className="text-text-primary">{item.command}</span>
                </div>
                <div className="pl-3">{item.output}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-border/60 pt-2">
            <span className="text-accent text-xs font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help'..."
              className="w-full bg-transparent text-xs text-text-primary focus:outline-none"
              autoFocus
            />
          </form>
        </div>
      )}
    </div>
  );
}
