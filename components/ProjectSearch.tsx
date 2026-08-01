"use client";

import { Search, X } from "lucide-react";

interface ProjectSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  totalCount: number;
  filteredCount: number;
}

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack & Realtime" },
  { id: "aiml", label: "AI / ML & NLP" },
  { id: "systems", label: "Systems & Tools" },
];

export default function ProjectSearch({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  totalCount,
  filteredCount,
}: ProjectSearchProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Category Pills & Search Input Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? "bg-accent text-bg font-semibold shadow-sm"
                    : "bg-card border border-border text-text-secondary hover:text-text-primary hover:bg-card-hover"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tech, titles, keywords..."
            className="w-full pl-9 pr-8 py-1.5 rounded-lg border border-border bg-card text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Result Counter */}
      <div className="text-[11px] font-mono text-text-muted text-right">
        Showing{" "}
        <strong className="text-accent font-semibold">{filteredCount}</strong> of {totalCount}{" "}
        projects
      </div>
    </div>
  );
}
