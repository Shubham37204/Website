import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  external?: boolean;
  label: string;
  className?: string;
}

export default function IconButton({
  children,
  href,
  external,
  label,
  className = "",
  ...props
}: IconButtonProps) {
  const classes = `icon-btn ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        aria-label={label}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} aria-label={label} {...props}>
      {children}
    </button>
  );
}
