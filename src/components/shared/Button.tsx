import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  icon = false,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 font-medium transition-all duration-base ease-elegant rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-light shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "border-2 border-gold text-gold hover:bg-gold hover:text-white",
    ghost: "text-primary hover:text-gold group",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}