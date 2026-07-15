interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  titleClassName = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className={`section-title ${titleClassName}`}>{title}</h2>
      {description && (
        <p className="max-w-xl text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
