import { type LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  color?: string;
}

interface TabGroupProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function TabGroup({
  tabs,
  activeId,
  onChange,
  className = "",
}: TabGroupProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeId === tab.id;
        const Icon = tab.icon;
        const color = tab.color ?? "var(--accent)";

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className="flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            style={{
              borderColor: isActive ? `${color}66` : "var(--border)",
              color: isActive ? color : "var(--text-secondary)",
              background: isActive ? `${color}18` : "var(--bg-card)",
            }}
          >
            {Icon && <Icon className="h-4 w-4" />}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
