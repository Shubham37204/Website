import { CheckCircle2, Zap } from "lucide-react";

interface TechHighlightsProps {
  highlights: string[];
  accentColor?: string;
}

export default function TechHighlights({
  highlights,
  accentColor = "#22c55e",
}: TechHighlightsProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/80 p-5 shadow-card">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <Zap className="w-4 h-4 text-amber-500" />
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
          Tech Highlights (5-Second Skim)
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="flex items-center gap-2 rounded-lg border border-border bg-bg/50 px-3 py-2 text-xs font-medium text-text-primary"
          >
            <CheckCircle2
              className="w-4 h-4 flex-shrink-0"
              style={{ color: accentColor }}
            />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
