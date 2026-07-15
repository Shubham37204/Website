import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "pill-primary" | "pill-secondary";
type ButtonSize = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  download?: boolean;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  "pill-primary": "btn-pill-primary",
  "pill-secondary": "btn-pill-secondary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "",
};

export default function Button({
  variant = "secondary",
  size = "md",
  href,
  external,
  download,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${size !== "md" ? sizeClasses[size] : ""} ${className}`.trim();

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download || undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
