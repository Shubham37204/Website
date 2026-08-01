import { ArrowRight, Layers } from "lucide-react";

interface ArchitectureDiagramProps {
  steps: string[];
  description?: string;
  accentColor?: string;
}

export default function ArchitectureDiagram({
  steps,
  description,
  accentColor = "var(--accent)",
}: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card/80 p-5 shadow-card">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <Layers className="w-4 h-4 text-accent" />
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
          System Architecture &amp; Data Pipeline
        </h3>
      </div>

      {description && (
        <p className="text-xs text-text-secondary leading-relaxed font-sans">
          {description}
        </p>
      )}

      {/* SVG-styled Pipeline Flow */}
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 py-3">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          return (
            <div key={step} className="flex items-center gap-2">
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-mono font-semibold transition-all shadow-sm"
                style={{
                  borderColor: isLast ? accentColor : "var(--border)",
                  background: isLast ? `${accentColor}15` : "var(--bg)",
                  color: isLast ? accentColor : "var(--text-primary)",
                }}
              >
                <span
                  className="grid h-4 w-4 place-items-center rounded-full text-[9px] font-bold text-bg flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>

              {!isLast && (
                <ArrowRight className="w-4 h-4 text-text-muted flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
