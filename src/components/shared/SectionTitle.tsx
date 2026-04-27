import { type ReactNode } from "react";

interface SectionTitleProps {
  label?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const itemsAlign = align === "center" ? "items-center" : "items-start";

  return (
    <div className={`flex flex-col ${itemsAlign} gap-4 ${className}`}>
      {label && (
        <span className="label-caps text-gold">
          {label}
        </span>
      )}
      
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary ${alignClass}`}>
        {title}
      </h2>
      
      <div className="w-16 h-0.5 bg-gold" />
      
      {subtitle && (
        <p className={`text-lg md:text-xl text-text-muted max-w-2xl ${alignClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}