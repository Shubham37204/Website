import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  accentTop?: string;
}

export default function Card({
  children,
  className = "",
  hover = false,
  glass = false,
  accentTop,
}: CardProps) {
  const baseClass = [
    glass ? "card-glass" : "card",
    hover ? "hover:-translate-y-0.5 hover:shadow-card-hover hover:[border-color:var(--accent-border)]" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={`${baseClass} relative overflow-hidden ${className}`}>
      {accentTop && (
        <div
          className="absolute left-0 right-0 top-0 h-0.5"
          style={{ backgroundColor: accentTop }}
        />
      )}
      {children}
    </div>
  );
}
