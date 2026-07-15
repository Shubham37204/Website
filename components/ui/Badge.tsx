interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export default function Badge({ children, className = "", color }: BadgeProps) {
  return (
    <span
      className={`badge ${className}`}
      style={color ? { borderColor: `${color}44`, color } : undefined}
    >
      {children}
    </span>
  );
}
