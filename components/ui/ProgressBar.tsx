interface ProgressBarProps {
  value: number;
  color?: string;
  className?: string;
}

export default function ProgressBar({
  value,
  color = "var(--accent)",
  className = "",
}: ProgressBarProps) {
  return (
    <div className={`h-1.5 overflow-hidden rounded-full bg-card-hover ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
}
