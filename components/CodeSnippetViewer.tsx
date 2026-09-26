"use client";

import React, { useState } from "react";
import { Code2, Copy, Check, Terminal } from "lucide-react";

interface Snippet {
  filename: string;
  language: string;
  code: string;
  description: string;
}

interface Props {
  snippets: Snippet[];
}

export default function CodeSnippetViewer({ snippets }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!snippets || snippets.length === 0) return null;

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-slate-950 font-mono shadow-2xl overflow-hidden my-4">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border/80 bg-slate-900/90 px-4 py-2.5">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Code2 className="h-4 w-4 text-accent flex-shrink-0" />
          <span className="text-xs text-text-muted font-bold mr-2 uppercase tracking-wider">
            Core Implementation
          </span>
          {snippets.map((snip, idx) => (
            <button
              key={snip.filename}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === idx
                  ? "bg-accent/20 text-accent border border-accent/40"
                  : "text-text-muted hover:text-text-primary hover:bg-slate-800"
              }`}
            >
              {snip.filename}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-sans font-medium text-text-muted hover:text-accent hover:bg-slate-800 transition-colors flex-shrink-0"
          title="Copy code"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      {/* Description */}
      <div className="px-4 pt-2 text-xs text-slate-400 font-sans leading-relaxed border-b border-slate-800/60 pb-2">
        <span className="font-bold text-accent font-mono uppercase mr-2">Architectural Logic:</span>
        {currentSnippet.description}
      </div>

      {/* Code body */}
      <pre className="p-4 text-xs leading-relaxed text-slate-200 overflow-x-auto font-mono bg-slate-950/80">
        <code>{currentSnippet.code}</code>
      </pre>
    </div>
  );
}
