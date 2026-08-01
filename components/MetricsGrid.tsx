import { ProjectMetric } from "@/lib/types";
import { TrendingUp } from "lucide-react";

interface MetricsGridProps {
  metrics: ProjectMetric[];
  accentColor?: string;
}

export default function MetricsGrid({
  metrics,
  accentColor = "var(--accent)",
}: MetricsGridProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/80 p-5 shadow-card">
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <TrendingUp className="w-4 h-4 text-accent" />
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-text-primary">
          Empirical Engineering Results
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col gap-1 rounded-lg border border-border bg-bg/40 p-3"
            style={{ borderLeftColor: accentColor, borderLeftWidth: "3px" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
              {metric.label}
            </span>
            <span
              className="text-lg font-bold font-mono tracking-tight"
              style={{ color: accentColor }}
            >
              {metric.value}
            </span>
            {metric.detail && (
              <span className="text-xs text-text-secondary">{metric.detail}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
